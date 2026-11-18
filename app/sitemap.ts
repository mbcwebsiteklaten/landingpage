import type { MetadataRoute } from "next";
import { programs } from "../lib/mbc";
import { siteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl();
  if (!origin) return [];
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/program`, changeFrequency: "monthly", priority: 0.9 },
    ...programs.map((program) => ({ url: `${origin}/program/${program.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${origin}/tentang`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/galeri`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${origin}/kontak`, changeFrequency: "monthly", priority: 0.7 },
  ];
}