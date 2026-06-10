import type { L } from "@/i18n/config";

export type PricingGroupId = "setup" | "hr";

export type PricingPackage = {
  id: string;
  group: PricingGroupId;
  name: L;
  description: L;
  price: number | null; // null = custom quote
  period: "one-time" | "monthly" | "custom";
  recommended?: boolean;
  idealFor: L;
  features: L[];
};

export type CompareRow = {
  feature: L;
  values: (boolean | L)[]; // aligned with packages order in the group
};

export type PricingFaq = { q: L; a: L };

export const pricingPackages: PricingPackage[] = [
  // ───────── Setup Packages ─────────
  {
    id: "starter",
    group: "setup",
    name: { en: "Starter", ar: "الأساسية" },
    description: { en: "Ideal for small businesses and first entities.", ar: "مثالية للمنشآت الصغيرة والكيانات الأولى." },
    price: 2950,
    period: "one-time",
    idealFor: { en: "Solo founders & small LLCs", ar: "المؤسسون الأفراد والشركات الصغيرة" },
    features: [
      { en: "Company structure consultation", ar: "استشارة هيكلة الشركة" },
      { en: "Trade name reservation", ar: "حجز الاسم التجاري" },
      { en: "Commercial Registration (CR)", ar: "إصدار السجل التجاري" },
      { en: "Chamber of Commerce activation", ar: "تفعيل الغرفة التجارية" },
      { en: "National address registration", ar: "تسجيل العنوان الوطني" },
    ],
  },
  {
    id: "growth",
    group: "setup",
    name: { en: "Growth", ar: "النمو" },
    description: { en: "For growing companies that need the full government file.", ar: "للشركات النامية التي تحتاج الملف الحكومي كاملًا." },
    price: 5950,
    period: "one-time",
    recommended: true,
    idealFor: { en: "SMEs & regional expansions", ar: "المنشآت المتوسطة والتوسعات الإقليمية" },
    features: [
      { en: "Everything in Starter", ar: "كل ما في الباقة الأساسية" },
      { en: "MISA investment license (foreign owners)", ar: "رخصة الاستثمار الأجنبي (للملكية الأجنبية)" },
      { en: "ZATCA, GOSI, Qiwa & Muqeem registration", ar: "تسجيل الزكاة والتأمينات وقوى ومقيم" },
      { en: "Municipality license support", ar: "دعم إصدار الرخصة البلدية" },
      { en: "Bank account opening support", ar: "دعم فتح الحساب البنكي" },
      { en: "First-year compliance calendar", ar: "تقويم الامتثال للسنة الأولى" },
    ],
  },
  {
    id: "professional",
    group: "setup",
    name: { en: "Professional", ar: "الاحترافية" },
    description: { en: "For established businesses moving people and operations.", ar: "للشركات القائمة التي تنقل موظفين وعمليات." },
    price: 8950,
    period: "one-time",
    idealFor: { en: "Companies relocating teams", ar: "الشركات الناقلة لفرق عمل" },
    features: [
      { en: "Everything in Growth", ar: "كل ما في باقة النمو" },
      { en: "2 employee visas + iqamas processed", ar: "معالجة تأشيرتين وإقامتين للموظفين" },
      { en: "GM appointment & authorizations", ar: "تعيين المدير العام والتفاويض" },
      { en: "Virtual office address (12 months)", ar: "عنوان مكتب افتراضي (12 شهرًا)" },
      { en: "E-invoicing (FATOORA) setup", ar: "تهيئة الفوترة الإلكترونية" },
      { en: "Quarterly compliance reviews (year 1)", ar: "مراجعات امتثال ربع سنوية (السنة الأولى)" },
    ],
  },
  {
    id: "enterprise",
    group: "setup",
    name: { en: "Enterprise", ar: "المؤسسات" },
    description: { en: "Tailored structures for complex requirements.", ar: "هياكل مخصصة للمتطلبات المعقدة." },
    price: null,
    period: "custom",
    idealFor: { en: "Holding structures & regulated activities", ar: "الهياكل القابضة والأنشطة المنظمة" },
    features: [
      { en: "Multi-entity & holding structures", ar: "هياكل متعددة الكيانات وقابضة" },
      { en: "Regional HQ (RHQ) licensing", ar: "ترخيص المقر الإقليمي" },
      { en: "Special Economic Zone setup", ar: "التأسيس في المناطق الاقتصادية الخاصة" },
      { en: "Dedicated legal & tax advisory", ar: "استشارات قانونية وضريبية مخصصة" },
      { en: "Priority government liaison", ar: "تنسيق حكومي بأولوية قصوى" },
    ],
  },
  // ───────── HR & PRO Packages ─────────
  {
    id: "hr-essential",
    group: "hr",
    name: { en: "HR Essential", ar: "الموارد الأساسية" },
    description: { en: "Core PRO services for small teams.", ar: "خدمات العلاقات الحكومية الأساسية للفرق الصغيرة." },
    price: 1450,
    period: "monthly",
    idealFor: { en: "Teams up to 10 employees", ar: "فرق حتى 10 موظفين" },
    features: [
      { en: "Iqama renewals & exit/re-entry visas", ar: "تجديد الإقامات وتأشيرات الخروج والعودة" },
      { en: "GOSI & Qiwa monthly upkeep", ar: "متابعة شهرية للتأمينات وقوى" },
      { en: "Document expiry alerts", ar: "تنبيهات انتهاء المستندات" },
      { en: "Up to 6 transactions / month", ar: "حتى 6 معاملات شهريًا" },
    ],
  },
  {
    id: "hr-plus",
    group: "hr",
    name: { en: "HR Plus", ar: "الموارد المتقدمة" },
    description: { en: "PRO + payroll for growing teams.", ar: "علاقات حكومية ورواتب للفرق المتنامية." },
    price: 3450,
    period: "monthly",
    recommended: true,
    idealFor: { en: "Teams of 10–50 employees", ar: "فرق من 10 إلى 50 موظفًا" },
    features: [
      { en: "Everything in HR Essential", ar: "كل ما في الباقة الأساسية" },
      { en: "WPS payroll processing via Mudad", ar: "معالجة الرواتب عبر مُدد" },
      { en: "Block visa requests & follow-up", ar: "طلبات التأشيرات الجماعية ومتابعتها" },
      { en: "Saudization (Nitaqat) planning", ar: "تخطيط نطاقات السعودة" },
      { en: "Up to 20 transactions / month", ar: "حتى 20 معاملة شهريًا" },
    ],
  },
  {
    id: "hr-pro",
    group: "hr",
    name: { en: "HR Pro", ar: "الموارد الشاملة" },
    description: { en: "A full outsourced government-relations department.", ar: "إدارة علاقات حكومية خارجية متكاملة." },
    price: null,
    period: "custom",
    idealFor: { en: "50+ employees or multi-entity groups", ar: "أكثر من 50 موظفًا أو مجموعات متعددة الكيانات" },
    features: [
      { en: "Unlimited PRO transactions", ar: "معاملات غير محدودة" },
      { en: "Dedicated on-call PRO officer", ar: "موظف علاقات حكومية مخصص" },
      { en: "Payroll + GOSI + Mudad full cycle", ar: "دورة كاملة للرواتب والتأمينات ومُدد" },
      { en: "Quarterly workforce compliance reports", ar: "تقارير امتثال ربع سنوية للقوى العاملة" },
    ],
  },
];

