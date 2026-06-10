import type { L } from "@/i18n/config";

export type DocCategoryId = "guides" | "checklists" | "templates" | "reports";

export type LibraryDoc = {
  id: string;
  category: DocCategoryId;
  fileType: "PDF" | "XLSX" | "DOCX";
  size: string;
  language: L;
  title: L;
  description: L;
  href: string; // contact-gated download → contact page keeps it static
  updated: string; // ISO date
};

export const docCategories: { id: DocCategoryId | "all"; label: L }[] = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "guides", label: { en: "Guides", ar: "أدلة" } },
  { id: "checklists", label: { en: "Checklists", ar: "قوائم تحقق" } },
  { id: "templates", label: { en: "Templates", ar: "نماذج" } },
  { id: "reports", label: { en: "Reports", ar: "تقارير" } },
];

export const libraryDocs: LibraryDoc[] = [
  {
    id: "starting-business-guide",
    category: "guides",
    fileType: "PDF",
    size: "2.4 MB",
    language: { en: "Arabic & English", ar: "عربي وإنجليزي" },
    title: { en: "Starting a Business in Saudi Arabia — 2026 Guide", ar: "دليل تأسيس الأعمال في السعودية — 2026" },
    description: {
      en: "Legal forms, licensing pathways, costs, and timelines for new entities.",
      ar: "الأشكال القانونية ومسارات الترخيص والتكاليف والجداول الزمنية للكيانات الجديدة.",
    },
    href: "/contact?doc=starting-business-guide",
    updated: "2026-05-20",
  },
  {
    id: "ksa-tax-guide",
    category: "guides",
    fileType: "PDF",
    size: "1.8 MB",
    language: { en: "Arabic & English", ar: "عربي وإنجليزي" },
    title: { en: "KSA Taxation Guide for Investors", ar: "دليل الضرائب السعودي للمستثمرين" },
    description: {
      en: "ZAKAT, income tax, VAT, and withholding — what applies to your structure.",
      ar: "الزكاة وضريبة الدخل والقيمة المضافة والاستقطاع — وما ينطبق على هيكلك.",
    },
    href: "/contact?doc=ksa-tax-guide",
    updated: "2026-05-12",
  },
  {
    id: "visa-residency-handbook",
    category: "guides",
    fileType: "PDF",
    size: "1.5 MB",
    language: { en: "English", ar: "إنجليزي" },
    title: { en: "Visa & Residency Handbook", ar: "كتيب التأشيرات والإقامة" },
    description: {
      en: "Work visas, iqamas, Premium Residency tracks, and family visas explained.",
      ar: "شرح تأشيرات العمل والإقامات ومسارات الإقامة المميزة وتأشيرات العائلة.",
    },
    href: "/contact?doc=visa-residency-handbook",
    updated: "2026-04-28",
  },
  {
    id: "setup-checklist",
    category: "checklists",
    fileType: "PDF",
    size: "640 KB",
    language: { en: "Arabic & English", ar: "عربي وإنجليزي" },
    title: { en: "Company Setup Document Checklist", ar: "قائمة مستندات تأسيس الشركة" },
    description: {
      en: "Every document you need before incorporation, by entity type.",
      ar: "كل مستند تحتاجه قبل التأسيس، حسب نوع الكيان.",
    },
    href: "/contact?doc=setup-checklist",
    updated: "2026-05-02",
  },
  {
    id: "compliance-calendar",
    category: "templates",
    fileType: "XLSX",
    size: "210 KB",
    language: { en: "Arabic & English", ar: "عربي وإنجليزي" },
    title: { en: "Annual Compliance Calendar Template", ar: "نموذج تقويم الامتثال السنوي" },
    description: {
      en: "Filing deadlines for ZATCA, GOSI, Qiwa, and municipal renewals in one sheet.",
      ar: "مواعيد إقرارات الزكاة والتأمينات وقوى وتجديدات البلدية في ملف واحد.",
    },
    href: "/contact?doc=compliance-calendar",
    updated: "2026-03-15",
  },
  {
    id: "employment-contract-template",
    category: "templates",
    fileType: "DOCX",
    size: "180 KB",
    language: { en: "Arabic & English", ar: "عربي وإنجليزي" },
    title: { en: "Bilingual Employment Contract Template", ar: "نموذج عقد عمل ثنائي اللغة" },
    description: {
      en: "Qiwa-compliant employment contract aligned with Saudi Labor Law.",
      ar: "عقد عمل متوافق مع قوى ونظام العمل السعودي.",
    },
    href: "/contact?doc=employment-contract-template",
    updated: "2026-02-10",
  },
  {
    id: "market-report-2026",
    category: "reports",
    fileType: "PDF",
    size: "4.2 MB",
    language: { en: "English", ar: "إنجليزي" },
    title: { en: "Saudi Market Entry Report 2026", ar: "تقرير دخول السوق السعودي 2026" },
    description: {
      en: "FDI trends, sector opportunities, and regulatory outlook for the year ahead.",
      ar: "اتجاهات الاستثمار الأجنبي وفرص القطاعات والتوقعات التنظيمية للعام المقبل.",
    },
    href: "/contact?doc=market-report-2026",
    updated: "2026-01-30",
  },
];
