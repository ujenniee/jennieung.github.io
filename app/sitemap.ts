import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
