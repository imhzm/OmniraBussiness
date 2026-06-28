import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";
import { kingdomTopics } from "@/data/kingdom-pages";
import { articles } from "@/data/articles";
import { events } from "@/data/events";
import { licenseTypes } from "@/data/license-types";

/**
 * Sitemap covering every real route for both locales (ar/en).
 * Dynamic routes are derived from the data modules so this stays in sync
 * automatically when content is added. Base URL comes from `site.url`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  // Static + index routes (without locale prefix).
  const paths = [
    "",
    "/about",
    "/about-kingdom",
    "/about-kingdom/sectors",
    "/services",
    "/pricing",
    "/resources",
    "/resources/articles",
    "/resources/events",
    "/resources/library",
    "/resources/market-insights",
    "/resources/news",
    "/resources/platforms",
    "/business-setup-cost-calculator",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Dynamic routes derived from data.
  for (const sector of sectors) paths.push(`/about-kingdom/sectors/${sector.slug}`);
  for (const topic of kingdomTopics) paths.push(`/about-kingdom/${topic.slug}`);
  for (const service of services) paths.push(`/services/${service.slug}`);
  for (const article of articles) paths.push(`/resources/articles/${article.slug}`);
  for (const event of events) paths.push(`/resources/events/${event.id}`);
  for (const lt of licenseTypes) paths.push(`/licenses/${lt.id}`);

  const lastModified = new Date();

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}${path}`])
        ),
      },
    }))
  );
}
