import { MetadataRoute } from "next";

const locales = ["de", "en", "fr", "it"];
const baseUrl = "https://alpenmove.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/calculator", "/about", "/contact", "/faq"];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page}`;
      const lastModified = new Date();

      sitemap.push({
        url,
        lastModified,
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
