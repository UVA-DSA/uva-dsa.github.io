"use client";

// styles moved to global stylesheet (globals.css)
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { dissertations } from "@/data/dissertations";

type PublicationItem = {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  url: string;
  category?: Category;
};

type PublicationsPayload = {
  source?: string;
  generatedAt?: string;
  userId?: string | null;
  items: PublicationItem[];
  error?: string;
};

type Category =
  | "Pre-prints"
  | "Journals"
  | "Conferences"
  | "Workshops"
  | "Dissertations";

// Order in which categories are displayed (Pre-prints first).
const CATEGORY_ORDER: Category[] = [
  "Pre-prints",
  "Journals",
  "Conferences",
  "Workshops",
  "Dissertations",
];

// Fallback classifier for items missing a precomputed `category` (the
// fetch-scholar script normally sets it). Mirrors that script's logic.
function classify(venue?: string): Category {
  const v = (venue || "").toLowerCase().trim();
  if (
    /\barxiv\b|preprint|techrxiv|biorxiv|medrxiv|\bssrn\b|research square|authorea|technical report|\breport no\.?\b/.test(
      v
    )
  )
    return "Pre-prints";
  if (/\b(thesis|dissertation)\b/.test(v)) return "Dissertations";
  if (
    /\buniversity\b/.test(v) &&
    !/(conference|symposium|proceedings|workshop|transactions|journal|letters)/.test(v)
  )
    return "Dissertations";
  if (/workshop|dsn-w/.test(v)) return "Workshops";
  if (
    /(transactions|journal|letters|ieee access|\baccess \d|computing surveys|magazine|big data|plos one|security & privacy|design & test|\bcomputer \d|sigbed)/.test(
      v
    )
  )
    return "Journals";
  return "Conferences";
}

export default function Publications() {
  const [data, setData] = useState<PublicationsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/publications.json", { cache: "no-cache" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as PublicationsPayload;
        setData(json);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Failed to load publications.";
        setError(msg);
      }
    };
    fetchData();
  }, []);

  const scholarUserId = process.env.NEXT_PUBLIC_SCHOLAR_USER_ID;
  const scholarUrl = scholarUserId
    ? `https://scholar.google.com/citations?user=${encodeURIComponent(
        scholarUserId
      )}&hl=en&sortby=pubdate`
    : undefined;

  return (
    <section className="publicationsSection">

      {!data && !error && (
        <div className="publicationsLoading">Loading latest publications…</div>
      )}

      {error && (
        <div className="publicationsError">
          Could not load publications. {error}
        </div>
      )}

      {data && data.items && data.items.length > 0 ? (
        (() => {
          const grouped = data.items.reduce<Record<Category, PublicationItem[]>>(
            (acc, p) => {
              const c =
                p.category && CATEGORY_ORDER.includes(p.category)
                  ? p.category
                  : classify(p.venue);
              (acc[c] = acc[c] || []).push(p);
              return acc;
            },
            {} as Record<Category, PublicationItem[]>
          );

          // Add the lab's UVA dissertations/theses (from the People > Alumni
          // page) to the Dissertations section.
          const labDissertations: PublicationItem[] = dissertations.map((d) => {
            const kind = d.degree.toLowerCase().startsWith("ph")
              ? "Dissertation"
              : "Thesis";
            const label = `${d.degree} ${kind}, University of Virginia`;
            return {
              title: d.title || label,
              authors: d.author,
              venue: label,
              year: d.year,
              url: d.url,
              category: "Dissertations" as Category,
            };
          });
          grouped["Dissertations"] = [
            ...(grouped["Dissertations"] || []),
            ...labDissertations,
          ];
          return CATEGORY_ORDER.filter(
            (c) => grouped[c] && grouped[c].length > 0
          ).map((category) => (
            <div key={category} className="publicationCategory">
              <h2 className="publicationCategoryTitle">{category}</h2>
              <ol className="publicationsList">
                {grouped[category].map((p, idx) => (
                  <li key={`${p.title}-${idx}`} className="publicationItem">
                    <a
                      className="publicationTitle link"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFilePdf size={15} className="icon" />
                      {p.title}
                    </a>
                    <div className="publicationMeta">
                      {p.authors && (
                        <span className="authors">{p.authors}</span>
                      )}
                      {p.venue && (
                        <>
                          <span className="sep"> • </span>
                          <span className="venue">{p.venue}</span>
                        </>
                      )}
                      {p.year && (
                        <>
                          <span className="sep"> • </span>
                          <span className="year">{p.year}</span>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ));
        })()
      ) : (
        data && (
          <div className="publicationsEmpty">
            No publications found. Make sure the build has access to your
            Google Scholar user ID.
            {scholarUrl && (
              <>
                {" "}
                <a className="link" href={scholarUrl} target="_blank" rel="noopener noreferrer">
                  View profile on Google Scholar
                </a>
                .
              </>
            )}
          </div>
        )
      )}
    </section>
  );
}