/** Comparison table for setup packages (Starter / Growth / Professional / Enterprise). */
export const setupCompare: CompareRow[] = [
  {
    feature: { en: "Commercial Registration", ar: "السجل التجاري" },
    values: [true, true, true, true],
  },
  {
    feature: { en: "MISA investment license", ar: "رخصة الاستثمار الأجنبي" },
    values: [false, true, true, true],
  },
  {
    feature: { en: "Government registrations (ZATCA, GOSI, Qiwa)", ar: "التسجيلات الحكومية (زكاة، تأمينات، قوى)" },
    values: [false, true, true, true],
  },
  {
    feature: { en: "Bank account support", ar: "دعم الحساب البنكي" },
    values: [false, true, true, true],
  },
  {
    feature: { en: "Employee visas included", ar: "تأشيرات موظفين مشمولة" },
    values: [false, false, { en: "2 visas", ar: "تأشيرتان" }, { en: "Custom", ar: "حسب الاتفاق" }],
  },
  {
    feature: { en: "Virtual office (12 months)", ar: "مكتب افتراضي (12 شهرًا)" },
    values: [false, false, true, true],
  },
  {
    feature: { en: "RHQ / SEZ structuring", ar: "هيكلة المقر الإقليمي / المناطق الخاصة" },
    values: [false, false, false, true],
  },
  {
    feature: { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
    values: [false, true, true, true],
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    q: { en: "Are the prices fixed?", ar: "هل الأسعار ثابتة؟" },
    a: {
      en: "Yes — package fees are fixed for the scope described. If your case needs extra work, we quote it transparently before starting.",
      ar: "نعم — رسوم الباقات ثابتة للنطاق الموضح. وإذا احتاجت حالتك عملًا إضافيًا نقدم عرضًا واضحًا قبل البدء.",
    },
  },
  {
    q: { en: "Do packages include government fees?", ar: "هل تشمل الباقات الرسوم الحكومية؟" },
    a: {
      en: "Package fees cover our professional services. Government fees (licenses, visas, attestations) are billed at actual cost with receipts.",
      ar: "رسوم الباقات تغطي خدماتنا المهنية. أما الرسوم الحكومية (التراخيص والتأشيرات والتصديقات) فتُحتسب بالتكلفة الفعلية مع الإيصالات.",
    },
  },
  {
    q: { en: "Can I customize a package?", ar: "هل يمكنني تخصيص باقة؟" },
    a: {
      en: "Absolutely. Most clients start from Growth and add or remove items. Enterprise scopes are always built to order.",
      ar: "بالتأكيد. معظم العملاء يبدؤون من باقة النمو ثم يضيفون أو يحذفون بنودًا. وباقات المؤسسات تُبنى دائمًا حسب الطلب.",
    },
  },
  {
    q: { en: "How do payments work?", ar: "كيف يتم الدفع؟" },
    a: {
      en: "50% on engagement and 50% on CR issuance for setup packages. Monthly packages are billed at the start of each month. We accept bank transfer and major cards.",
      ar: "50% عند بدء التعاقد و50% عند إصدار السجل التجاري لباقات التأسيس. والباقات الشهرية تُفوتر بداية كل شهر. نقبل التحويل البنكي والبطاقات الرئيسية.",
    },
  },
  {
    q: { en: "Is there ongoing support after setup?", ar: "هل يوجد دعم مستمر بعد التأسيس؟" },
    a: {
      en: "Yes — every setup package ends with a handover and a compliance calendar, and you can continue with an HR/PRO package or our accounting services.",
      ar: "نعم — كل باقة تأسيس تنتهي بتسليم منظم وتقويم امتثال، ويمكنك الاستمرار بباقة موارد بشرية أو بخدمات المحاسبة لدينا.",
    },
  },
];
