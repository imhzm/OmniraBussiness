import type { L } from "@/i18n/config";

export type PricingGroupId = "setup" | "management";

export type PricingPackage = {
  id: string;
  group: PricingGroupId;
  name: L;
  description: L;
  price: number | null;
  period: "one-time" | "monthly" | "yearly" | "custom";
  recommended?: boolean;
  idealFor: L;
  priceNote?: L;
  highlight?: L;
  features: L[];
};

export type CompareRow = {
  feature: L;
  values: (boolean | L)[];
};

export type PricingFaq = { q: L; a: L };

export const governmentFees: { label: L; amount: L; note?: L }[] = [
  {
    label: { en: "Commercial Registration", ar: "السجل التجاري" },
    amount: { en: "SAR 1,775 / year", ar: "1,775 ر.س / سنة" },
    note: {
      en: "Includes national address, Chamber of Commerce, GOSI account, and ZATCA account opening.",
      ar: "تشمل العنوان الوطني، الغرفة التجارية، فتح حساب التأمينات الاجتماعية، وفتح حساب زاتكا.",
    },
  },
  {
    label: { en: "Muqeem platform", ar: "منصة مقيم" },
    amount: { en: "SAR 1,265 / year", ar: "1,265 ر.س / سنة" },
  },
  {
    label: { en: "Qiwa platform", ar: "منصة قوى" },
    amount: { en: "SAR 1,075 / year", ar: "1,075 ر.س / سنة" },
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "launch",
    group: "setup",
    name: { en: "Launch", ar: "الانطلاق" },
    description: {
      en: "A compliant Saudi entity with CR, bank-account support, and essential platform activation.",
      ar: "شركة نظامية جاهزة: سجل تجاري وحساب بنكي وتفعيل للمنصات الأساسية.",
    },
    price: 25000,
    period: "one-time",
    idealFor: {
      en: "Founders entering Saudi Arabia for the first time",
      ar: "المؤسسون الداخلون للسوق السعودي لأول مرة",
    },
    priceNote: {
      en: "Professional fee only. Government fees are paid at cost.",
      ar: "أتعاب الخدمة فقط. الرسوم الحكومية تُدفع كما هي للجهات.",
    },
    highlight: { en: "3 months VAT filing included", ar: "إقرار ضريبي لـ3 أشهر مجاناً" },
    features: [
      { en: "MISA investment license where required", ar: "ترخيص الاستثمار MISA عند الحاجة" },
      { en: "Commercial Registration, Chamber, and national address", ar: "السجل التجاري + الغرفة + العنوان الوطني" },
      { en: "Corporate bank account support", ar: "دعم فتح الحساب البنكي التجاري" },
      { en: "Core registrations: Qiwa, Muqeem, GOSI, and ZATCA", ar: "التسجيل في قوى ومقيم والتأمينات وزاتكا" },
    ],
  },
  {
    id: "growth",
    group: "setup",
    name: { en: "Growth", ar: "النمو" },
    description: {
      en: "Full formation with stronger bank-account support and 3 months of platform management included.",
      ar: "تأسيس كامل بحساب بنكي مضمون و3 شهور إدارة منصات هدية.",
    },
    price: 35000,
    period: "one-time",
    recommended: true,
    idealFor: {
      en: "Foreign-owned companies ready to operate quickly",
      ar: "الشركات الأجنبية الجاهزة للتشغيل بسرعة",
    },
    priceNote: {
      en: "Professional fee only. Government fees are itemized separately.",
      ar: "أتعاب الخدمة فقط. الرسوم الحكومية مفصلة بشكل مستقل.",
    },
    highlight: { en: "Bank-account guarantee or fee difference refunded", ar: "حساب بنكي مضمون أو نرد الفرق" },
    features: [
      { en: "Everything in Launch", ar: "كل ما في باقة الانطلاق" },
      { en: "General Manager iqama processing", ar: "إقامة المدير العام" },
      { en: "All core government platforms activated", ar: "التسجيل في جميع المنصات الحكومية الأساسية" },
      { en: "3 months government-platform management included", ar: "3 شهور إدارة منصات مجاناً" },
      { en: "Saudi market-entry blueprint included", ar: "مخطط دخول السوق السعودي هدية" },
    ],
  },
  {
    id: "turnkey",
    group: "setup",
    name: { en: "Turnkey", ar: "التمكين الكامل" },
    description: {
      en: "Everything from incorporation to operating readiness while you focus on the business.",
      ar: "سلّم المفتاح — كل شيء من الصفر للتشغيل وأنت متفرّغ لعملك.",
    },
    price: 49000,
    period: "one-time",
    idealFor: {
      en: "Teams that want setup, residency, address, and priority execution",
      ar: "الفرق التي تحتاج تأسيساً وإقامة وعنواناً وأولوية تنفيذ",
    },
    priceNote: {
      en: "Professional fee only. Government fees are paid at cost.",
      ar: "أتعاب الخدمة فقط. الرسوم الحكومية تُدفع كما هي للجهات.",
    },
    highlight: { en: "6 months platform management included", ar: "6 شهور إدارة منصات مجاناً" },
    features: [
      { en: "Everything in Growth", ar: "كل ما في باقة النمو" },
      { en: "Office or virtual address for the first year", ar: "عنوان مكتب / افتراضي للسنة الأولى" },
      { en: "Investor residency support", ar: "دعم إقامة المستثمر" },
      { en: "6 months government-platform management included", ar: "6 شهور إدارة منصات مجاناً" },
      { en: "Dedicated account manager and priority execution", ar: "مدير حساب مخصص + أولوية تنفيذ" },
    ],
  },
  {
    id: "platform-lite",
    group: "management",
    name: { en: "Lite", ar: "لايت" },
    description: {
      en: "The essentials for a small company to stay compliant and avoid service suspension.",
      ar: "الأساسيات لشركة صغيرة تبقى نظامية وتتجنب الإيقاف والغرامات.",
    },
    price: 9600,
    period: "yearly",
    idealFor: { en: "Companies with up to 5 employees", ar: "شركات حتى 5 موظفين" },
    priceNote: { en: "Approximately SAR 800 / month", ar: "≈ 800 ر.س شهرياً" },
    features: [
      { en: "Absher Business, Qiwa, and Muqeem upkeep", ar: "أبشر أعمال + قوى + مقيم" },
      { en: "CR and Chamber renewal tracking", ar: "متابعة تجديد السجل والغرفة" },
      { en: "Alerts before every due date", ar: "تنبيهات قبل كل استحقاق" },
      { en: "Initial compliance risk check", ar: "تدقيق امتثال أولي" },
    ],
  },
  {
    id: "platform-growth",
    group: "management",
    name: { en: "Growth", ar: "نمو" },
    description: {
      en: "Near-complete platform management for an operating company with payroll and tax needs.",
      ar: "إدارة شبه كاملة لشركة عاملة برواتب وضرائب.",
    },
    price: 14400,
    period: "yearly",
    recommended: true,
    idealFor: { en: "Companies with up to 10 employees", ar: "شركات حتى 10 موظفين" },
    priceNote: { en: "Approximately SAR 1,200 / month", ar: "≈ 1,200 ر.س شهرياً" },
    highlight: { en: "Most requested management plan", ar: "الأكثر طلباً لإدارة المنصات" },
    features: [
      { en: "Everything in Lite", ar: "كل ما في باقة لايت" },
      { en: "Payroll and Wage Protection via Mudad / WPS", ar: "الرواتب وحماية الأجور عبر مدد" },
      { en: "GOSI files and employee registrations", ar: "ملفات التأمينات وتسجيلات الموظفين" },
      { en: "VAT filing and e-invoicing follow-up with ZATCA", ar: "إقرارات القيمة المضافة والفاتورة الإلكترونية مع زاتكا" },
      { en: "Iqama renewals and Saudization tracking", ar: "تجديد الإقامات ومتابعة السعودة" },
    ],
  },
  {
    id: "platform-complete",
    group: "management",
    name: { en: "Complete", ar: "شامل" },
    description: {
      en: "Full compliance plus government tender readiness for larger operating teams.",
      ar: "امتثال كامل + جاهزية لدخول المناقصات الحكومية.",
    },
    price: 27600,
    period: "yearly",
    idealFor: { en: "Companies with up to 25 employees", ar: "شركات حتى 25 موظفاً" },
    priceNote: { en: "Approximately SAR 2,300 / month", ar: "≈ 2,300 ر.س شهرياً" },
    features: [
      { en: "Everything in Growth", ar: "كل ما في باقة نمو" },
      { en: "Zakat and income-tax support", ar: "الزكاة وضريبة الدخل" },
      { en: "Etimad and contractor-classification management", ar: "إدارة اعتماد + تصنيف المقاولين" },
      { en: "Saber registration for importers", ar: "تسجيل سابر للمستوردين" },
      { en: "Dedicated government representative and weekly report", ar: "مندوب مخصص + تقرير أسبوعي" },
    ],
  },
];

