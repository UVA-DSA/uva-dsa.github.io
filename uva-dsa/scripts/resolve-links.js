/**
 * Resolve Google Scholar citation links to the actual paper URL.
 *
 * For every publication whose `url` points at a Scholar "view_citation" page,
 * fetch that page and take the publisher link Scholar shows on the title
 * (a.gsc_oci_title_link). If that is missing, look through the "All N
 * versions" cluster and prefer a DOI / publisher / arXiv link.
 *
 * Results are cached in scripts/publication-links.json (keyed by the Scholar
 * citation id) and consumed by fetch-scholar.js, so CI never has to hit
 * Scholar for these. Run manually when new papers show up:
 *
 *   node scripts/resolve-links.js          # only unresolved entries
 *   node scripts/resolve-links.js --all    # re-resolve everything
 */
const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const pubsPath = path.join(__dirname, "../public/publications.json");
const cachePath = path.join(__dirname, "publication-links.json");
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
  Accept: "text/html",
  "Accept-Language": "en-US,en;q=0.9",
  Cookie: "CONSENT=YES+",
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function citationId(url) {
  const m = /citation_for_view=([^&]+)/.exec(url || "");
  return m ? decodeURIComponent(m[1]) : null;
}

function isScholar(url) {
  return /scholar\.google\./.test(url || "");
}

async function get(url) {
  const res = await fetch(url, { headers: HEADERS });
  const html = await res.text();
  if (
    html.includes("consent.google.com") ||
    /captcha/i.test(html) ||
    html.includes("unusual traffic")
  ) {
    throw new Error("BLOCKED");
  }
  return html;
}

// Rank candidate links: publisher/DOI first, arXiv next, everything else last.
function rank(u) {
  if (/doi\.org|ieeexplore|dl\.acm\.org|springer|sciencedirect|wiley|nature\.com|aclanthology|mdpi|liebertpub|sagepub|tandfonline|frontiersin|plos|jmir|arxiv\.org\/abs/.test(u)) return 0;
  if (/arxiv\.org|techrxiv|biorxiv|medrxiv|ssrn|osf\.io/.test(u)) return 1;
  if (/researchgate|semanticscholar|academia\.edu|google\.com|scholar\.archive/.test(u)) return 9;
  return 5;
}

async function resolveOne(item) {
  const html = await get(item.url);
  const $ = cheerio.load(html);
  const primary = $("a.gsc_oci_title_link").attr("href");
  const candidates = [];
  if (primary && !isScholar(primary)) candidates.push(primary);

  const versions = $('a[href*="cluster="]').first().attr("href");
  if (versions) {
    await sleep(2500);
    const vhtml = await get(
      versions.startsWith("http") ? versions : `https://scholar.google.com${versions}`
    );
    const $$ = cheerio.load(vhtml);
    $$("h3.gs_rt a, div.gs_or_ggsm a, div.gs_ggs a").each((_, a) => {
      const h = $$(a).attr("href");
      if (h && /^https?:/.test(h) && !isScholar(h)) candidates.push(h);
    });
  }
  candidates.sort((a, b) => rank(a) - rank(b));
  return candidates[0] || null;
}

async function main() {
  const all = process.argv.includes("--all");
  const items = JSON.parse(fs.readFileSync(pubsPath, "utf8")).items || [];
  const cache = fs.existsSync(cachePath)
    ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
    : {};
  const save = () => fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n");

  let done = 0;
  for (const item of items) {
    const id = citationId(item.url);
    if (!id) continue; // not a Scholar link (already overridden)
    if (!all && cache[id] && cache[id].url) continue;
    try {
      const url = await resolveOne(item);
      cache[id] = { title: item.title, url, resolvedAt: new Date().toISOString() };
      console.log(`${url ? "✔" : "✘"} ${item.title.slice(0, 70)} -> ${url || "(none)"}`);
    } catch (e) {
      if (e.message === "BLOCKED") {
        console.error("Blocked by Scholar; saving progress and stopping.");
        break;
      }
      console.error(`! ${item.title.slice(0, 70)}: ${e.message}`);
    }
    save();
    done++;
    await sleep(3000);
  }
  save();
  console.log(`Resolved ${done} entries; cache has ${Object.keys(cache).length}.`);
}

main();
