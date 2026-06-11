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
    q: { en: "Can partners resell Omnira services?", ar: "هل يمكن للشركاء إعادة بيع خدمات أومنيرا؟" },
    a: {
      en: "Yes. We support both referral commissions and reseller / white-label models for firms that already serve founders entering the Saudi market.",
      ar: "نعم. نوفر نموذج الإحالة بالعمولة ونموذج إعادة البيع / العلامة المشتركة للمكاتب التي تخدم مؤسسين يرغبون بدخول السوق السعودي.",
    },
  },
];