export type ServiceGroup = { title: L; items?: L[]; locked?: boolean };

export type PackageSpec = { label: L; value: L };

/** Headline specs shown as a quick-stat row on each pricing card (employees, branches, add-on costs, timeframe) — like the reference packages layout. */
export const packageSpecs: Record<string, PackageSpec[]> = {
  launch: [
    { label: { en: "Setup time", ar: "مدة التأسيس" }, value: { en: "4–8 weeks", ar: "4–8 أسابيع" } },
    { label: { en: "Bank account", ar: "الحساب البنكي" }, value: { en: "Supported", ar: "مدعوم" } },
    { label: { en: "VAT filing", ar: "الإقرار الضريبي" }, value: { en: "3 months free", ar: "3 أشهر مجاناً" } },
    { label: { en: "Government fees", ar: "الرسوم الحكومية" }, value: { en: "At cost", ar: "كما هي للجهات" } },
  ],
  growth: [
    { label: { en: "Setup time", ar: "مدة التأسيس" }, value: { en: "4–8 weeks", ar: "4–8 أسابيع" } },
    { label: { en: "Bank account", ar: "الحساب البنكي" }, value: { en: "Guaranteed", ar: "مضمون" } },
    { label: { en: "GM iqama", ar: "إقامة المدير" }, value: { en: "Included", ar: "مشمولة" } },
    { label: { en: "Free management", ar: "إدارة مجانية" }, value: { en: "3 months", ar: "3 أشهر" } },
  ],
  turnkey: [
    { label: { en: "Setup time", ar: "مدة التأسيس" }, value: { en: "4–8 weeks", ar: "4–8 أسابيع" } },
    { label: { en: "Office address", ar: "عنوان المكتب" }, value: { en: "First year", ar: "السنة الأولى" } },
    { label: { en: "Investor residency", ar: "إقامة المستثمر" }, value: { en: "Included", ar: "مشمولة" } },
    { label: { en: "Free management", ar: "إدارة مجانية" }, value: { en: "6 months", ar: "6 أشهر" } },
  ],
  "platform-lite": [
    { label: { en: "Employees", ar: "عدد الموظفين" }, value: { en: "1–5", ar: "1–5" } },
    { label: { en: "Additional employee", ar: "موظف إضافي" }, value: { en: "SAR 400", ar: "400 ر.س" } },
    { label: { en: "Branches", ar: "عدد الفروع" }, value: { en: "1", ar: "1" } },
    { label: { en: "Additional branch", ar: "فرع إضافي" }, value: { en: "SAR 400", ar: "400 ر.س" } },
  ],
  "platform-growth": [
    { label: { en: "Employees", ar: "عدد الموظفين" }, value: { en: "1–10", ar: "1–10" } },
    { label: { en: "Additional employee", ar: "موظف إضافي" }, value: { en: "SAR 400", ar: "400 ر.س" } },
    { label: { en: "Branches", ar: "عدد الفروع" }, value: { en: "1", ar: "1" } },
    { label: { en: "Additional branch", ar: "فرع إضافي" }, value: { en: "SAR 400", ar: "400 ر.س" } },
  ],
  "platform-complete": [
    { label: { en: "Employees", ar: "عدد الموظفين" }, value: { en: "1–25", ar: "1–25" } },
    { label: { en: "Additional employee", ar: "موظف إضافي" }, value: { en: "SAR 400", ar: "400 ر.س" } },
    { label: { en: "Branches", ar: "عدد الفروع" }, value: { en: "Up to 3", ar: "حتى 3" } },
    { label: { en: "Additional branch", ar: "فرع إضافي" }, value: { en: "SAR 400", ar: "400 ر.س" } },
  ],
};

