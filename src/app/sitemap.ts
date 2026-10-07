import type { MetadataRoute } from "next";
import { getAllCasoSlugs } from "@/content/casos";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/casos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const casos: MetadataRoute.Sitemap = getAllCasoSlugs().map((slug) => ({
    url: `${SITE_URL}/casos/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...casos];
}
