import type { L } from "@/i18n/config";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";
import { platforms } from "@/data/platforms";
import { articles } from "@/data/articles";
import { events } from "@/data/events";

export type SearchEntryType =
  | "service"
  | "sector"
  | "platform"
  | "article"
  | "page"
  | "event";

export type SearchEntry = {
  type: SearchEntryType;
  title: L;
  description: L;
  href: string;
  keywords: string;
};

const staticPages: SearchEntry[] = [
  {
    type: "page",
    title: { en: "Pricing & Packages", ar: "الباقات والأسعار" },
    description: { en: "Setup and HR packages with transparent pricing.", ar: "باقات التأسيس والموارد البشرية بأسعار شفافة." },
    href: "/pricing",
    keywords: "pricing packages cost fees أسعار باقات رسوم تكلفة",
  },
  {
    type: "page",
    title: { en: "Contact Us", ar: "تواصل معنا" },
    description: { en: "Book a consultation or message our team.", ar: "احجز استشارة أو راسل فريقنا." },
    href: "/contact",
    keywords: "contact consultation whatsapp تواصل استشارة واتساب",
  },
  {
    type: "page",
    title: { en: "About Omnira", ar: "عن أومنيرا" },
    description: { en: "Who we are and how we work.", ar: "من نحن وكيف نعمل." },
    href: "/about",
    keywords: "about company team عن الشركة الفريق",
  },
  {
    type: "page",
    title: { en: "About the Kingdom", ar: "عن المملكة" },
    description: { en: "Saudi Arabia's business landscape and Vision 2030.", ar: "بيئة الأعمال السعودية ورؤية 2030." },
    href: "/about-kingdom",
    keywords: "saudi arabia vision 2030 kingdom السعودية المملكة رؤية",
  },
  {
    type: "page",
    title: { en: "Library", ar: "المكتبة" },
    description: { en: "Downloadable guides, checklists, and templates.", ar: "أدلة وقوائم تحقق ونماذج للتحميل." },
    href: "/resources/library",
    keywords: "library downloads guides مكتبة تحميل أدلة",
  },
];

export const searchIndex: SearchEntry[] = [
  ...services.map<SearchEntry>((s) => ({
    type: "service",
    title: s.title,
    description: s.excerpt,
    href: `/services/${s.slug}`,
    keywords: `${s.slug.replace(/-/g, " ")} ${s.title.en} ${s.title.ar}`,
  })),
  ...sectors.map<SearchEntry>((s) => ({
    type: "sector",
    title: s.name,
    description: s.short,
    href: `/about-kingdom/sectors/${s.slug}`,
    keywords: `${s.slug.replace(/-/g, " ")} ${s.name.en} ${s.name.ar}`,
  })),
  ...platforms.map<SearchEntry>((p) => ({
    type: "platform",
    title: p.name,
    description: p.description,
    href: "/resources/platforms",
    keywords: `${p.abbr} ${p.name.en} ${p.name.ar}`,
  })),
  ...articles.map<SearchEntry>((a) => ({
    type: "article",
    title: a.title,
    description: a.excerpt,
    href: `/resources/articles/${a.slug}`,
    keywords: `${a.slug.replace(/-/g, " ")} ${a.title.en} ${a.title.ar}`,
  })),
  ...events.map<SearchEntry>((e) => ({
    type: "event",
    title: e.title,
    description: e.description,
    href: "/resources/events",
    keywords: `${e.title.en} ${e.title.ar} ${e.city.en} ${e.city.ar}`,
  })),
  ...staticPages,
];

export const popularSearches: L[] = [
  { en: "Business Setup", ar: "تأسيس شركة" },
  { en: "Premium Residency", ar: "الإقامة المميزة" },
  { en: "ZAKAT", ar: "الزكاة" },
  { en: "Visa", ar: "تأشيرة" },
];