/** Detailed, expandable service breakdown per package (rendered as accordions on the pricing cards). */
export const packageServiceGroups: Record<string, ServiceGroup[]> = {
  launch: [
    { title: { en: "MISA investment license", ar: "ترخيص الاستثمار MISA" }, items: [
      { en: "Activity eligibility study under investment rules", ar: "دراسة توافق نشاطك مع أنظمة الاستثمار" },
      { en: "Document preparation, translation, and attestation", ar: "تجهيز وترجمة وتصديق المستندات" },
      { en: "Filing and follow-up until issuance", ar: "تقديم الطلب ومتابعته حتى الإصدار" },
    ] },
    { title: { en: "CR + Chamber + national address", ar: "السجل التجاري + الغرفة + العنوان الوطني" }, items: [
      { en: "Trade-name reservation and Articles of Association", ar: "حجز الاسم التجاري وعقد التأسيس" },
      { en: "Commercial Registration issuance", ar: "إصدار السجل التجاري" },
      { en: "Chamber of Commerce registration", ar: "تسجيل الغرفة التجارية" },
      { en: "National address attestation", ar: "توثيق العنوان الوطني" },
    ] },
    { title: { en: "Corporate bank account", ar: "الحساب البنكي التجاري" }, items: [
      { en: "Onboarding file and compliance documents", ar: "تجهيز ملف الفتح ومستندات الامتثال" },
      { en: "Coordination with the bank", ar: "التنسيق مع البنك وحجز المواعيد" },
      { en: "Follow-up until activation", ar: "المتابعة حتى تفعيل الحساب" },
    ] },
    { title: { en: "Core platform registration", ar: "التسجيل في المنصات الأساسية" }, items: [
      { en: "Qiwa and Muqeem", ar: "قوى ومقيم" },
      { en: "GOSI (social insurance)", ar: "التأمينات الاجتماعية" },
      { en: "ZATCA (tax)", ar: "زاتكا (الضريبة)" },
    ] },
  ],
  growth: [
    { title: { en: "Everything in Launch", ar: "كل ما في باقة الانطلاق" }, items: [
      { en: "MISA license, CR, Chamber, national address", ar: "ترخيص MISA والسجل والغرفة والعنوان الوطني" },
      { en: "Corporate bank account + core platforms", ar: "الحساب البنكي + المنصات الأساسية" },
    ] },
    { title: { en: "General Manager iqama", ar: "إقامة المدير العام" }, items: [
      { en: "Work visa issuance", ar: "إصدار تأشيرة العمل" },
      { en: "Medical, insurance, and iqama processing", ar: "الفحص الطبي والتأمين وإجراءات الإقامة" },
      { en: "Muqeem registration and iqama issuance", ar: "التسجيل في مقيم وإصدار الإقامة" },
    ] },
    { title: { en: "All government platforms activated", ar: "تفعيل جميع المنصات الحكومية" }, items: [
      { en: "Absher Business and Balady", ar: "أبشر أعمال وبلدي" },
      { en: "Mudad (payroll)", ar: "منصة مدد (الرواتب)" },
      { en: "Full Qiwa, Muqeem, GOSI, ZATCA", ar: "تفعيل كامل لقوى ومقيم والتأمينات وزاتكا" },
    ] },
    { title: { en: "3 months platform management — free", ar: "3 شهور إدارة منصات مجاناً" }, items: [
      { en: "Compliance and renewals upkeep", ar: "متابعة الالتزامات والتجديدات" },
      { en: "Alerts before every due date", ar: "تنبيهات قبل كل استحقاق" },
    ] },
    { title: { en: "Market-entry blueprint — gift", ar: "مخطط دخول السوق — هدية" }, items: [
      { en: "Detailed setup cost for your activity", ar: "تكلفة التأسيس المفصّلة لنشاطك" },
      { en: "Expected monthly costs", ar: "المصاريف الشهرية المتوقعة" },
      { en: "Sector profit scenarios (estimates)", ar: "سيناريوهات أرباح قطاعك (تقديرية)" },
    ] },
  ],
  turnkey: [
    { title: { en: "Everything in Growth", ar: "كل ما في باقة النمو" }, items: [
      { en: "Full setup + GM iqama + all platforms", ar: "تأسيس كامل + إقامة المدير + كل المنصات" },
      { en: "3 months management + market-entry blueprint", ar: "3 شهور إدارة + مخطط دخول السوق" },
    ] },
    { title: { en: "Office / virtual address — first year", ar: "عنوان مكتب / افتراضي للسنة الأولى" }, items: [
      { en: "Approved national address", ar: "عنوان وطني معتمد للمنشأة" },
      { en: "Physical office or virtual option", ar: "مكتب فعلي أو عنوان افتراضي" },
    ] },
    { title: { en: "Investor residency", ar: "إقامة المستثمر" }, items: [
      { en: "Premium investor residency support", ar: "دعم إصدار إقامة المستثمر المميّز" },
      { en: "Full document handling and follow-up", ar: "تجهيز ومتابعة المستندات" },
    ] },
    { title: { en: "6 months platform management — free", ar: "6 شهور إدارة منصات مجاناً" }, items: [
      { en: "Full management for 6 months", ar: "إدارة كاملة لكل المنصات 6 شهور" },
      { en: "Renewals, payroll, and filings included", ar: "تجديدات ورواتب وإقرارات ضمن الباقة" },
    ] },
    { title: { en: "Dedicated account manager + priority", ar: "مدير حساب مخصص + أولوية تنفيذ" }, items: [
      { en: "A manager you reach directly", ar: "مدير حساب تتواصل معه مباشرة" },
      { en: "Priority on all transactions", ar: "أولوية في تنفيذ كل معاملاتك" },
    ] },
  ],
  "platform-lite": [
    { title: { en: "Absher Business", ar: "أبشر أعمال" }, items: [
      { en: "Electronic authorizations", ar: "إدارة التفويضات الإلكترونية" },
      { en: "Government services execution", ar: "تنفيذ الخدمات الحكومية" },
      { en: "Entity data attestation", ar: "توثيق وتحديث بيانات المنشأة" },
    ] },
    { title: { en: "Qiwa (core)", ar: "منصة قوى (أساسي)" }, items: [
      { en: "Work permit tracking", ar: "متابعة رخص العمل وتواريخ انتهائها" },
      { en: "Entity data updates", ar: "تحديث بيانات المنشأة" },
      { en: "Basic Saudization (Nitaqat) tracking", ar: "متابعة نطاقات السعودة الأساسية" },
      { en: "Establishment file management", ar: "إدارة ملف المنشأة" },
      { en: "Self-evaluation and violations follow-up", ar: "متابعة التقييم الذاتي والمخالفات" },
    ] },
    { title: { en: "Muqeem", ar: "منصة مقيم" }, items: [
      { en: "Iqama renewals", ar: "تجديد الإقامات" },
      { en: "Exit-reentry visas", ar: "تأشيرات الخروج والعودة" },
      { en: "Final exit and info transfer", ar: "الخروج النهائي ونقل المعلومات" },
      { en: "Passport data updates", ar: "تحديث بيانات الجوازات" },
      { en: "Muqeem reports and printouts", ar: "تقارير ومطبوعات مقيم" },
    ] },
    { title: { en: "CR & Chamber", ar: "السجل التجاري والغرفة" }, items: [
      { en: "Annual CR renewal alerts", ar: "متابعة وتنبيه التجديد السنوي للسجل" },
      { en: "Chamber membership renewal", ar: "تجديد عضوية الغرفة التجارية" },
    ] },
    { title: { en: "Alerts & compliance", ar: "التنبيهات والامتثال" }, items: [
      { en: "Scheduled due-date alerts", ar: "تنبيهات مجدولة قبل كل استحقاق" },
      { en: "Initial compliance audit", ar: "تدقيق امتثال أولي" },
    ] },
    { title: { en: "Payroll & WPS (Mudad)", ar: "الرواتب وحماية الأجور (مدد)" }, locked: true },
    { title: { en: "Tax & e-invoicing (ZATCA)", ar: "الضريبة والفاتورة (زاتكا)" }, locked: true },
    { title: { en: "Zakat & tenders (Etimad / Saber)", ar: "الزكاة والمناقصات (اعتماد/سابر)" }, locked: true },
  ],
  "platform-growth": [
    { title: { en: "Everything in Lite", ar: "كل ما في باقة لايت" }, items: [
      { en: "Absher, Qiwa, Muqeem", ar: "أبشر أعمال + قوى + مقيم" },
      { en: "CR & Chamber + alerts", ar: "السجل والغرفة + التنبيهات" },
    ] },
    { title: { en: "Mudad — payroll & WPS", ar: "منصة مدد — الرواتب وحماية الأجور" }, items: [
      { en: "Monthly payroll file", ar: "رفع ملف الرواتب الشهري" },
      { en: "Wage Protection System compliance", ar: "الالتزام بنظام حماية الأجور (WPS)" },
      { en: "Payment and reconciliation reports", ar: "تقارير المدفوعات والمطابقة" },
      { en: "Bank salary file generation", ar: "توليد ملف الرواتب البنكي" },
    ] },
    { title: { en: "GOSI (social insurance)", ar: "التأمينات الاجتماعية (GOSI)" }, items: [
      { en: "Employee registration / removal", ar: "تسجيل وإلغاء الموظفين" },
      { en: "Wage and contribution updates", ar: "تحديث الأجور والاشتراكات" },
      { en: "Certificate issuance", ar: "إصدار شهادات التأمينات" },
      { en: "Occupational-hazards subscription", ar: "اشتراك الأخطار المهنية" },
    ] },
    { title: { en: "ZATCA — VAT & e-invoicing", ar: "زاتكا — الضريبة والفاتورة الإلكترونية" }, items: [
      { en: "VAT registration and amendments", ar: "التسجيل في القيمة المضافة والتعديلات" },
      { en: "Periodic VAT returns", ar: "إعداد وتقديم إقرارات القيمة المضافة" },
      { en: "E-invoicing (Fatoora) integration", ar: "ربط وإصدار الفاتورة الإلكترونية (فاتورة)" },
      { en: "Tax compliance follow-up", ar: "متابعة الالتزام الضريبي" },
    ] },
    { title: { en: "Qiwa (advanced)", ar: "منصة قوى (متقدّم)" }, items: [
      { en: "Work permit renewals", ar: "تجديد رخص العمل" },
      { en: "Sponsorship transfer and contracts", ar: "نقل الخدمات (الكفالة) وتوثيق العقود" },
      { en: "Visa and Saudization requests", ar: "إدارة طلبات التأشيرات والسعودة" },
    ] },
    { title: { en: "Employee iqamas", ar: "إقامات الموظفين" }, items: [
      { en: "Bulk renewals", ar: "تجديد جماعي للإقامات" },
      { en: "Expiry tracking and exceptions", ar: "متابعة الانتهاء ومعالجة الاستثناءات" },
    ] },
    { title: { en: "Zakat, income tax & tenders", ar: "الزكاة وضريبة الدخل والمناقصات" }, locked: true },
  ],
  "platform-complete": [
    { title: { en: "Everything in Growth", ar: "كل ما في باقة نمو" }, items: [
      { en: "Absher, Qiwa, Muqeem, Mudad, GOSI, ZATCA", ar: "أبشر + قوى + مقيم + مدد + التأمينات + زاتكا" },
      { en: "Employee iqamas and alerts", ar: "إقامات الموظفين والتنبيهات" },
    ] },
    { title: { en: "Zakat & income tax", ar: "الزكاة وضريبة الدخل" }, items: [
      { en: "Annual returns preparation and filing", ar: "إعداد وتقديم الإقرارات السنوية" },
      { en: "Zakat certificate issuance", ar: "استخراج شهادة الزكاة" },
    ] },
    { title: { en: "Etimad", ar: "منصة اعتماد" }, items: [
      { en: "Registration and qualification", ar: "التسجيل والتأهيل في اعتماد" },
      { en: "Bids and government tenders", ar: "إدارة العروض والمنافسات الحكومية" },
    ] },
    { title: { en: "Saber", ar: "منصة سابر" }, items: [
      { en: "Product registration", ar: "تسجيل المنتجات" },
      { en: "Conformity certificates for importers", ar: "شهادات المطابقة للمستوردين" },
    ] },
    { title: { en: "Dedicated government representative", ar: "مندوب حكومي مخصص" }, items: [
      { en: "In-person transactions handled", ar: "إنجاز المعاملات التي تتطلب حضوراً" },
      { en: "Entity representation before authorities", ar: "تمثيل المنشأة أمام الجهات" },
    ] },
    { title: { en: "Monthly status report", ar: "تقرير شهري بحالة المنشأة" }, items: [
      { en: "Summary of obligations and dates", ar: "ملخّص الالتزامات والمواعيد القادمة" },
      { en: "Compliance and Saudization metrics", ar: "مؤشرات الامتثال والسعودة" },
    ] },
  ],
};

