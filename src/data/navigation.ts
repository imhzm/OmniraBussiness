import type { L } from "@/i18n/config";
import { serviceCategories, services } from "@/data/services";
import { sectors } from "@/data/sectors";

export type NavLeaf = { label: L; href: string; desc?: L; icon?: string };
export type NavColumn = { title: L; items: NavLeaf[] };

export type NavItem = {
  id: string;
  label: L;
  href: string;
  columns?: NavColumn[];
  /** show the gold promo card inside the mega menu */
  promo?: boolean;
};

const servicesColumns: NavColumn[] = serviceCategories.map((cat) => ({
  title: cat.label,
  items: services
    .filter((s) => s.category === cat.id)
    .map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      desc: s.excerpt,
      icon: s.icon,
    })),
}));

export const mainNav: NavItem[] = [
  { id: "home", label: { en: "Home", ar: "الرئيسية" }, href: "/" },
  { id: "about", label: { en: "About Us", ar: "من نحن" }, href: "/about" },
  {
    id: "kingdom",
    label: { en: "About Kingdom", ar: "عن المملكة" },
    href: "/about-kingdom",
    columns: [
      {
        title: { en: "Discover", ar: "اكتشف" },
        items: [
          {
            label: { en: "Why Saudi Arabia", ar: "لماذا السعودية" },
            href: "/about-kingdom/why-invest",
            icon: "lightbulb",
          },
          {
            label: { en: "Vision 2030", ar: "رؤية 2030" },
            href: "/about-kingdom#vision",
            icon: "target",
          },
          {
            label: { en: "Life in Saudi Arabia", ar: "الحياة في السعودية" },
            href: "/about-kingdom/life",
            icon: "heart-pulse",
          },
          {
            label: { en: "Investment Opportunities", ar: "الفرص الاستثمارية" },
            href: "/about-kingdom/investment-opportunities",
            icon: "trending-up",
          },
        ],
      },
      {
        title: { en: "Sectors", ar: "القطاعات" },
        items: sectors.slice(0, 4).map((s) => ({
          label: s.name,
          href: `/about-kingdom/sectors/${s.slug}`,
          icon: s.icon,
        })),
      },
      {
        title: { en: "More Sectors", ar: "قطاعات أخرى" },
        items: sectors.slice(4).map((s) => ({
          label: s.name,
          href: `/about-kingdom/sectors/${s.slug}`,
          icon: s.icon,
        })),
      },
    ],
  },
  {
    id: "services",
    label: { en: "Services", ar: "الخدمات" },
    href: "/services",
    columns: servicesColumns,
    promo: true,
  },
  {
    id: "resources",
    label: { en: "Resources", ar: "الموارد" },
    href: "/resources",
    columns: [
      {
        title: { en: "Knowledge", ar: "المعرفة" },
        items: [
          {
            label: { en: "Library", ar: "المكتبة" },
            href: "/resources/library",
            desc: { en: "Guides, checklists & templates", ar: "أدلة وقوائم تحقق ونماذج" },
            icon: "book-open",
          },
          {
            label: { en: "Articles", ar: "المقالات" },
            href: "/resources/articles",
            desc: { en: "Practical guides & explainers", ar: "أدلة عملية وشروحات" },
            icon: "newspaper",
          },
          {
            label: { en: "Market Insights", ar: "رؤى السوق" },
            href: "/resources/market-insights",
            desc: { en: "Data-driven market views", ar: "قراءات مبنية على البيانات" },
            icon: "line-chart",
          },
        ],
      },
      {
        title: { en: "Ecosystem", ar: "المنظومة" },
        items: [
          {
            label: { en: "Government Platforms", ar: "المنصات الحكومية" },
            href: "/resources/platforms",
            desc: { en: "Qiwa, ZATCA, Muqeem & more", ar: "قوى وزاتكا ومقيم وغيرها" },
            icon: "landmark",
          },
          {
            label: { en: "Events", ar: "الفعاليات" },
            href: "/resources/events",
            desc: { en: "Forums & exhibitions", ar: "منتديات ومعارض" },
            icon: "calendar-days",
          },
          {
            label: { en: "News", ar: "الأخبار" },
            href: "/resources/news",
            desc: { en: "Regulatory updates", ar: "مستجدات تنظيمية" },
            icon: "megaphone",
          },
        ],
      },
    ],
  },
  {
    id: "pricing",
    label: { en: "Pricing", ar: "الباقات" },
    href: "/pricing",
    columns: [
      {
        title: { en: "Packages", ar: "الباقات" },
        items: [
          {
            label: { en: "Setup Packages", ar: "باقات التأسيس" },
            href: "/pricing#setup",
            desc: { en: "Fixed-fee company formation", ar: "تأسيس شركات برسوم ثابتة" },
            icon: "building-2",
          },
          {
            label: { en: "Platform Management", ar: "إدارة المنصات" },
            href: "/pricing#management",
            desc: { en: "Annual government-platform support", ar: "دعم سنوي للمنصات الحكومية" },
            icon: "landmark",
          },
          {
            label: { en: "Cost Calculator", ar: "حاسبة التكلفة" },
            href: "/business-setup-cost-calculator",
            desc: { en: "Estimate your setup cost in 6 steps", ar: "احسب تكلفة تأسيسك في 6 خطوات" },
            icon: "calculator",
          },
        ],
      },
    ],
  },
  { id: "contact", label: { en: "Contact Us", ar: "تواصل معنا" }, href: "/contact" },
];

