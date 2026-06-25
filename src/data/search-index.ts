import type { L } from "@/i18n/config";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";
import { platforms } from "@/data/platforms";
import { articles } from "@/data/articles";
import { events } from "@/data/events";
import { kingdomTopics } from "@/data/kingdom-pages";

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
    description: { en: "Setup and government-platform management packages with transparent Saudi pricing.", ar: "باقات التأسيس وإدارة المنصات الحكومية بأسعار سعودية واضحة." },
    href: "/pricing",
    keywords: "pricing packages setup platform management government fees أسعار باقات تأسيس إدارة منصات رسوم حكومية",
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
    title: { en: "About Omnera One", ar: "عن Omnera One" },
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
  {
    type: "page",
    title: { en: "Sectors", ar: "القطاعات" },
    description: { en: "High-growth Saudi sectors under Vision 2030.", ar: "قطاعات سعودية عالية النمو ضمن رؤية 2030." },
    href: "/about-kingdom/sectors",
    keywords: "sectors industries قطاعات صناعات فرص",
  },
  {
    type: "page",
    title: { en: "News", ar: "الأخبار" },
    description: { en: "Regulatory and market updates.", ar: "مستجدات تنظيمية وسوقية." },
    href: "/resources/news",
    keywords: "news updates أخبار مستجدات",
  },
  {
    type: "page",
    title: { en: "Market Insights", ar: "رؤى السوق" },
    description: { en: "Data-driven Saudi market views.", ar: "قراءات مبنية على البيانات للسوق السعودي." },
    href: "/resources/market-insights",
    keywords: "insights market رؤى السوق",
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
  ...kingdomTopics.map<SearchEntry>((topic) => ({
    type: "page",
    title: topic.title,
    description: topic.excerpt,
    href: `/about-kingdom/${topic.slug}`,
    keywords: `${topic.slug.replace(/-/g, " ")} ${topic.title.en} ${topic.title.ar}`,
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
    href: `/resources/events/${e.id}`,
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
