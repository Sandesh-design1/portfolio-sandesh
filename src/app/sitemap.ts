// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sandesh.space",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,  
    },
    {
      url: "https://www.sandesh.space/work",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    }
  ];
}