export const managementAddOns: L[] = [
  { en: "Additional employee: SAR 400", ar: "موظف إضافي: 400 ر.س" },
  { en: "Additional branch: SAR 400", ar: "فرع إضافي: 400 ر.س" },
  { en: "Annual prepayment: two months free", ar: "الدفع السنوي مقدماً: شهران مجاناً" },
];

export const bundleOffer = {
  title: { en: "Set up + manage for one year, and save", ar: "أسّس واشترك سنة، ووفّر" },
  text: {
    en: "Combine a setup package with Growth platform management for 12 months.",
    ar: "اجمع باقة التأسيس مع إدارة المنصات (نمو) لمدة 12 شهر.",
  },
  value: {
    en: "SAR 5,000 discount + two extra management months free",
    ar: "خصم 5,000 ر.س + شهران إدارة إضافيان مجاناً",
  },
};

export const managementGuarantees: { icon: string; title: L; text: L }[] = [
  {
    icon: "shield-check",
    title: { en: "No late-fine guarantee", ar: "ضمان بلا غرامات" },
    text: {
      en: "If a government late fine is caused by our delay, we absorb it. Your responsibility is to provide documents on time.",
      ar: "أي غرامة تأخير حكومية بسبب تقصير منّا نتحملها كاملة. التزامك الوحيد تزويدنا بالمستندات في وقتها.",
    },
  },
  {
    icon: "clock",
    title: { en: "One-business-hour response", ar: "رد خلال ساعة عمل" },
    text: {
      en: "You get a dedicated representative, not a forgotten ticket queue.",
      ar: "لك مندوب تكلّمه مباشرة — لا انتظار ولا تذاكر مهملة.",
    },
  },
  {
    icon: "calendar-days",
    title: { en: "Continuity monitoring", ar: "ضمان الاستمرارية" },
    text: {
      en: "We monitor due dates before they become service suspensions.",
      ar: "نراقب كل المواعيد قبل استحقاقها لمنع إيقاف خدمات منشأتك.",
    },
  },
];

