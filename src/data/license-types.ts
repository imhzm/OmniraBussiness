import type { L } from "@/i18n/config";

export type LicenseType = { id: string; icon: string; name: L; desc: L };

/** MISA / authority license types issued for the license-issuance service page. */
export const licenseTypes: LicenseType[] = [
  {
    id: "commercial",
    icon: "receipt-text",
    name: { en: "Commercial License", ar: "ترخيص تجاري" },
    desc: {
      en: "For foreign investors engaging in wholesale and retail trade, subject to ownership and capital conditions.",
      ar: "للمستثمرين الأجانب المزاولين لتجارة الجملة والتجزئة وفق شروط التملك ورأس المال.",
    },
  },
  {
    id: "service",
    icon: "scroll-text",
    name: { en: "Service License", ar: "ترخيص خدمي" },
    desc: {
      en: "For investors providing services such as consulting, maintenance, and other professional offerings.",
      ar: "للمستثمرين المقدمين للخدمات كالاستشارات والصيانة وغيرها من الأنشطة المهنية.",
    },
  },
  {
    id: "industrial",
    icon: "building-2",
    name: { en: "Industrial License", ar: "ترخيص صناعي" },
    desc: {
      en: "For investors establishing manufacturing and industrial production activities in the Kingdom.",
      ar: "للمستثمرين الراغبين في إقامة أنشطة التصنيع والإنتاج الصناعي في المملكة.",
    },
  },
  {
    id: "professional",
    icon: "badge-check",
    name: { en: "Professional License", ar: "ترخيص مهني" },
    desc: {
      en: "For professional firms in fields such as engineering, law, and accounting, often as a partnership.",
      ar: "للمنشآت المهنية في مجالات كالهندسة والمحاماة والمحاسبة، وغالبًا في صورة شراكة.",
    },
  },
  {
    id: "trading-distribution",
    icon: "line-chart",
    name: { en: "Trading and Distribution License", ar: "ترخيص التجارة والتوزيع" },
    desc: {
      en: "For foreign investors in trading and distribution, subject to MISA capital and ownership requirements.",
      ar: "للمستثمرين الأجانب في التجارة والتوزيع وفق متطلبات وزارة الاستثمار لرأس المال والتملك.",
    },
  },
  {
    id: "real-estate",
    icon: "map-pin",
    name: { en: "Real Estate License", ar: "ترخيص عقاري" },
    desc: {
      en: "For investors in real estate development projects, subject to capital and location conditions.",
      ar: "للمستثمرين في مشاريع التطوير العقاري وفق شروط رأس المال والموقع.",
    },
  },
  {
    id: "contracting",
    icon: "building-2",
    name: { en: "Contracting License", ar: "ترخيص مقاولات" },
    desc: {
      en: "For investors undertaking construction and building contracting works in the Kingdom.",
      ar: "للمستثمرين المنفذين لأعمال البناء والتشييد والمقاولات في المملكة.",
    },
  },
  {
    id: "transport",
    icon: "globe-2",
    name: { en: "Transport License", ar: "ترخيص نقل" },
    desc: {
      en: "For investors providing passenger or freight transport and related logistics services.",
      ar: "للمستثمرين المقدمين لخدمات نقل الركاب أو البضائع والخدمات اللوجستية ذات الصلة.",
    },
  },
  {
    id: "entrepreneur",
    icon: "trending-up",
    name: { en: "Entrepreneur License", ar: "ترخيص ريادة الأعمال" },
    desc: {
      en: "For startup founders sponsored by an accredited business incubator or accelerator in the Kingdom.",
      ar: "لمؤسسي الشركات الناشئة المدعومين من حاضنة أو مسرّعة أعمال معتمدة في المملكة.",
    },
  },
  {
    id: "rhq",
    icon: "shield-check",
    name: { en: "Regional Headquarters License", ar: "ترخيص المقر الإقليمي" },
    desc: {
      en: "For multinational companies establishing their regional headquarters to oversee operations across the region.",
      ar: "للشركات متعددة الجنسيات لتأسيس مقرها الإقليمي للإشراف على عملياتها في المنطقة.",
    },
  },
  {
    id: "tourism",
    icon: "map-pin",
    name: { en: "Tourism License", ar: "ترخيص سياحي" },
    desc: {
      en: "For investors in tourism activities such as hospitality, travel, and tourist accommodation.",
      ar: "للمستثمرين في الأنشطة السياحية كالضيافة والسفر والإيواء السياحي.",
    },
  },
  {
    id: "agricultural",
    icon: "globe-2",
    name: { en: "Agricultural License", ar: "ترخيص زراعي" },
    desc: {
      en: "For investors in agriculture, livestock, fisheries, and related production activities.",
      ar: "للمستثمرين في الزراعة والثروة الحيوانية والسمكية والأنشطة الإنتاجية ذات الصلة.",
    },
  },
  {
    id: "mining",
    icon: "bar-chart-3",
    name: { en: "Mining License", ar: "ترخيص تعديني" },
    desc: {
      en: "For investors engaged in mineral exploration, extraction, and exploitation activities.",
      ar: "للمستثمرين المزاولين لأنشطة استكشاف المعادن واستخراجها واستغلالها.",
    },
  },
  {
    id: "audiovisual-media",
    icon: "messages-square",
    name: { en: "Audiovisual Media License", ar: "ترخيص الإعلام المرئي والمسموع" },
    desc: {
      en: "For investors in audiovisual media, broadcasting, and content production activities.",
      ar: "للمستثمرين في أنشطة الإعلام المرئي والمسموع والبث وإنتاج المحتوى.",
    },
  },
  {
    id: "scientific-technical-office",
    icon: "book-open",
    name: { en: "Scientific and Technical Office License", ar: "ترخيص مكتب علمي وفني" },
    desc: {
      en: "For foreign companies opening a scientific or technical office to support their products and clients.",
      ar: "للشركات الأجنبية لفتح مكتب علمي أو فني لدعم منتجاتها وعملائها.",
    },
  },
  {
    id: "temporary-certificate",
    icon: "calendar-days",
    name: { en: "Temporary Contract Certificate", ar: "شهادة تعاقد مؤقت" },
    desc: {
      en: "For foreign firms executing a specific government or semi-government contract for a limited period.",
      ar: "للشركات الأجنبية المنفذة لعقد حكومي أو شبه حكومي محدد ولمدة محدودة.",
    },
  },
];
