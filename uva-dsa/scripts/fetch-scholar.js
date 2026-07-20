/**
 * Improved Google Scholar Scraper
 * - Reliable on Vercel/CI
 * - Retries on consent / captcha pages
 * - Never overwrites with empty items unless no prior file exists
 */

const fs = require("fs");
const path = require("path");
let cheerio;

try {
  cheerio = require("cheerio");
} catch (e) {
  console.error("[fetch-scholar] ERROR: cheerio is not installed.");
  process.exit(1);
}

async function fetchWithRetries(url, options, retries = 5) {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, options);
    const html = await res.text();

    // Detect consent / captcha pages
    const looksBlocked =
      html.includes("consent.google.com") ||
      html.includes("captcha") ||
      html.includes("Our systems have detected unusual traffic") ||
      html.includes("To continue, please");

    if (!looksBlocked) return html;

    console.warn(
      `[fetch-scholar] Blocked attempt ${i + 1}/${retries}. Retrying…`
    );
    await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
  }

  throw new Error("Google Scholar returned consent/captcha repeatedly.");
}

async function fetchScholarHTML(userId) {
  const url = `https://scholar.google.com/citations?user=${encodeURIComponent(
  userId
  )}&hl=en&sortby=pubdate&cstart=0&pagesize=100`;

  return fetchWithRetries(
    url,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        Accept: "text/html",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: "CONSENT=YES+",
      },
    },
    5
  );
}

/**
 * Classify a Google Scholar entry into one of the publication categories we
 * keep, or return null to drop it entirely.
 *
 * Kept categories: "Pre-prints", "Journals", "Conferences", "Workshops",
 * "Dissertations". Everything else — grants/awards, program-committee and
 * workshop-organization service entries, patents, and unrecognized/venue-less
 * rows — is dropped.
 */
function categorize(title, venue) {
  const t = (title || "").toLowerCase().trim();
  const v = (venue || "").toLowerCase().trim();

  // ---- DROP: grants / travel grants / award records ----
  if (/nsf award|award number|\btravel grant\b/.test(v)) return null;

  // ---- DROP: patents ----
  if (/\bpatent\b/.test(v)) return null;

  // ---- DROP: service / editorial / organization / award entries ----
  // These phrases never appear in real paper titles.
  if (
    /message from the|program committee|organizing committee|track chair|general chair|workshop chairs|test of time award/.test(
      t
    )
  )
    return null;
  // Venue-less rows that are clearly awards/committees/organization (not papers).
  if (!v && /\b(award|prize|organization|committee|keynote)\b/.test(t)) return null;

  // ---- DROP: DSML workshop entries (organization / introduction / proceedings,
  // not individual papers) — "International Workshop on Dependable and Secure
  // Machine Learning (DSML)". ----
  if (
    /international workshop on dependable and secure machine learning|\bdsml\b/.test(
      t
    )
  )
    return null;

  // ---- PRE-PRINTS ----
  if (
    /\barxiv\b|preprint|techrxiv|biorxiv|medrxiv|\bssrn\b|research square|authorea|coordinated science laboratory report|technical report|\breport no\.?\b/.test(
      v
    )
  )
    return "Pre-prints";

  // ---- DISSERTATIONS / THESES ----
  if (/\b(thesis|dissertation)\b/.test(v)) return "Dissertations";
  if (
    /\buniversity\b/.test(v) &&
    !/(conference|symposium|proceedings|workshop|transactions|journal|letters)/.test(v)
  )
    return "Dissertations";

  // ---- WORKSHOPS ----
  if (/workshop|dsn-w/.test(v)) return "Workshops";

  // ---- CONFERENCES ----
  if (
    /(conference|symposium|proceedings|colloquium|\bmeeting\b|\bicra\b|\biros\b|\bissre\b|\bprdc\b|\bitc\b|\bacl\b|\bemnlp\b|\baaai\b|test conference)/.test(
      v
    )
  )
    return "Conferences";

  // ---- JOURNALS ----
  if (
    /(transactions|journal|letters|ieee access|\baccess \d|computing surveys|magazine|big data|plos one|security & privacy|design & test|\bcomputer \d|sigbed)/.test(
      v
    )
  )
    return "Journals";

  // ---- Unknown / venue-less → drop ----
  return null;
}

function parsePublications(html, maxItems = 100) {
  const $ = cheerio.load(html);
  const items = [];
  let dropped = 0;

  $("tr.gsc_a_tr").each((_, el) => {
    if (items.length >= maxItems) return false;

    const row = $(el);
    const titleEl = row.find("a.gsc_a_at");
    const title = titleEl.text().trim();
    const href = titleEl.attr("href");

    if (!title || !href) return;

    const url = href.startsWith("http")
      ? href
      : `https://scholar.google.com${href}`;

    const metaLines = row.find("div.gs_gray");
    const authors = $(metaLines.get(0)).text().trim();
    const venue = $(metaLines.get(1)).text().trim();
    const year = row.find("td.gsc_a_y span").text().trim();

    const category = categorize(title, venue);
    if (!category) {
      dropped++;
      return; // skip grants, awards, committees, organization, patents, etc.
    }

    items.push({ title, authors, venue, year, url, category });
  });

  if (dropped > 0) {
    console.log(`[fetch-scholar] Dropped ${dropped} non-publication entries.`);
  }

  return items;
}

async function main() {
  //const userId = 
    //process.env.SCHOLAR_USER_ID || process.env.NEXT_PUBLIC_SCHOLAR_USER_ID;
  const userId = "sXpmLxUAAAAJ";

  const outputPath = path.join(__dirname, "../public/publications.json");
  const result = {
    source: "google-scholar",
    generatedAt: new Date().toISOString(),
    userId: userId || null,
    items: [],
  };

  if (!userId) {
    console.warn("[fetch-scholar] SCHOLAR_USER_ID not set.");
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    return;
  }

  try {
    const html = await fetchScholarHTML(userId);
    const items = parsePublications(html);

	// group by year
	const byYear = {};
	items.forEach((pub) => {
	  const y = pub.year || "Unknown";
	  if (!byYear[y]) byYear[y] = [];
	  byYear[y].push(pub);
	});
	
    if (items.length > 0) {
      result.items = items;
      result.byYear = byYear;
    } else {
      throw new Error("Parsed 0 publications — likely blocked by Scholar.");
    }
  } catch (err) {
    console.error("[fetch-scholar] ERROR:", err.message || err);
    result.error = String(err);
  }

  // Preserve existing data if current run fails
  if (result.items.length === 0 && fs.existsSync(outputPath)) {
    const prev = JSON.parse(fs.readFileSync(outputPath, "utf8"));
    if (Array.isArray(prev.items) && prev.items.length > 0) {
      console.warn(
        "[fetch-scholar] Keeping previous publications.json due to empty parse."
      );
      result.items = prev.items;
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(
    `[fetch-scholar] ✔ Wrote ${result.items.length} publications to publications.json`
  );
}

main().catch((err) => {
  console.error("[fetch-scholar] Fatal error:", err);
  process.exit(1);
});