export const partnerPrograms: { title: L; subtitle: L; value: L; features: L[] }[] = [
  {
    title: { en: "Referral", ar: "الإحالة" },
    subtitle: {
      en: "Refer the client and we handle communication, closing, and delivery.",
      ar: "رشّح العميل ونحن نكمل التواصل والإغلاق والتنفيذ.",
    },
    value: { en: "Commission starts at 10%", ar: "عمولة تبدأ من 10%" },
    features: [
      { en: "10% for 1-3 clients per year", ar: "1-3 عملاء/سنة: 10%" },
      { en: "15% for 4-10 clients", ar: "4-10 عملاء: 15%" },
      { en: "20% + priority for more than 10 clients", ar: "أكثر من 10 عملاء: 20% + أولوية" },
      { en: "Recurring commission on platform-management renewals", ar: "عمولة متكررة على تجديدات إدارة المنصات" },
    ],
  },
  {
    title: { en: "Reseller / white-label", ar: "إعادة البيع / العلامة المشتركة" },
    subtitle: {
      en: "You own the client relationship and margin; we execute in Saudi Arabia under your brand.",
      ar: "أنت تملك علاقة العميل وهامشك، ونحن ننفذ في السعودية باسمك.",
    },
    value: { en: "Partner discount up to 25%", ar: "سعر شريك مخفض حتى 25%" },
    features: [
      { en: "Discounted partner pricing on all packages", ar: "سعر شريك مخفض على كل الباقات" },
      { en: "White-label execution and reports", ar: "تنفيذ وتقارير بعلامتك" },
      { en: "Dedicated partner manager", ar: "مدير شركاء مخصص" },
      { en: "Priority handling for referred Saudi market-entry cases", ar: "أولوية تنفيذ لحالات دخول السوق السعودي" },
    ],
  },
];

