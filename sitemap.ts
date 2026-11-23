import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://pdfpoint.example";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.3,
  }));
  const toolRoutes = tools.map((tool) => ({
    url: `${base}/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticRoutes, ...toolRoutes];
}
