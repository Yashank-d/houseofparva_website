import type { MetadataRoute } from "next";
import { SITE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/parvaweddings`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/parvaorigins`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