/** Footer link groups (roadmap §31). */
export const footerGroups: { title: L; items: NavLeaf[] }[] = [
  {
    title: { en: "Company", ar: "الشركة" },
    items: [
      { label: { en: "About Us", ar: "من نحن" }, href: "/about" },
      { label: { en: "Pricing", ar: "الباقات" }, href: "/pricing" },
      { label: { en: "Contact Us", ar: "تواصل معنا" }, href: "/contact" },
    ],
  },
  {
    title: { en: "Services", ar: "الخدمات" },
    items: [
      { label: { en: "Business Setup", ar: "تأسيس الأعمال" }, href: "/services/business-setup" },
      { label: { en: "Premium Residency", ar: "الإقامة المميزة" }, href: "/services/premium-residency" },
      { label: { en: "Visa & Iqama", ar: "التأشيرات والإقامة" }, href: "/services/visa-issuance" },
      { label: { en: "ZAKAT & Tax", ar: "الزكاة والضرائب" }, href: "/services/zakat-tax" },
      { label: { en: "All Services", ar: "جميع الخدمات" }, href: "/services" },
    ],
  },
  {
    title: { en: "About Kingdom", ar: "عن المملكة" },
    items: [
      { label: { en: "Why Saudi Arabia", ar: "لماذا السعودية" }, href: "/about-kingdom" },
      { label: { en: "Sectors", ar: "القطاعات" }, href: "/about-kingdom/sectors" },
      { label: { en: "Technology Sector", ar: "قطاع التقنية" }, href: "/about-kingdom/sectors/technology" },
      { label: { en: "Tourism Sector", ar: "قطاع السياحة" }, href: "/about-kingdom/sectors/tourism" },
      { label: { en: "Energy Sector", ar: "قطاع الطاقة" }, href: "/about-kingdom/sectors/energy" },
    ],
  },
  {
    title: { en: "Resources", ar: "الموارد" },
    items: [
      { label: { en: "Library", ar: "المكتبة" }, href: "/resources/library" },
      { label: { en: "Articles", ar: "المقالات" }, href: "/resources/articles" },
      { label: { en: "Events", ar: "الفعاليات" }, href: "/resources/events" },
      { label: { en: "Government Platforms", ar: "المنصات الحكومية" }, href: "/resources/platforms" },
    ],
  },
];
