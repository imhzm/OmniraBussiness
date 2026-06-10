import type { L } from "@/i18n/config";

export type PlatformCategoryId =
  | "setup"
  | "hr"
  | "compliance"
  | "residency"
  | "finance";

export type Platform = {
  id: string;
  abbr: string;
  category: PlatformCategoryId;
  name: L;
  authority: L;
  description: L;
  servicesCovered: L[];
  url: string;
  relatedService: string;
};

export const platformCategories: { id: PlatformCategoryId | "all"; label: L }[] = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "setup", label: { en: "Business Setup", ar: "تأسيس الأعمال" } },
  { id: "hr", label: { en: "HR & Labor", ar: "الموارد البشرية" } },
  { id: "compliance", label: { en: "Compliance", ar: "الامتثال" } },
  { id: "residency", label: { en: "Residency", ar: "الإقامة" } },
  { id: "finance", label: { en: "Finance & Tax", ar: "المالية والضرائب" } },
];

export const platforms: Platform[] = [
  {
    id: "misa",
    abbr: "MISA",
    category: "setup",
    name: { en: "MISA — Invest Saudi", ar: "وزارة الاستثمار — استثمر في السعودية" },
    authority: { en: "Ministry of Investment", ar: "وزارة الاستثمار" },
    description: {
      en: "Issues and manages foreign investment licenses, the entry point for any non-Saudi investor.",
      ar: "تُصدر وتدير تراخيص الاستثمار الأجنبي، وهي نقطة البداية لأي مستثمر غير سعودي.",
    },
    servicesCovered: [
      { en: "Investment license issuance & renewal", ar: "إصدار وتجديد رخصة الاستثمار" },
      { en: "Entrepreneur & regional HQ licenses", ar: "رخص ريادة الأعمال والمقرات الإقليمية" },
    ],
    url: "https://misa.gov.sa",
    relatedService: "business-setup",
  },
  {
    id: "sbc",
    abbr: "SBC",
    category: "setup",
    name: { en: "Saudi Business Center", ar: "المركز السعودي للأعمال" },
    authority: { en: "Ministry of Commerce", ar: "وزارة التجارة" },
    description: {
      en: "One-stop portal for commercial registration, trade names, and unified national numbers.",
      ar: "بوابة موحدة للسجل التجاري والأسماء التجارية والرقم الوطني الموحد.",
    },
    servicesCovered: [
      { en: "Commercial registration (CR)", ar: "السجل التجاري" },
      { en: "Trade name reservation", ar: "حجز الاسم التجاري" },
      { en: "Articles of association", ar: "عقود التأسيس" },
    ],
    url: "https://business.sa",
    relatedService: "business-setup",
  },
  {
    id: "qiwa",
    abbr: "Qiwa",
    category: "hr",
    name: { en: "Qiwa", ar: "قوى" },
    authority: { en: "Ministry of Human Resources", ar: "وزارة الموارد البشرية" },
    description: {
      en: "Labor platform for work visas, employment contracts, Saudization bands, and workforce services.",
      ar: "منصة العمل لإدارة التأشيرات وعقود العمل ونطاقات السعودة وخدمات القوى العاملة.",
    },
    servicesCovered: [
      { en: "Block visa requests", ar: "طلبات التأشيرات الجماعية" },
      { en: "Contract authentication", ar: "توثيق عقود العمل" },
      { en: "Nitaqat (Saudization) tracking", ar: "متابعة نطاقات السعودة" },
    ],
    url: "https://qiwa.sa",
    relatedService: "visa-issuance",
  },
  {
    id: "muqeem",
    abbr: "Muqeem",
    category: "residency",
    name: { en: "Muqeem", ar: "مقيم" },
    authority: { en: "Ministry of Interior — Elm", ar: "وزارة الداخلية — عِلم" },
    description: {
      en: "Resident management: iqama issuance and renewal, exit/re-entry visas, and passport data.",
      ar: "إدارة المقيمين: إصدار وتجديد الإقامة وتأشيرات الخروج والعودة وبيانات الجوازات.",
    },
    servicesCovered: [
      { en: "Iqama issuance & renewal", ar: "إصدار وتجديد الإقامة" },
      { en: "Exit / re-entry visas", ar: "تأشيرات الخروج والعودة" },
    ],
    url: "https://muqeem.sa",
    relatedService: "visa-issuance",
  },
  {
    id: "zatca",
    abbr: "ZATCA",
    category: "finance",
    name: { en: "ZATCA", ar: "هيئة الزكاة والضريبة والجمارك" },
    authority: { en: "Zakat, Tax and Customs Authority", ar: "هيئة الزكاة والضريبة والجمارك" },
    description: {
      en: "Registration and filing for ZAKAT, VAT, withholding tax, plus customs and e-invoicing (FATOORA).",
      ar: "التسجيل وتقديم إقرارات الزكاة وضريبة القيمة المضافة والاستقطاع، إضافة للجمارك والفوترة الإلكترونية.",
    },
    servicesCovered: [
      { en: "VAT & ZAKAT returns", ar: "إقرارات القيمة المضافة والزكاة" },
      { en: "E-invoicing (FATOORA) compliance", ar: "الامتثال للفوترة الإلكترونية (فاتورة)" },
    ],
    url: "https://zatca.gov.sa",
    relatedService: "zakat-tax",
  },
  {
    id: "gosi",
    abbr: "GOSI",
    category: "hr",
    name: { en: "GOSI", ar: "التأمينات الاجتماعية" },
    authority: { en: "General Organization for Social Insurance", ar: "المؤسسة العامة للتأمينات الاجتماعية" },
    description: {
      en: "Social insurance registration and monthly contributions for Saudi and expat employees.",
      ar: "تسجيل التأمينات الاجتماعية والاشتراكات الشهرية للموظفين السعوديين والوافدين.",
    },
    servicesCovered: [
      { en: "Employer & employee registration", ar: "تسجيل المنشآت والموظفين" },
      { en: "Monthly contribution management", ar: "إدارة الاشتراكات الشهرية" },
    ],
    url: "https://gosi.gov.sa",
    relatedService: "accounting-services",
  },
  {
    id: "mudad",
    abbr: "Mudad",
    category: "hr",
    name: { en: "Mudad", ar: "مُدد" },
    authority: { en: "Ministry of Human Resources", ar: "وزارة الموارد البشرية" },
    description: {
      en: "Payroll compliance platform implementing the Wage Protection System (WPS) for private companies.",
      ar: "منصة الامتثال للرواتب وتطبيق نظام حماية الأجور لمنشآت القطاع الخاص.",
    },
    servicesCovered: [
      { en: "Wage Protection System files", ar: "ملفات نظام حماية الأجور" },
      { en: "Payroll processing", ar: "معالجة مسيّرات الرواتب" },
    ],
    url: "https://mudad.com.sa",
    relatedService: "accounting-services",
  },
  {
    id: "balady",
    abbr: "Balady",
    category: "compliance",
    name: { en: "Balady", ar: "بلدي" },
    authority: { en: "Ministry of Municipalities & Housing", ar: "وزارة البلديات والإسكان" },
    description: {
      en: "Municipal licensing: store permits, signage, and health requirements for physical locations.",
      ar: "التراخيص البلدية: رخص المحلات واللوحات والاشتراطات الصحية للمواقع الفعلية.",
    },
    servicesCovered: [
      { en: "Municipal (shop) licenses", ar: "الرخص البلدية للمحلات" },
      { en: "Signage permits", ar: "تصاريح اللوحات" },
    ],
    url: "https://balady.gov.sa",
    relatedService: "business-setup",
  },
  {
    id: "absher",
    abbr: "Absher",
    category: "residency",
    name: { en: "Absher Business", ar: "أبشر أعمال" },
    authority: { en: "Ministry of Interior", ar: "وزارة الداخلية" },
    description: {
      en: "Government e-services for companies: employee services, authorizations, and sponsorship records.",
      ar: "الخدمات الإلكترونية الحكومية للشركات: خدمات الموظفين والتفاويض وسجلات الكفالة.",
    },
    servicesCovered: [
      { en: "Employee government services", ar: "الخدمات الحكومية للموظفين" },
      { en: "Authorization management", ar: "إدارة التفاويض" },
    ],
    url: "https://absher.sa",
    relatedService: "visa-issuance",
  },
  {
    id: "etimad",
    abbr: "Etimad",
    category: "finance",
    name: { en: "Etimad", ar: "اعتماد" },
    authority: { en: "Ministry of Finance", ar: "وزارة المالية" },
    description: {
      en: "Government procurement and tendering platform — where public-sector contracts are published and awarded.",
      ar: "منصة المشتريات والمنافسات الحكومية — حيث تُنشر عقود القطاع العام وتُرسى.",
    },
    servicesCovered: [
      { en: "Tender participation", ar: "المشاركة في المنافسات" },
      { en: "Government invoicing", ar: "الفوترة الحكومية" },
    ],
    url: "https://etimad.sa",
    relatedService: "saudi-partners",
  },
];

export function getPlatform(id: string): Platform | undefined {
  return platforms.find((p) => p.id === id);
}