export const setupCompare: CompareRow[] = [
  {
    feature: { en: "MISA investment license where required", ar: "ترخيص الاستثمار عند الحاجة" },
    values: [true, true, true],
  },
  {
    feature: { en: "Commercial Registration and national address", ar: "السجل التجاري والعنوان الوطني" },
    values: [true, true, true],
  },
  {
    feature: { en: "Corporate bank account support", ar: "دعم الحساب البنكي التجاري" },
    values: [true, true, true],
  },
  {
    feature: { en: "Government platform activation", ar: "تفعيل المنصات الحكومية" },
    values: [{ en: "Core", ar: "أساسي" }, { en: "Full", ar: "كامل" }, { en: "Full", ar: "كامل" }],
  },
  {
    feature: { en: "Included platform management", ar: "إدارة منصات مشمولة" },
    values: [false, { en: "3 months", ar: "3 شهور" }, { en: "6 months", ar: "6 شهور" }],
  },
  {
    feature: { en: "Office / virtual address", ar: "عنوان مكتب / افتراضي" },
    values: [false, false, { en: "First year", ar: "السنة الأولى" }],
  },
  {
    feature: { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
    values: [false, true, true],
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    q: { en: "Do setup packages include government fees?", ar: "هل تشمل باقات التأسيس الرسوم الحكومية؟" },
    a: {
      en: "No. Package prices are our professional fees. Government fees such as CR, Qiwa, Muqeem, visas, and official renewals are paid at cost to the relevant Saudi authorities.",
      ar: "لا. أسعار الباقات هي أتعاب الخدمة. الرسوم الحكومية مثل السجل التجاري وقوى ومقيم والتأشيرات والتجديدات الرسمية تُدفع كما هي للجهات السعودية.",
    },
  },
  {
    q: { en: "How long does company setup take?", ar: "كم تستغرق مدة تأسيس الشركة؟" },
    a: {
      en: "Most Saudi company setup tracks take around 4-8 weeks, depending on the activity, document readiness, and bank compliance review.",
      ar: "غالباً تستغرق مسارات تأسيس الشركات في السعودية 4-8 أسابيع حسب النشاط وجاهزية المستندات ومراجعة امتثال البنك.",
    },
  },
  {
    q: { en: "What does the platform-management subscription cover?", ar: "ماذا يغطي اشتراك إدارة المنصات؟" },
    a: {
      en: "It covers ongoing upkeep across platforms such as Qiwa, Muqeem, Absher Business, GOSI, ZATCA, Mudad, Etimad, and related renewal calendars based on the selected plan.",
      ar: "يغطي المتابعة المستمرة على منصات مثل قوى، مقيم، أبشر أعمال، التأمينات، زاتكا، مدد، اعتماد وتقويمات التجديد حسب الباقة المختارة.",
    },
  },
  {
    q: { en: "What is the no-late-fine guarantee?", ar: "ما المقصود بضمان بلا غرامات؟" },
    a: {
      en: "If a government late fine is caused by our delay after receiving required documents on time, we absorb it. The guarantee does not cover missing documents or official authority delays.",
      ar: "إذا نتجت غرامة تأخير حكومية عن تقصير منّا بعد استلام المستندات المطلوبة في وقتها، نتحملها. ولا يشمل الضمان نقص المستندات أو تأخير الجهات الرسمية.",
    },
  },
  {
    q: { en: "Can partners resell Omnera One services?", ar: "هل يمكن للشركاء إعادة بيع خدمات Omnera One؟" },
    a: {
      en: "Yes. We support both referral commissions and reseller / white-label models for firms that already serve founders entering the Saudi market.",
      ar: "نعم. نوفر نموذج الإحالة بالعمولة ونموذج إعادة البيع / العلامة المشتركة للمكاتب التي تخدم مؤسسين يرغبون بدخول السوق السعودي.",
    },
  },
];
