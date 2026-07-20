// Single source of truth for UVA-DSA lab dissertations & theses.
// Consumed by both the People (Alumni) page and the Publications page.
//
// `author` MUST match the alumni member `name` on the People page so the
// "- Dissertation" link can be attached to the right person.
// `title` may be left empty until confirmed; consumers fall back to a
// generated label ("<degree> Dissertation, University of Virginia").

export type Dissertation = {
  author: string; // matches the alumni name on the People page
  degree: string; // e.g. "Ph.D." | "M.Sc."
  year: string;
  title: string; // empty string if not yet confirmed
  url: string; // UVA Library (Virgo) / Libra record
};

export const dissertations: Dissertation[] = [
  {
    author: "Zongyu (Zoey) Li",
    degree: "Ph.D.",
    year: "2025",
    title: "",
    url: "https://search.lib.virginia.edu/sources/uva_library/items/br86b5297",
  },
  {
    author: "Xugui Zhou",
    degree: "Ph.D.",
    year: "2024",
    title: "Context-Aware Assurance in Cyber-Physical Systems",
    url: "https://doi.org/10.18130/815r-cp45",
  },
  {
    author: "Kay Hutchinson",
    degree: "Ph.D.",
    year: "2023",
    title:
      "Fine-Grained Activity Modeling, Recognition, and Error Analysis in Robot-Assisted Surgery",
    url: "https://doi.org/10.18130/yyjy-7e83",
  },
  {
    author: "Mustafa Hotaki",
    degree: "M.Sc.",
    year: "2020",
    title:
      "Data-Diverse Redundant Processing for Noise-Robust Automatic Speech Recognition",
    url: "https://doi.org/10.18130/v3-6jac-5d21",
  },
  {
    author: "Bulbul Ahmed",
    degree: "M.Sc.",
    year: "2019",
    title:
      "Synthesis of a Context-Aware Safety Monitor for an Artificial Pancreas System",
    url: "https://doi.org/10.18130/v3-ep7b-m342",
  },
  {
    author: "Sile Shu",
    degree: "M.Sc.",
    year: "2019",
    title:
      "A Cognitive Assistant System for Context Inference and Decision Making in Emergency Medical Services",
    url: "https://doi.org/10.18130/v3-5gmk-cm25",
  },
];

// Lookup by author name (as it appears on the People page).
export const dissertationByAuthor: Record<string, Dissertation> =
  dissertations.reduce((acc, d) => {
    acc[d.author] = d;
    return acc;
  }, {} as Record<string, Dissertation>);
