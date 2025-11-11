"use client";

// styles moved to global stylesheet (globals.css)
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

type PublicationItem = {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  url: string;
};

type PublicationsPayload = {
  source?: string;
  generatedAt?: string;
  userId?: string | null;
  items: PublicationItem[];
  error?: string;
};

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
      <h1 className="sectionTitle">Publications</h1>
      <p className="intro publicationsIntro">
        Automatically populated from Google Scholar at build time.
      </p>

      {!data && !error && (
        <div className="publicationsLoading">Loading latest publications…</div>
      )}

      {error && (
        <div className="publicationsError">
          Could not load publications. {error}
        </div>
      )}

      {data && data.items && data.items.length > 0 ? (
        <ol className="publicationsList">
          {data.items.map((p, idx) => (
            <li key={`${p.title}-${idx}`} className="publicationItem">
              <a
                className="publicationTitle link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFilePdf size={15} className="icon" />{p.title}
              </a>
              <div className="publicationMeta">
                {p.authors && <span className="authors">{p.authors}</span>}
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
