// ── PARVA ORIGINS — FAMILY GALLERY ──────────────────────────────────────────
// One flat photo wall. No projects, no albums — just every family frame,
// shown desktop + mobile straight from this list.
//
// HOW TO ADD PHOTOS:
//   1. Export all image URLs from Cloudinary at once (command below — run it
//      on your own machine, it prints ready-to-paste lines).
//   2. Paste the lines into originGallery.
//   3. Rebuild. The desktop grid, mobile wall, viewers and empty states all
//      switch on automatically. Nothing else to touch.
//
// BULK EXPORT (Admin API — needs your key + secret from Cloudinary
// Dashboard → Settings → API keys; never share the secret):
//
//   CLOUD=<cloud_name> KEY=<api_key> SECRET=<api_secret> FOLDER=<folder/path>
//   curl -s "https://$KEY:$SECRET@api.cloudinary.com/v1_1/$CLOUD/resources/image/upload?prefix=$FOLDER/&max_results=500" \
//     | python3 -c 'import json,sys; [print("    \"" + r["secure_url"] + "\",") for r in json.load(sys.stdin).get("resources", [])]'
//
//   (>500 photos? The response includes `next_cursor` — repeat the call with
//    ...&next_cursor=<cursor> appended, until no cursor comes back.)
//
export const originGallery: string[] = [
  "https://res.cloudinary.com/fdzu3ih2/image/upload/new-253.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/new-242.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/new-190.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/new-176.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/new-97.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC08230.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC08196.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC08081.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC08062.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC07316.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC07129.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC07104.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC07035.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC06828.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC06797.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC01580.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC01549.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC01534.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC01385.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC01273.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00804.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00759.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00583.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00564.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00506.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00490.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00145.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC00108.jpeg",
  "https://res.cloudinary.com/fdzu3ih2/image/upload/DSC06886.jpeg",
];

// Kept for later: if Origins ever grows project stories like Weddings,
// each entry below becomes one journal record. Ignore for now.
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

export const originWorks: OriginWork[] = [];
