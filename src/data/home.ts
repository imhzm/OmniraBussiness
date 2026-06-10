import type { L } from "@/i18n/config";

/** Market overview stat cards (static, roadmap §14.3). */
export type Stat = {
  id: string;
  icon: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: L;
  note: L;
  trend: L;
};

export const marketStats: Stat[] = [
  {
    id: "gdp",
    icon: "bar-chart-3",
    value: 1.07,
    prefix: "$",
    suffix: "T",
    decimals: 2,
    label: { en: "GDP (Nominal)", ar: "الناتج المحلي (الاسمي)" },
    note: { en: "2025 est.", ar: "تقديرات 2025" },
    trend: { en: "▲ 4.6% non-oil growth", ar: "▲ نمو غير نفطي 4.6%" },
  },
  {
    id: "fdi",
    icon: "trending-up",
    value: 26,
    prefix: "$",
    suffix: "B+",
    label: { en: "FDI Inflows", ar: "تدفقات الاستثمار الأجنبي" },
    note: { en: "Annual run-rate", ar: "معدل سنوي" },
    trend: { en: "▲ RHQ program momentum", ar: "▲ زخم برنامج المقرات الإقليمية" },
  },
  {
    id: "population",
    icon: "users",
    value: 35.3,
    suffix: "M",
    decimals: 1,
    label: { en: "Population", ar: "عدد السكان" },
    note: { en: "2025 est.", ar: "تقديرات 2025" },
    trend: { en: "▲ 63% under 35", ar: "▲ 63% تحت سن 35" },
  },
  {
    id: "ease",
    icon: "globe",
    value: 600,
    suffix: "+",
    label: { en: "Regional HQs in Riyadh", ar: "مقر إقليمي في الرياض" },
    note: { en: "Licensed to date", ar: "مرخصة حتى اليوم" },
    trend: { en: "▲ Improving steadily", ar: "▲ في تحسن مستمر" },
  },
];

/** Hero floating stats (roadmap §14.1 / reference design). */
export const heroStats = [
  { id: "businesses", icon: "building-2", value: 1200, suffix: "+" },
  { id: "satisfaction", icon: "star", value: 98, suffix: "%" },
  { id: "support", icon: "headset", value: 24, suffix: "/7" },
] as const;

/** Business setup process steps (roadmap §14.5). */
export type ProcessStep = { icon: string; title: L; text: L };

export const processSteps: ProcessStep[] = [
  {
    icon: "messages-square",
    title: { en: "Consultation", ar: "الاستشارة" },
    text: { en: "Define your activity, structure, and licensing path.", ar: "تحديد النشاط والهيكل ومسار الترخيص." },
  },
  {
    icon: "scroll-text",
    title: { en: "Name & License", ar: "الاسم والترخيص" },
    text: { en: "Trade name reservation and MISA license where needed.", ar: "حجز الاسم التجاري ورخصة الاستثمار عند الحاجة." },
  },
  {
    icon: "file-text",
    title: { en: "Documents & Approvals", ar: "المستندات والموافقات" },
    text: { en: "Articles notarized and initial approvals secured.", ar: "توثيق عقد التأسيس واستكمال الموافقات الأولية." },
  },
  {
    icon: "badge-check",
    title: { en: "Commercial Registration", ar: "السجل التجاري" },
    text: { en: "CR issuance with the national unified number.", ar: "إصدار السجل بالرقم الوطني الموحد." },
  },
  {
    icon: "landmark",
    title: { en: "Bank & Compliance", ar: "البنك والامتثال" },
    text: { en: "Corporate account, ZATCA, GOSI, and Qiwa activation.", ar: "الحساب البنكي وتفعيل الزكاة والتأمينات وقوى." },
  },
  {
    icon: "rocket",
    title: { en: "Launch & Operations", ar: "الانطلاق والتشغيل" },
    text: { en: "Handover with a compliance calendar — and ongoing support.", ar: "تسليم منظم مع تقويم الامتثال — ودعم مستمر." },
  },
];

/** Trust bar points under the hero (roadmap §14.2). */
export const trustPoints: { icon: string; label: L }[] = [
  { icon: "award", label: { en: "Saudi Market Expertise", ar: "خبرة عميقة بالسوق السعودي" } },
  { icon: "shield-check", label: { en: "Government-Ready Process", ar: "إجراءات حكومية جاهزة" } },
  { icon: "languages", label: { en: "Bilingual Team", ar: "فريق ثنائي اللغة" } },
  { icon: "target", label: { en: "Clear, Fixed Scope", ar: "نطاق عمل واضح وثابت" } },
  { icon: "headset", label: { en: "End-to-End Guidance", ar: "مرافقة من البداية للنهاية" } },
];

/** "Trusted by" marks — generic Saudi ecosystem names rendered as text marks. */
export const trustedMarks: L[] = [
  { en: "Riyadh Holding", ar: "الرياض القابضة" },
  { en: "Najd Ventures", ar: "نجد فنتشرز" },
  { en: "Red Sea Trading", ar: "البحر الأحمر التجارية" },
  { en: "Gulf Bridge Co.", ar: "جسر الخليج" },
  { en: "Tuwaiq Industrial", ar: "طويق الصناعية" },
  { en: "Salam Logistics", ar: "سلام اللوجستية" },
];
