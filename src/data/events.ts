import type { L } from "@/i18n/config";

export type BizEvent = {
  id: string;
  title: L;
  city: L;
  sector: L;
  organizer: L;
  date: string; // ISO date
  endDate?: string;
  image: string;
  description: L;
  url?: string;
};

export const events: BizEvent[] = [
  {
    id: "biban-2026",
    title: { en: "Biban Forum 2026", ar: "ملتقى بيبان 2026" },
    city: { en: "Riyadh", ar: "الرياض" },
    sector: { en: "Entrepreneurship", ar: "ريادة الأعمال" },
    organizer: { en: "Monsha'at", ar: "منشآت" },
    date: "2026-11-04",
    endDate: "2026-11-08",
    image: "/images/events/event-1.webp",
    description: {
      en: "The Kingdom's flagship SME and startup forum — funding, franchising, and government enablement under one roof.",
      ar: "الملتقى الأبرز للمنشآت الصغيرة والشركات الناشئة في المملكة — تمويل وامتياز تجاري وتمكين حكومي تحت سقف واحد.",
    },
    url: "https://bibanglobal.sa",
  },
  {
    id: "fii-2026",
    title: { en: "Future Investment Initiative (FII)", ar: "مبادرة مستقبل الاستثمار" },
    city: { en: "Riyadh", ar: "الرياض" },
    sector: { en: "Investment", ar: "الاستثمار" },
    organizer: { en: "FII Institute", ar: "معهد مبادرة مستقبل الاستثمار" },
    date: "2026-10-27",
    endDate: "2026-10-29",
    image: "/images/events/event-2.webp",
    description: {
      en: "Global leaders and sovereign funds gather in Riyadh to set the agenda for international investment.",
      ar: "قادة العالم والصناديق السيادية يجتمعون في الرياض لرسم أجندة الاستثمار الدولي.",
    },
    url: "https://fii-institute.org",
  },
  {
    id: "leap-2027",
    title: { en: "LEAP Tech Conference", ar: "مؤتمر ليب التقني" },
    city: { en: "Riyadh", ar: "الرياض" },
    sector: { en: "Technology", ar: "التقنية" },
    organizer: { en: "Ministry of Communications", ar: "وزارة الاتصالات وتقنية المعلومات" },
    date: "2027-02-08",
    endDate: "2027-02-11",
    image: "/images/events/event-3.webp",
    description: {
      en: "One of the world's largest tech events — AI, cloud, and startups across 200,000+ attendees.",
      ar: "من أكبر فعاليات التقنية في العالم — ذكاء اصطناعي وحوسبة سحابية وشركات ناشئة بأكثر من 200 ألف زائر.",
    },
    url: "https://onegiantleap.com",
  },
  {
    id: "cityscape-2026",
    title: { en: "Cityscape Global", ar: "سيتي سكيب العالمي" },
    city: { en: "Riyadh", ar: "الرياض" },
    sector: { en: "Real Estate", ar: "العقارات" },
    organizer: { en: "Cityscape", ar: "سيتي سكيب" },
    date: "2026-11-23",
    endDate: "2026-11-26",
    image: "/images/events/event-1.webp",
    description: {
      en: "The region's largest real-estate exhibition, showcasing giga-projects and investment opportunities.",
      ar: "أكبر معرض عقاري في المنطقة، يستعرض المشاريع العملاقة وفرص الاستثمار.",
    },
    url: "https://cityscapeglobal.com",
  },
];

export function upcomingEvents(reference = new Date()): BizEvent[] {
  return [...events]
    .filter((e) => new Date(e.endDate ?? e.date) >= reference)
    .sort((a, b) => a.date.localeCompare(b.date));
}
