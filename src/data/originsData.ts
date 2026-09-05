// ── PARVA ORIGINS — FAMILY ARCHIVE DATA ─────────────────────────────────────
// This is the single source of truth for Origins, desktop + mobile.
// The archive is intentionally EMPTY — add your first family stories here.
//
// HOW TO ADD A STORY:
//   1. Copy the TEMPLATE below into originWorks.
//   2. Fill in family name, location, date, story lines.
//   3. Paste image links into `gallery` (Cloudinary or otherwise).
//   4. The first gallery image (or `mainImage`) becomes the cover.
//   5. Mobile wall + desktop record open automatically. Nothing else to touch.
//
// RATIO (optional, height ÷ width, e.g. 1.25 portrait / 0.75 landscape):
//   Measured automatically for Cloudinary links. Only set it by hand for
//   non-Cloudinary images whose placeholder looks off.

export interface OriginWork {
  id: string;
  family: string;
  location: string;
  date: string;
  mainImage: string;
  story: string;
  details: string;
  gallery: string[];
  ratio?: number;
}

export const originWorks: OriginWork[] = [
  // ── TEMPLATE ── (copy, fill, uncomment)
  // {
  //   id: "sharma-housewarming",
  //   family: "The Sharma Family",
  //   location: "Bangalore, Karnataka",
  //   date: "March 2026",
  //   mainImage: "https://res.cloudinary.com/<cloud>/image/upload/<id>.jpg",
  //   story: "A morning of marigolds and mantras as the Sharmas stepped into their new home.",
  //   details: "Housewarming — griha pravesh rituals at dawn.",
  //   gallery: [
  //     "https://res.cloudinary.com/<cloud>/image/upload/<id>.jpg",
  //   ],
  // },
];
