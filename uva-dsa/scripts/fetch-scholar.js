/*
  Build-time Google Scholar scraper.
  - Reads: SCHOLAR_USER_ID (or NEXT_PUBLIC_SCHOLAR_USER_ID)
  - Writes: public/publications.json

  Notes:
  - This runs before `next build` via the `prebuild` script in package.json.
  - Uses a realistic User-Agent to reduce the chances of being blocked.
  - Only parses the latest publications list (sorted by date) from the profile page.
*/

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
let cheerio = null;
try {
  // Optional: if not installed locally, we degrade gracefully
  cheerio = require("cheerio");
} catch (_) {
  // noop – we'll handle absence in parsePublications
}

async function fetchScholarHTML(userId) {
  const url = `https://scholar.google.com/citations?user=${encodeURIComponent(
    userId
  )}&hl=en&sortby=pubdate`;

  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      // Bypass Google consent interstitial which can appear on CI runners
      // and returns a consent page instead of Scholar HTML.
      Cookie: "CONSENT=YES+",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch Google Scholar HTML. Status ${res.status}`);
  }
  return await res.text();
}

function parsePublications(html, maxItems = 100) {
  if (!cheerio) {
    console.warn(
      "[fetch-scholar] 'cheerio' not installed. Skipping parse and returning empty list."
    );
    return [];
  }
  const $ = cheerio.load(html);

  const items = [];
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

    items.push({ title, authors, venue, year, url });
  });

  return items;
}

async function main() {
  const userId =
    process.env.SCHOLAR_USER_ID || process.env.NEXT_PUBLIC_SCHOLAR_USER_ID;

  const outputPath = path.join(__dirname, "../public/publications.json");
  const result = {
    source: "google-scholar",
    generatedAt: new Date().toISOString(),
    userId: userId || null,
    items: [],
  };

  if (!userId) {
    console.warn(
      "[fetch-scholar] SCHOLAR_USER_ID not set. Writing empty publications.json."
    );
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    return;
  }

  try {
    const html = await fetchScholarHTML(userId);
    const items = parsePublications(html, 100);
    result.items = items;
  } catch (err) {
    console.error("[fetch-scholar] Error:", err.message || err);
    result.error = String(err && err.message ? err.message : err);
  }

  // If parsing yielded no items, preserve any existing publications.json
  // to avoid wiping the site list when Scholar blocks CI.
  if ((!result.items || result.items.length === 0) && fs.existsSync(outputPath)) {
    try {
      const prev = JSON.parse(fs.readFileSync(outputPath, "utf8"));
      if (prev && Array.isArray(prev.items) && prev.items.length > 0) {
        console.warn(
          "[fetch-scholar] No items parsed; keeping previous publications.json."
        );
        // Keep previous items, but update metadata so the page doesn't look stale.
        result.items = prev.items;
      }
    } catch (_) {
      // ignore and proceed to write empty
    }
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(
    `[fetch-scholar] Wrote ${result.items.length} items to public/publications.json`
  );
}

main().catch((e) => {
  console.error("[fetch-scholar] Unhandled error:", e);
  process.exitCode = 1;
});
