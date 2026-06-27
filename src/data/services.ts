import type { L } from "@/i18n/config";

export type ServiceCategoryId =
  | "business-support"
  | "residency-visas"
  | "office-solutions"
  | "finance-compliance"
  | "government-services";

export type ServiceCategory = {
  id: ServiceCategoryId;
  label: L;
  icon: string;
  blurb: L;
};

export type ServiceStep = { title: L; text: L };
export type ServiceFaq = { q: L; a: L };

export type Service = {
  slug: string;
  category: ServiceCategoryId;
  icon: string;
  featured?: boolean;
  image?: string;
  title: L;
  excerpt: L;
  overview: L[];
  audience: L[];
  benefits: L[];
  steps: ServiceStep[];
  requirements: L[];
  deliverables: L[];
  timeline: L;
  bestFor: L;
  supportType: L;
  faqs: ServiceFaq[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "business-support",
    label: { en: "Business Support", ar: "دعم الأعمال" },
    icon: "briefcase",
    blurb: {
      en: "Company formation, licensing, and market-entry support.",
      ar: "تأسيس الشركات والتراخيص ودعم دخول السوق.",
    },
  },
  {
    id: "residency-visas",
    label: { en: "Residency & Visas", ar: "الإقامة والتأشيرات" },
    icon: "badge-check",
    blurb: {
      en: "Investor residency, employee visas, and iqama services.",
      ar: "إقامة المستثمر وتأشيرات الموظفين وخدمات الإقامة.",
    },
  },
  {
    id: "office-solutions",
    label: { en: "Office Solutions", ar: "حلول المكاتب" },
    icon: "building",
    blurb: {
      en: "Flexible offices for every stage of your growth.",
      ar: "مكاتب مرنة لكل مرحلة من مراحل نموك.",
    },
  },
  {
    id: "finance-compliance",
    label: { en: "Finance & Compliance", ar: "المالية والامتثال" },
    icon: "shield-check",
    blurb: {
      en: "Accounting, ZAKAT & tax, and audit support.",
      ar: "المحاسبة والزكاة والضرائب ودعم المراجعة.",
    },
  },
  {
    id: "government-services",
    label: { en: "Government Services", ar: "الخدمات الحكومية" },
    icon: "file-text",
    blurb: {
      en: "Insurance, traffic, and vehicle services handled for you.",
      ar: "خدمات التأمين والمرور والمركبات نُنجزها نيابةً عنك.",
    },
  },
];

export const services: Service[] = [
  // ─────────────────────────── Business Support ───────────────────────────
  {
    slug: "license-issuance",
    category: "business-support",
    icon: "scroll-text",
    featured: true,
    image: "/images/services/license-issuance.webp",
    title: { en: "License Issuance", ar: "إصدار التراخيص" },
    excerpt: {
      en: "Obtain every licence your business needs to operate legally in Saudi Arabia — investment, commercial, municipal, and activity-specific.",
      ar: "احصل على كل ترخيص تحتاجه شركتك للعمل بشكل نظامي في السعودية — استثماري وتجاري وبلدي وحسب النشاط.",
    },
    overview: [
      {
        en: "Operating legally in Saudi Arabia usually requires several licences in the right sequence: for foreign-owned entities, a MISA investment licence from the Ministry of Investment; then the Commercial Registration (CR) from the Ministry of Commerce; a municipal (Balady) operating licence for your premises; and, for regulated activities, a sector permit from the relevant authority (SFDA, CST, SAMA, the Ministry of Tourism, the Ministry of Industry, and others). We identify exactly which licences your activity needs and issue them in the correct order.",
        ar: "العمل بشكل نظامي في السعودية يتطلب عادةً عدة تراخيص بالترتيب الصحيح: للكيانات ذات الملكية الأجنبية، ترخيص استثمار من وزارة الاستثمار؛ ثم السجل التجاري من وزارة التجارة؛ ورخصة بلدية (بلدي) لمقرّك؛ وللأنشطة المنظَّمة، تصريح قطاع من الجهة المختصة (الغذاء والدواء، الاتصالات، البنك المركزي، وزارة السياحة، وزارة الصناعة وغيرها). نحدد بدقة التراخيص التي يحتاجها نشاطك ونصدرها بالترتيب الصحيح.",
      },
      {
        en: "MISA licences cover eight activity categories — Service, Professional, Industrial, Trading (Commercial), Entrepreneurial, Agricultural, Real Estate Development, and Mining — and most sectors now allow 100% foreign ownership with no Saudi partner. As part of Vision 2030 reforms, MISA service fees are currently waived (SAR 0), and processing for a clean file can take only a few business days.",
        ar: "تغطي تراخيص الاستثمار ثماني فئات نشاط — خدمي، مهني، صناعي، تجاري، ريادي، زراعي، تطوير عقاري، وتعدين — ومعظم القطاعات تتيح الآن ملكية أجنبية 100% بدون شريك سعودي. وضمن إصلاحات رؤية 2030، رسوم خدمة الاستثمار معفاة حاليًا (0 ر.س)، ومعالجة الملف النظيف قد تتم خلال أيام عمل قليلة.",
      },
      {
        en: "Choosing the correct activity classification (ISIC) up front avoids costly rework and rejected applications. We handle classification, eligibility checks, document preparation, submission, and follow-up until every licence is issued and active — and we set you up with a renewal calendar so nothing lapses.",
        ar: "اختيار التصنيف الصحيح للنشاط (ISIC) من البداية يتجنّب إعادة الإجراءات المكلِّفة ورفض الطلبات. نتولّى التصنيف وفحص الأهلية وتجهيز المستندات والتقديم والمتابعة حتى يصدر كل ترخيص ويصبح فعّالًا — ونجهّز لك تقويم تجديد حتى لا ينتهي شيء.",
      },
    ],
    audience: [
      { en: "Foreign investors who need a MISA licence to own and operate", ar: "المستثمرون الأجانب المحتاجون ترخيص استثمار للتملّك والتشغيل" },
      { en: "Companies entering a regulated activity (health, food, finance, telecom, tourism)", ar: "الشركات الداخلة لنشاط منظَّم (صحة، غذاء، مالية، اتصالات، سياحة)" },
      { en: "Businesses adding a new activity or branch that needs its own permit", ar: "الشركات التي تضيف نشاطًا أو فرعًا جديدًا يحتاج تصريحه الخاص" },
    ],
    benefits: [
      { en: "100% foreign ownership structured where the activity allows", ar: "هيكلة ملكية أجنبية 100% حيث يسمح النشاط" },
      { en: "Correct activity (ISIC) selection from day one — no licensing rework", ar: "اختيار النشاط الصحيح من اليوم الأول — بلا إعادة إجراءات ترخيص" },
      { en: "All licences mapped and sequenced by one accountable team", ar: "كل التراخيص محدّدة ومرتّبة عبر فريق واحد مسؤول" },
      { en: "Sector-regulator permits handled (SFDA, CST, SAMA, MT, and more)", ar: "تصاريح الجهات المنظِّمة (الغذاء والدواء، الاتصالات، البنك المركزي، السياحة وغيرها)" },
      { en: "Government fees passed through at cost — full transparency", ar: "الرسوم الحكومية تُمرَّر كما هي — شفافية كاملة" },
      { en: "Renewal calendar so no licence lapses or triggers a fine", ar: "تقويم تجديد حتى لا ينتهي ترخيص أو تُفرض غرامة" },
    ],
    steps: [
      { title: { en: "Activity classification (ISIC)", ar: "تصنيف النشاط (ISIC)" }, text: { en: "We map your business to the correct activity codes and licence types.", ar: "نطابق نشاطك مع أكواد النشاط وأنواع التراخيص الصحيحة." } },
      { title: { en: "Eligibility & requirements", ar: "الأهلية والمتطلبات" }, text: { en: "We confirm ownership rules, capital, and any prerequisite approvals.", ar: "نؤكد قواعد الملكية ورأس المال وأي موافقات مسبقة مطلوبة." } },
      { title: { en: "MISA investment licence", ar: "ترخيص الاستثمار MISA" }, text: { en: "Prepared and filed for foreign-owned entities where required.", ar: "نعدّه ونقدّمه للكيانات ذات الملكية الأجنبية عند الحاجة." } },
      { title: { en: "CR & municipal licence", ar: "السجل التجاري والرخصة البلدية" }, text: { en: "Commercial Registration plus the Balady operating licence.", ar: "السجل التجاري بالإضافة إلى رخصة البلدية للتشغيل." } },
      { title: { en: "Activity-specific permits", ar: "تصاريح النشاط الخاصة" }, text: { en: "Sector permits from SFDA, CITC, SAMA, the Ministry of Tourism, etc.", ar: "تصاريح القطاع من الغذاء والدواء والاتصالات والبنك المركزي والسياحة وغيرها." } },
      { title: { en: "Issuance & activation", ar: "الإصدار والتفعيل" }, text: { en: "Final issuance, activation, and a renewal calendar for every licence.", ar: "الإصدار النهائي والتفعيل وتقويم تجديد لكل ترخيص." } },
    ],
    requirements: [
      { en: "Shareholder IDs / parent-company commercial registration", ar: "هويات الشركاء / السجل التجاري للشركة الأم" },
      { en: "Description of the planned activity and any sector specifics", ar: "وصف النشاط المخطط له وأي تفاصيل خاصة بالقطاع" },
      { en: "Capital and ownership details", ar: "تفاصيل رأس المال والملكية" },
    ],
    deliverables: [
      { en: "All required business and activity licences, issued and active", ar: "جميع التراخيص المطلوبة للنشاط، صادرة وفعّالة" },
      { en: "MISA licence + Commercial Registration + municipal licence", ar: "ترخيص الاستثمار + السجل التجاري + الرخصة البلدية" },
      { en: "A renewal calendar covering every licence and permit", ar: "تقويم تجديد يغطي كل ترخيص وتصريح" },
    ],
    timeline: { en: "Typically 2–8 weeks depending on the activity and sector approvals.", ar: "عادةً 2–8 أسابيع حسب النشاط وموافقات القطاع." },
    bestFor: { en: "Anyone who needs to be fully licensed to start or expand operations.", ar: "كل من يحتاج ترخيصًا كاملًا لبدء أو توسيع نشاطه." },
    supportType: { en: "Done-for-you licensing across all authorities", ar: "ترخيص مُنجز بالكامل عبر جميع الجهات" },
    faqs: [
      { q: { en: "Which licences does my business actually need?", ar: "ما التراخيص التي يحتاجها نشاطي فعلًا؟" }, a: { en: "It depends on your activity and ownership. Most companies need a CR and a municipal licence; foreign owners need a MISA investment licence; and regulated activities (health, food, finance, telecom, tourism) need a sector permit. We map the exact list for your case before we start.", ar: "يعتمد على نشاطك وملكيتك. معظم الشركات تحتاج سجلًا تجاريًا ورخصة بلدية؛ والمالك الأجنبي يحتاج ترخيص استثمار؛ والأنشطة المنظَّمة (صحة، غذاء، مالية، اتصالات، سياحة) تحتاج تصريح قطاع. نحدد لك القائمة الدقيقة لحالتك قبل أن نبدأ." } },
      { q: { en: "Can a foreigner own 100% of the company?", ar: "هل يمكن للأجنبي تملّك الشركة 100%؟" }, a: { en: "In most activities, yes — a MISA investment licence allows 100% foreign ownership with no Saudi partner (e.g. IT, professional services, manufacturing, logistics, healthcare, hospitality). Some activities such as certain trading have conditions, and a few remain restricted. We confirm eligibility for your exact activity.", ar: "في معظم الأنشطة نعم — ترخيص الاستثمار يتيح ملكية أجنبية 100% بدون شريك سعودي (مثل التقنية والخدمات المهنية والصناعة واللوجستيات والصحة والضيافة). بعض الأنشطة مثل أنواع من التجارة لها شروط، وقليل منها يبقى مقيّدًا. نؤكد الأهلية لنشاطك بالتحديد." } },
      { q: { en: "How much do the licences cost and how long do they take?", ar: "كم تكلفة التراخيص وكم تستغرق؟" }, a: { en: "Government fees are paid at cost: MISA service fees are currently waived (SAR 0), the Commercial Registration is about SAR 1,200 / year plus a SAR 500 publication fee, and municipal and sector permits vary by activity. A clean MISA file can be issued in a few business days; full licensing typically takes 3–8 weeks depending on sector approvals. Our professional fee is separate and quoted upfront.", ar: "الرسوم الحكومية تُدفع كما هي: رسوم خدمة الاستثمار معفاة حاليًا (0 ر.س)، والسجل التجاري نحو 1,200 ر.س سنويًا إضافةً إلى 500 ر.س رسوم نشر، والرخص البلدية وتصاريح القطاع تختلف حسب النشاط. الملف النظيف لترخيص الاستثمار قد يصدر خلال أيام عمل قليلة؛ والترخيص الكامل عادةً 3–8 أسابيع حسب موافقات القطاع. أتعابنا منفصلة وتُحدَّد مسبقًا." } },
      { q: { en: "Can you issue activity-specific (regulated) licences?", ar: "هل تصدرون تراخيص النشاط المنظَّمة؟" }, a: { en: "Yes. We prepare and follow up regulated permits with the relevant authority — SFDA for health/food, CST for telecom, SAMA for finance, the Ministry of Tourism for hospitality, the Ministry of Industry for manufacturing, and others.", ar: "نعم. نعدّ ونتابع التصاريح المنظَّمة مع الجهة المختصة — الغذاء والدواء للصحة/الغذاء، الاتصالات، البنك المركزي للمالية، وزارة السياحة للضيافة، وزارة الصناعة للتصنيع، وغيرها." } },
      { q: { en: "Do licences need renewal?", ar: "هل التراخيص تحتاج تجديدًا؟" }, a: { en: "Yes — the CR, municipal licence, and most permits renew annually. We give you a renewal calendar and can manage the renewals so nothing lapses or triggers a fine.", ar: "نعم — السجل التجاري والرخصة البلدية ومعظم التصاريح تُجدَّد سنويًا. نوفّر لك تقويم تجديد ويمكننا إدارة التجديدات حتى لا ينتهي شيء أو تُفرض غرامة." } },
    ],
  },
  {
    slug: "license-attestation",
    category: "business-support",
    icon: "stamp",
    featured: true,
    title: { en: "License & Document Attestation", ar: "تصديق وتوثيق التراخيص والمستندات" },
    excerpt: {
      en: "Notarize, attest, and legalize your commercial licenses and official documents for use inside Saudi Arabia and abroad.",
      ar: "توثيق وتصديق وتقنين تراخيصك التجارية ومستنداتك الرسمية لاستخدامها داخل السعودية وخارجها.",
    },
    overview: [
      {
        en: "Official documents — commercial registrations, licenses, powers of attorney, board resolutions, contracts, and certificates — often need to be notarized and attested before a bank, ministry, court, or foreign authority will accept them. We run the full attestation chain so your paperwork is legally recognized the first time.",
        ar: "المستندات الرسمية — السجلات التجارية والتراخيص والوكالات وقرارات مجلس الإدارة والعقود والشهادات — غالبًا تحتاج توثيقًا وتصديقًا قبل أن يقبلها بنك أو وزارة أو محكمة أو جهة أجنبية. نتولّى سلسلة التصديق كاملة حتى تُعتمد أوراقك من المرة الأولى.",
      },
      {
        en: "We cover both directions: certifying Saudi documents for use abroad (Chamber of Commerce, Ministry of Foreign Affairs, and embassy legalization), and legalizing foreign documents for use inside the Kingdom, including certified Arabic translation.",
        ar: "نغطّي الاتجاهين: تصديق المستندات السعودية لاستخدامها بالخارج (الغرفة التجارية ووزارة الخارجية والتصديق من السفارات)، وتقنين المستندات الأجنبية لاستخدامها داخل المملكة، بما في ذلك الترجمة المعتمدة إلى العربية.",
      },
    ],
    audience: [
      { en: "Companies submitting documents to banks, tenders, or government bodies", ar: "الشركات التي تقدّم مستندات للبنوك أو المنافسات أو الجهات الحكومية" },
      { en: "Foreign investors whose home-country documents must be legalized for Saudi Arabia", ar: "المستثمرون الأجانب الذين تحتاج مستندات بلدهم إلى تقنين للسعودية" },
      { en: "Businesses exporting or signing contracts that require attested papers abroad", ar: "الشركات المصدّرة أو الموقّعة على عقود تتطلب أوراقًا مصدّقة بالخارج" },
    ],
    benefits: [
      { en: "One team manages notary, Chamber, MoFA, and embassy steps", ar: "فريق واحد يدير كاتب العدل والغرفة والخارجية والسفارة" },
      { en: "Documents accepted the first time — no rejected submissions", ar: "قبول المستندات من أول مرة — بلا رفض أو إعادة" },
      { en: "Certified legal translation included where needed", ar: "ترجمة قانونية معتمدة مشمولة عند الحاجة" },
      { en: "Clear tracking of every document and its attestation stage", ar: "تتبّع واضح لكل مستند ومرحلة تصديقه" },
    ],
    steps: [
      { title: { en: "Document review", ar: "مراجعة المستندات" }, text: { en: "We check each document and map the exact attestation path it needs.", ar: "نفحص كل مستند ونحدد مسار التصديق المطلوب له بدقة." } },
      { title: { en: "Notarization", ar: "التوثيق لدى كاتب العدل" }, text: { en: "Notarizing signatures, powers of attorney, and resolutions via the notary.", ar: "توثيق التواقيع والوكالات والقرارات عبر كاتب العدل." } },
      { title: { en: "Chamber of Commerce attestation", ar: "تصديق الغرفة التجارية" }, text: { en: "Certifying commercial documents, signatures, and certificates of origin.", ar: "تصديق المستندات التجارية والتواقيع وشهادات المنشأ." } },
      { title: { en: "Ministry of Foreign Affairs", ar: "تصديق وزارة الخارجية" }, text: { en: "MoFA attestation for documents that will be used outside the Kingdom.", ar: "تصديق الخارجية للمستندات التي ستُستخدم خارج المملكة." } },
      { title: { en: "Embassy / final legalization", ar: "التصديق النهائي / السفارة" }, text: { en: "Legalization at the destination-country embassy, or Saudi legalization for inbound documents.", ar: "التقنين لدى سفارة دولة الوجهة، أو التصديق السعودي للمستندات الواردة." } },
    ],
    requirements: [
      { en: "The original documents to be attested", ar: "المستندات الأصلية المراد تصديقها" },
      { en: "Valid commercial registration / IDs of the signatories", ar: "السجل التجاري الساري / هويات الموقّعين" },
      { en: "Destination country and the authority requesting the documents", ar: "دولة الوجهة والجهة الطالبة للمستندات" },
    ],
    deliverables: [
      { en: "Fully notarized and attested documents", ar: "مستندات موثّقة ومصدّقة بالكامل" },
      { en: "Certified Arabic / English translations where required", ar: "ترجمات معتمدة عربية / إنجليزية عند الحاجة" },
      { en: "A status sheet for every document and stage", ar: "كشف بحالة كل مستند ومرحلة" },
    ],
    timeline: { en: "Typically 3–10 business days depending on the chain and destination.", ar: "عادةً 3–10 أيام عمل حسب السلسلة والوجهة." },
    bestFor: { en: "Companies and investors who need legally recognized documents fast.", ar: "الشركات والمستثمرون المحتاجون مستندات معترفًا بها قانونيًا وبسرعة." },
    supportType: { en: "Done-for-you attestation management", ar: "إدارة تصديق مُنجزة بالكامل نيابة عنك" },
    faqs: [
      { q: { en: "What is the difference between notarization and attestation?", ar: "ما الفرق بين التوثيق والتصديق؟" }, a: { en: "Notarization authenticates a signature or document before a notary; attestation is the chain of official certifications (Chamber, MoFA, embassy) that makes it valid for a specific authority or country.", ar: "التوثيق يصادق على توقيع أو مستند أمام كاتب العدل؛ أما التصديق فهو سلسلة الاعتمادات الرسمية (الغرفة، الخارجية، السفارة) التي تجعله صالحًا أمام جهة أو دولة محددة." } },
      { q: { en: "Can you legalize documents issued outside Saudi Arabia?", ar: "هل تقنّنون مستندات صادرة خارج السعودية؟" }, a: { en: "Yes. We guide the legalization from the issuing country (its MoFA plus the Saudi embassy there) and complete Saudi-side attestation and certified translation so the document is accepted locally.", ar: "نعم. نوجّه التقنين من دولة الإصدار (خارجيتها والسفارة السعودية هناك) ونكمل التصديق السعودي والترجمة المعتمدة حتى يُقبل المستند محليًا." } },
      { q: { en: "Do you handle certified translation too?", ar: "هل تتولّون الترجمة المعتمدة أيضًا؟" }, a: { en: "Yes — certified legal translation between Arabic and other languages is included whenever the receiving authority requires it.", ar: "نعم — الترجمة القانونية المعتمدة بين العربية واللغات الأخرى مشمولة كلما طلبتها الجهة المستلمة." } },
    ],
  },
  {
    slug: "business-setup",
    category: "business-support",
    icon: "building-2",
    featured: true,
    title: { en: "Business Setup in Saudi Arabia", ar: "تأسيس الأعمال في السعودية" },
    excerpt: {
      en: "Company formation and market entry, end to end — from MISA license to commercial registration.",
      ar: "تأسيس الشركات ودخول السوق من البداية للنهاية — من ترخيص الاستثمار حتى السجل التجاري.",
    },
    overview: [
      {
        en: "Setting up in Saudi Arabia involves several government bodies: MISA for the investment license, the Ministry of Commerce for registration, ZATCA for tax, and municipal authorities for operating permits. We run the full sequence for you, in the right order, with documents prepared correctly the first time.",
        ar: "تأسيس شركة في السعودية يمر عبر عدة جهات حكومية: وزارة الاستثمار لترخيص الاستثمار، ووزارة التجارة للسجل التجاري، وهيئة الزكاة والضريبة والجمارك، والبلديات لرخص التشغيل. نحن ندير التسلسل كاملًا نيابة عنك، بالترتيب الصحيح وبمستندات معدّة بدقة من المرة الأولى.",
      },
      {
        en: "Whether you are a foreign investor opening a 100%-owned entity or a regional company expanding into the Kingdom, you get a single point of contact and a clear weekly status update until your company is fully operational.",
        ar: "سواء كنت مستثمرًا أجنبيًا يؤسس كيانًا مملوكًا بالكامل أو شركة إقليمية تتوسع داخل المملكة، ستحصل على نقطة تواصل واحدة وتحديث أسبوعي واضح حتى تعمل شركتك بشكل كامل.",
      },
    ],
    audience: [
      { en: "Foreign investors entering the Saudi market for the first time", ar: "المستثمرون الأجانب الداخلون للسوق السعودي لأول مرة" },
      { en: "GCC and regional companies opening a Saudi branch or subsidiary", ar: "الشركات الخليجية والإقليمية التي تفتح فرعًا أو شركة تابعة" },
      { en: "Founders converting a project into a licensed legal entity", ar: "روّاد الأعمال الذين يحوّلون مشاريعهم إلى كيانات مرخصة" },
    ],
    benefits: [
      { en: "100% foreign ownership structures where the activity allows", ar: "هياكل ملكية أجنبية 100% حيث يسمح النشاط" },
      { en: "Correct activity (ISIC) selection to avoid licensing rework", ar: "اختيار النشاط الصحيح لتجنب إعادة إجراءات الترخيص" },
      { en: "All government portals handled by one accountable team", ar: "فريق واحد مسؤول يدير جميع المنصات الحكومية" },
      { en: "Bank-account-ready file from day one", ar: "ملف جاهز لفتح الحساب البنكي من اليوم الأول" },
    ],
    steps: [
      {
        title: { en: "Structure consultation", ar: "استشارة الهيكلة" },
        text: { en: "We define the legal form, ownership, capital, and licensed activities.", ar: "نحدد الشكل القانوني والملكية ورأس المال والأنشطة المرخصة." },
      },
      {
        title: { en: "MISA investment license", ar: "ترخيص وزارة الاستثمار" },
        text: { en: "We prepare and file the foreign investment license application.", ar: "نعد ونقدم طلب ترخيص الاستثمار الأجنبي." },
      },
      {
        title: { en: "Name & Articles of Association", ar: "الاسم التجاري وعقد التأسيس" },
        text: { en: "Trade-name reservation and notarized articles via the Ministry of Commerce.", ar: "حجز الاسم التجاري وتوثيق عقد التأسيس عبر وزارة التجارة." },
      },
      {
        title: { en: "Commercial Registration (CR)", ar: "السجل التجاري" },
        text: { en: "Issuance of the CR and national unified number.", ar: "إصدار السجل التجاري والرقم الوطني الموحد." },
      },
      {
        title: { en: "Post-setup registrations", ar: "تسجيلات ما بعد التأسيس" },
        text: { en: "ZATCA, GOSI, Qiwa, Muqeem, Absher Business, and municipality license.", ar: "الزكاة والضريبة، التأمينات، قوى، مقيم، أبشر أعمال، ورخصة البلدية." },
      },
      {
        title: { en: "Bank account & launch", ar: "الحساب البنكي والانطلاق" },
        text: { en: "Corporate bank account support and handover with a compliance calendar.", ar: "دعم فتح الحساب البنكي والتسليم مع تقويم الامتثال السنوي." },
      },
    ],
    requirements: [
      { en: "Shareholder passports / commercial registration of the parent company", ar: "جوازات الشركاء / السجل التجاري للشركة الأم" },
      { en: "Audited financials of the parent company (for foreign entities)", ar: "القوائم المالية المدققة للشركة الأم (للكيانات الأجنبية)" },
      { en: "Power of attorney (we provide the template)", ar: "وكالة شرعية (نوفر النموذج)" },
      { en: "Brief description of the planned activity", ar: "وصف موجز للنشاط المخطط له" },
    ],
    deliverables: [
      { en: "MISA license + Commercial Registration", ar: "ترخيص الاستثمار + السجل التجاري" },
      { en: "All government platform accounts, activated", ar: "جميع حسابات المنصات الحكومية مفعّلة" },
      { en: "First-year compliance calendar", ar: "تقويم الامتثال للسنة الأولى" },
    ],
    timeline: { en: "4-8 weeks depending on activity", ar: "4-8 أسابيع حسب النشاط" },
    bestFor: { en: "Foreign investors & regional expansions", ar: "المستثمرون الأجانب والتوسعات الإقليمية" },
    supportType: { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
    faqs: [
      {
        q: { en: "Can foreigners own 100% of a Saudi company?", ar: "هل يمكن للأجانب تملك شركة سعودية بنسبة 100%؟" },
        a: { en: "Yes — most commercial and service activities allow full foreign ownership under a MISA license. Some activities require a Saudi partner or higher capital; we confirm this in the first consultation.", ar: "نعم — معظم الأنشطة التجارية والخدمية تتيح الملكية الأجنبية الكاملة بترخيص من وزارة الاستثمار. بعض الأنشطة تتطلب شريكًا سعوديًا أو رأس مال أعلى، ونؤكد ذلك في الاستشارة الأولى." },
      },
      {
        q: { en: "Do I need to visit Saudi Arabia to incorporate?", ar: "هل أحتاج لزيارة السعودية لإتمام التأسيس؟" },
        a: { en: "Most steps can be completed remotely with a power of attorney. Bank account opening may require one short visit depending on the bank.", ar: "معظم الخطوات تتم عن بُعد بوكالة شرعية. فتح الحساب البنكي قد يتطلب زيارة قصيرة واحدة حسب البنك." },
      },
      {
        q: { en: "What is the minimum capital?", ar: "ما هو الحد الأدنى لرأس المال؟" },
        a: { en: "It varies by activity. Many service activities have no formal minimum, while trading entities typically require higher declared capital.", ar: "يختلف حسب النشاط. كثير من الأنشطة الخدمية بلا حد أدنى رسمي، بينما تتطلب أنشطة التجارة رأس مال معلنًا أعلى." },
      },
    ],
  },
  {
    slug: "government-platform-management",
    category: "business-support",
    icon: "landmark",
    featured: true,
    title: { en: "Government Platform Management", ar: "إدارة المنصات الحكومية" },
    excerpt: {
      en: "Annual management for Qiwa, Muqeem, Absher Business, GOSI, ZATCA, Mudad, and renewal calendars.",
      ar: "إدارة سنوية لقوى ومقيم وأبشر أعمال والتأمينات وزاتكا ومدد وتقويمات التجديد.",
    },
    overview: [
      {
        en: "After your company is formed, the real operational risk is missing a renewal, payroll filing, iqama date, tax return, or platform notice. We manage the government-platform calendar for you through one accountable Saudi team.",
        ar: "بعد تأسيس الشركة، الخطر التشغيلي الحقيقي هو تفويت تجديد أو رواتب أو إقامة أو إقرار ضريبي أو إشعار منصة. ندير لك تقويم المنصات الحكومية عبر فريق سعودي واحد مسؤول.",
      },
      {
        en: "Plans start from SAR 9,600/year and scale by employee count and platform scope. Each client gets a dedicated representative, due-date monitoring, and a no-late-fine guarantee when delays are caused by us after receiving documents on time.",
        ar: "تبدأ الباقات من 9,600 ر.س سنوياً وتتوسع حسب عدد الموظفين ونطاق المنصات. لكل عميل مندوب مخصص، ومتابعة للمواعيد، وضمان بلا غرامات عند حدوث تأخير بسببنا بعد استلام المستندات في وقتها.",
      },
    ],
    audience: [
      { en: "New Saudi entities that want to stay compliant after setup", ar: "الكيانات السعودية الجديدة التي تريد الحفاظ على الامتثال بعد التأسيس" },
      { en: "Founders who do not want to manage Qiwa, Muqeem, ZATCA, and GOSI manually", ar: "المؤسسون الذين لا يريدون متابعة قوى ومقيم وزاتكا والتأمينات يدوياً" },
      { en: "Operating companies with payroll, iqama, and renewal obligations", ar: "الشركات العاملة التي لديها رواتب وإقامات وتجديدات" },
    ],
    benefits: [
      { en: "No-late-fine guarantee for delays caused by our team", ar: "ضمان بلا غرامات عند حدوث التأخير من طرفنا" },
      { en: "One-business-hour response through a dedicated representative", ar: "رد خلال ساعة عمل عبر مندوب مخصص" },
      { en: "Due-date monitoring before service suspension risk", ar: "مراقبة الاستحقاقات قبل خطر إيقاف الخدمات" },
      { en: "Annual plans with clear employee and branch add-ons", ar: "باقات سنوية واضحة مع إضافات للموظفين والفروع" },
    ],
    steps: [
      {
        title: { en: "Platform audit", ar: "تدقيق المنصات" },
        text: { en: "We review current access, expiries, risks, and missing registrations.", ar: "نراجع الصلاحيات الحالية والانتهاءات والمخاطر والتسجيلات الناقصة." },
      },
      {
        title: { en: "Calendar setup", ar: "إعداد التقويم" },
        text: { en: "All renewals, filings, payroll dates, and iqama dates are mapped into a monitored calendar.", ar: "نربط كل التجديدات والإقرارات والرواتب والإقامات بتقويم متابعة." },
      },
      {
        title: { en: "Monthly operation", ar: "التشغيل الشهري" },
        text: { en: "Your representative follows up transactions, filings, alerts, and required documents.", ar: "يتابع مندوبك المعاملات والإقرارات والتنبيهات والمستندات المطلوبة." },
      },
      {
        title: { en: "Reporting", ar: "التقارير" },
        text: { en: "You receive clear status updates so management knows what is complete and what needs action.", ar: "تصلك تحديثات واضحة حتى تعرف الإدارة ما تم وما يحتاج إجراء." },
      },
    ],
    requirements: [
      { en: "Platform access or authorization for Qiwa, Muqeem, ZATCA, GOSI, and related portals", ar: "صلاحيات أو تفويض للمنصات مثل قوى ومقيم وزاتكا والتأمينات" },
      { en: "CR, Chamber, national address, and authorized signatory details", ar: "السجل والغرفة والعنوان الوطني وبيانات المفوض" },
      { en: "Employee list and current renewal calendar where available", ar: "قائمة الموظفين وتقويم التجديدات الحالي إن وجد" },
    ],
    deliverables: [
      { en: "Managed government-platform calendar", ar: "تقويم مُدار للمنصات الحكومية" },
      { en: "Dedicated representative and status updates", ar: "مندوب مخصص وتحديثات حالة" },
      { en: "Renewal, payroll, iqama, and filing follow-up", ar: "متابعة التجديدات والرواتب والإقامات والإقرارات" },
    ],
    timeline: { en: "Onboarding in 3-5 business days", ar: "التهيئة خلال 3-5 أيام عمل" },
    bestFor: { en: "Saudi entities after setup", ar: "الكيانات السعودية بعد التأسيس" },
    supportType: { en: "Annual managed service", ar: "خدمة إدارة سنوية" },
    faqs: [
      {
        q: { en: "Which platforms do you manage?", ar: "ما المنصات التي تديرونها؟" },
        a: { en: "Scope depends on the plan, but commonly includes Qiwa, Muqeem, Absher Business, GOSI, ZATCA, Mudad, Etimad, Saber, and related renewal calendars.", ar: "يعتمد النطاق على الباقة، لكنه يشمل عادة قوى، مقيم، أبشر أعمال، التأمينات، زاتكا، مدد، اعتماد، سابر وتقويمات التجديد المرتبطة." },
      },
      {
        q: { en: "Do you cover government fees?", ar: "هل تشمل الخدمة الرسوم الحكومية؟" },
        a: { en: "No. Government fees are paid at cost by the client. Our fee covers management, follow-up, alerts, and execution support.", ar: "لا. الرسوم الحكومية تُدفع بالتكلفة الفعلية من العميل. رسومنا تغطي الإدارة والمتابعة والتنبيهات ودعم التنفيذ." },
      },
    ],
  },
  {
    slug: "saudi-partners",
    category: "business-support",
    icon: "handshake",
    title: { en: "Saudi Partners & Local Sponsorship", ar: "الشركاء السعوديون والكفالة المحلية" },
    excerpt: {
      en: "Vetted local partners and agency structures for activities that require Saudi participation.",
      ar: "شركاء محليون موثوقون وهياكل وكالة للأنشطة التي تتطلب مشاركة سعودية.",
    },
    overview: [
      {
        en: "Certain regulated activities still require Saudi participation or a local service agent. We introduce vetted partners, structure the relationship with clear legal agreements, and protect your operational control and profit rights.",
        ar: "بعض الأنشطة المنظمة لا تزال تتطلب مشاركة سعودية أو وكيل خدمات محليًا. نقدم لك شركاء موثوقين بعد فحص دقيق، ونهيكل العلاقة باتفاقيات قانونية واضحة تحمي سيطرتك التشغيلية وحقوقك في الأرباح.",
      },
    ],
    audience: [
      { en: "Companies in activities requiring local participation", ar: "الشركات في الأنشطة التي تتطلب مشاركة محلية" },
      { en: "Firms bidding on contracts that favor local entities", ar: "الشركات المتقدمة لعقود تفضّل الكيانات المحلية" },
      { en: "Investors who want a trusted local operating partner", ar: "المستثمرون الباحثون عن شريك تشغيل محلي موثوق" },
    ],
    benefits: [
      { en: "Partners vetted for reputation and financial standing", ar: "شركاء مفحوصون من حيث السمعة والملاءة المالية" },
      { en: "Side agreements drafted to protect your interests", ar: "اتفاقيات جانبية تصاغ لحماية مصالحك" },
      { en: "Clear governance and exit clauses from day one", ar: "حوكمة واضحة وبنود خروج منذ اليوم الأول" },
      { en: "Ongoing relationship management", ar: "إدارة مستمرة للعلاقة مع الشريك" },
    ],
    steps: [
      { title: { en: "Requirement analysis", ar: "تحليل المتطلبات" }, text: { en: "We confirm whether your activity truly requires local participation.", ar: "نتأكد مما إذا كان نشاطك يتطلب فعلًا مشاركة محلية." } },
      { title: { en: "Partner shortlist", ar: "قائمة الشركاء المرشحين" }, text: { en: "Curated introductions matched to your sector and size.", ar: "ترشيحات منتقاة تناسب قطاعك وحجمك." } },
      { title: { en: "Structuring & agreements", ar: "الهيكلة والاتفاقيات" }, text: { en: "Shareholder and operating agreements drafted and notarized.", ar: "صياغة وتوثيق اتفاقيات الشركاء والتشغيل." } },
      { title: { en: "Incorporation & handover", ar: "التأسيس والتسليم" }, text: { en: "Entity setup completed with the agreed structure.", ar: "إتمام تأسيس الكيان وفق الهيكل المتفق عليه." } },
    ],
    requirements: [
      { en: "Activity description and target contracts", ar: "وصف النشاط والعقود المستهدفة" },
      { en: "Company profile and financials", ar: "ملف تعريفي للشركة وقوائمها المالية" },
      { en: "Preferred governance terms", ar: "شروط الحوكمة المفضلة لديك" },
    ],
    deliverables: [
      { en: "Signed partnership / agency agreements", ar: "اتفاقيات شراكة / وكالة موقعة" },
      { en: "Registered entity with the agreed structure", ar: "كيان مسجل وفق الهيكل المتفق عليه" },
      { en: "Governance handbook", ar: "دليل الحوكمة" },
    ],
    timeline: { en: "3–8 weeks", ar: "3–8 أسابيع" },
    bestFor: { en: "Regulated activities & government contracting", ar: "الأنشطة المنظمة والتعاقدات الحكومية" },
    supportType: { en: "Legal + commercial advisory", ar: "استشارات قانونية وتجارية" },
    faqs: [
      {
        q: { en: "Will the local partner control my company?", ar: "هل سيتحكم الشريك المحلي في شركتي؟" },
        a: { en: "No. We structure voting rights, management authority, and profit distribution contractually so operational control stays with you.", ar: "لا. نهيكل حقوق التصويت وصلاحيات الإدارة وتوزيع الأرباح تعاقديًا بحيث تبقى السيطرة التشغيلية معك." },
      },
      {
        q: { en: "Can I replace the partner later?", ar: "هل يمكن استبدال الشريك لاحقًا؟" },
        a: { en: "Yes — exit and transfer clauses are built into the agreements from the start.", ar: "نعم — بنود الخروج ونقل الحصص مدمجة في الاتفاقيات منذ البداية." },
      },
    ],
  },
  {
    slug: "consultation",
    category: "business-support",
    icon: "messages-square",
    title: { en: "Business Consultation", ar: "الاستشارات التجارية" },
    excerpt: {
      en: "Market-entry strategy, licensing pathways, and cost planning with senior consultants.",
      ar: "استراتيجية دخول السوق ومسارات الترخيص وتخطيط التكاليف مع مستشارين خبراء.",
    },
    overview: [
      {
        en: "Before you commit capital, get a clear picture: which license fits your activity, what it costs to operate, which cities and structures make sense, and what the realistic timeline looks like. Sessions are practical and end with a written action plan.",
        ar: "قبل أن تلتزم برأس المال، احصل على صورة واضحة: أي ترخيص يناسب نشاطك، وكم تكلفة التشغيل، وأي المدن والهياكل أنسب، وما الجدول الزمني الواقعي. الجلسات عملية وتنتهي بخطة عمل مكتوبة.",
      },
    ],
    audience: [
      { en: "Investors evaluating the Saudi market", ar: "المستثمرون الذين يقيّمون السوق السعودي" },
      { en: "Companies choosing between license types", ar: "الشركات المفاضلة بين أنواع التراخيص" },
      { en: "Founders preparing board or investor presentations", ar: "المؤسسون الذين يعدّون عروضًا للمستثمرين أو مجالس الإدارة" },
    ],
    benefits: [
      { en: "Senior consultants, not junior researchers", ar: "مستشارون خبراء، وليسوا باحثين مبتدئين" },
      { en: "Realistic cost & timeline models", ar: "نماذج واقعية للتكاليف والجداول الزمنية" },
      { en: "Written action plan after every session", ar: "خطة عمل مكتوبة بعد كل جلسة" },
      { en: "Fee credited toward setup packages", ar: "تُخصم الرسوم من باقات التأسيس لاحقًا" },
    ],
    steps: [
      { title: { en: "Discovery call", ar: "مكالمة تعريفية" }, text: { en: "A free 20-minute call to scope your questions.", ar: "مكالمة مجانية 20 دقيقة لتحديد نطاق أسئلتك." } },
      { title: { en: "Deep-dive session", ar: "جلسة معمّقة" }, text: { en: "A structured 90-minute consultation with a senior advisor.", ar: "استشارة منظمة لمدة 90 دقيقة مع مستشار خبير." } },
      { title: { en: "Written roadmap", ar: "خارطة طريق مكتوبة" }, text: { en: "Licensing pathway, cost model, and step-by-step plan within 3 days.", ar: "مسار الترخيص ونموذج التكاليف وخطة تفصيلية خلال 3 أيام." } },
    ],
    requirements: [
      { en: "Brief about your business and goals", ar: "نبذة عن نشاطك وأهدافك" },
      { en: "Target launch window", ar: "الإطار الزمني المستهدف للانطلاق" },
    ],
    deliverables: [
      { en: "Market-entry roadmap document", ar: "وثيقة خارطة طريق دخول السوق" },
      { en: "Cost & timeline model", ar: "نموذج التكاليف والجدول الزمني" },
      { en: "Recommended structure & license type", ar: "الهيكل ونوع الترخيص الموصى بهما" },
    ],
    timeline: { en: "3–5 business days", ar: "3–5 أيام عمل" },
    bestFor: { en: "Pre-investment decision making", ar: "اتخاذ القرار قبل الاستثمار" },
    supportType: { en: "Senior advisory", ar: "استشارة عليا" },
    faqs: [
      {
        q: { en: "Is the first call really free?", ar: "هل المكالمة الأولى مجانية فعلًا؟" },
        a: { en: "Yes — the 20-minute discovery call is free and without obligation.", ar: "نعم — المكالمة التعريفية لمدة 20 دقيقة مجانية ودون أي التزام." },
      },
      {
        q: { en: "Can sessions be held in English?", ar: "هل تُعقد الجلسات بالإنجليزية؟" },
        a: { en: "Sessions are available in Arabic or English, including all written deliverables.", ar: "الجلسات متاحة بالعربية أو الإنجليزية، وكذلك جميع المخرجات المكتوبة." },
      },
    ],
  },
  {
    slug: "translation-services",
    category: "business-support",
    icon: "languages",
    title: { en: "Certified Translation Services", ar: "خدمات الترجمة المعتمدة" },
    excerpt: {
      en: "Certified Arabic ⇄ English translation for contracts, licenses, and government filings.",
      ar: "ترجمة معتمدة عربي ⇄ إنجليزي للعقود والتراخيص والمعاملات الحكومية.",
    },
    overview: [
      {
        en: "Saudi authorities require Arabic documentation for most filings. Our certified translators handle legal, financial, and technical documents with terminology that government reviewers expect — reducing rejection and resubmission cycles.",
        ar: "تشترط الجهات السعودية مستندات باللغة العربية لمعظم المعاملات. يتولى مترجمونا المعتمدون المستندات القانونية والمالية والفنية بمصطلحات تتوافق مع ما تتوقعه الجهات الحكومية — مما يقلل دورات الرفض وإعادة التقديم.",
      },
    ],
    audience: [
      { en: "Foreign companies filing documents with Saudi authorities", ar: "الشركات الأجنبية التي تقدم مستندات للجهات السعودية" },
      { en: "Law firms and auditors needing certified output", ar: "مكاتب المحاماة والمراجعون الذين يحتاجون مخرجات معتمدة" },
      { en: "Individuals attesting personal documents", ar: "الأفراد الذين يوثقون مستندات شخصية" },
    ],
    benefits: [
      { en: "Certified and accepted by Saudi authorities", ar: "ترجمة معتمدة ومقبولة لدى الجهات السعودية" },
      { en: "Legal & financial terminology specialists", ar: "متخصصون في المصطلحات القانونية والمالية" },
      { en: "Fast turnaround with express options", ar: "إنجاز سريع مع خيارات مستعجلة" },
      { en: "Formatting preserved to match originals", ar: "الحفاظ على التنسيق مطابقًا للأصل" },
    ],
    steps: [
      { title: { en: "Document review", ar: "مراجعة المستندات" }, text: { en: "We confirm certification requirements and quote per page.", ar: "نؤكد متطلبات الاعتماد ونقدم عرض سعر لكل صفحة." } },
      { title: { en: "Translation & QA", ar: "الترجمة والمراجعة" }, text: { en: "Translation by specialists, reviewed by a second linguist.", ar: "ترجمة بواسطة متخصصين ومراجعة من مدقق ثانٍ." } },
      { title: { en: "Certification & delivery", ar: "الاعتماد والتسليم" }, text: { en: "Stamped, certified copies delivered digitally or in print.", ar: "نسخ معتمدة ومختومة تُسلّم رقميًا أو ورقيًا." } },
    ],
    requirements: [
      { en: "Clear scans of the original documents", ar: "نسخ ممسوحة واضحة من المستندات الأصلية" },
      { en: "Purpose of submission (which authority)", ar: "الغرض من التقديم (الجهة المستهدفة)" },
    ],
    deliverables: [
      { en: "Certified translated documents", ar: "مستندات مترجمة معتمدة" },
      { en: "Digital + printed certified copies", ar: "نسخ معتمدة رقمية وورقية" },
    ],
    timeline: { en: "1–3 business days", ar: "1–3 أيام عمل" },
    bestFor: { en: "Government filings & legal documents", ar: "المعاملات الحكومية والمستندات القانونية" },
    supportType: { en: "Certified translators", ar: "مترجمون معتمدون" },
    faqs: [
      {
        q: { en: "Are translations accepted by all ministries?", ar: "هل الترجمة مقبولة لدى جميع الوزارات؟" },
        a: { en: "Yes — we issue certified translations that meet the requirements of Saudi ministries, courts, and banks.", ar: "نعم — نصدر ترجمات معتمدة تستوفي متطلبات الوزارات والمحاكم والبنوك السعودية." },
      },
    ],
  },
  {
    slug: "free-zones",
    category: "business-support",
    icon: "globe-2",
    title: { en: "Special Economic Zones in KSA", ar: "المناطق الاقتصادية الخاصة" },
    excerpt: {
      en: "Compare SEZs and logistics zones — incentives, eligibility, and setup support.",
      ar: "قارن بين المناطق الاقتصادية الخاصة والمناطق اللوجستية — الحوافز والأهلية ودعم التأسيس.",
    },
    overview: [
      {
        en: "Saudi Arabia's Special Economic Zones — including KAEC, Jazan, Ras Al-Khair, Cloud Computing SEZ, and the Riyadh Integrated Logistics Zone — offer tax incentives, customs advantages, and streamlined setup for qualifying activities. We assess your eligibility and handle zone registration end to end.",
        ar: "تقدم المناطق الاقتصادية الخاصة في السعودية — ومنها مدينة الملك عبدالله الاقتصادية وجازان ورأس الخير ومنطقة الحوسبة السحابية والمنطقة اللوجستية المتكاملة بالرياض — حوافز ضريبية ومزايا جمركية وإجراءات تأسيس مبسطة للأنشطة المؤهلة. نقيّم أهليتك وندير التسجيل في المنطقة بالكامل.",
      },
    ],
    audience: [
      { en: "Manufacturers and logistics operators", ar: "المصنّعون ومشغلو الخدمات اللوجستية" },
      { en: "Cloud & technology companies", ar: "شركات التقنية والحوسبة السحابية" },
      { en: "Re-export and distribution businesses", ar: "أعمال إعادة التصدير والتوزيع" },
    ],
    benefits: [
      { en: "Reduced corporate tax rates for qualifying entities", ar: "معدلات ضريبية مخفضة للكيانات المؤهلة" },
      { en: "Customs duty deferral or exemption", ar: "تأجيل أو إعفاء من الرسوم الجمركية" },
      { en: "Simplified employment rules in some zones", ar: "قواعد توظيف ميسّرة في بعض المناطق" },
      { en: "Side-by-side zone comparison before you commit", ar: "مقارنة تفصيلية بين المناطق قبل الالتزام" },
    ],
    steps: [
      { title: { en: "Eligibility assessment", ar: "تقييم الأهلية" }, text: { en: "We map your activity to qualifying zones and incentives.", ar: "نطابق نشاطك مع المناطق المؤهلة وحوافزها." } },
      { title: { en: "Zone selection", ar: "اختيار المنطقة" }, text: { en: "Cost-benefit comparison across shortlisted zones.", ar: "مقارنة التكلفة والعائد بين المناطق المرشحة." } },
      { title: { en: "Application & licensing", ar: "التقديم والترخيص" }, text: { en: "Full application package submitted to the zone authority.", ar: "تقديم ملف الطلب كاملًا لهيئة المنطقة." } },
      { title: { en: "Operational setup", ar: "التجهيز التشغيلي" }, text: { en: "Facilities, customs registration, and workforce onboarding.", ar: "المرافق والتسجيل الجمركي وتهيئة الكوادر." } },
    ],
    requirements: [
      { en: "Business plan and activity description", ar: "خطة العمل ووصف النشاط" },
      { en: "Parent company documents", ar: "مستندات الشركة الأم" },
      { en: "Projected investment and headcount", ar: "حجم الاستثمار والتوظيف المتوقع" },
    ],
    deliverables: [
      { en: "Zone comparison report", ar: "تقرير مقارنة المناطق" },
      { en: "Zone license and registrations", ar: "ترخيص المنطقة والتسجيلات" },
    ],
    timeline: { en: "4–10 weeks", ar: "4–10 أسابيع" },
    bestFor: { en: "Industrial, logistics & cloud activities", ar: "الأنشطة الصناعية واللوجستية والسحابية" },
    supportType: { en: "Advisory + execution", ar: "استشارة وتنفيذ" },
    faqs: [
      {
        q: { en: "Are SEZ entities limited to working inside the zone?", ar: "هل عمل كيانات المناطق الخاصة محصور داخل المنطقة؟" },
        a: { en: "Zone entities enjoy incentives on qualifying activities; selling into the mainland may have specific customs and tax treatment, which we map out for you.", ar: "تتمتع كيانات المناطق بالحوافز على الأنشطة المؤهلة؛ أما البيع داخل السوق المحلي فقد يخضع لمعاملة جمركية وضريبية خاصة نوضحها لك بالتفصيل." },
      },
    ],
  },
  // ─────────────────────────── Residency & Visas ───────────────────────────
  {
    slug: "premium-residency",
    category: "residency-visas",
    icon: "badge-check",
    featured: true,
    title: { en: "Premium Residency (Saudi Green Card)", ar: "الإقامة المميزة" },
    excerpt: {
      en: "Live, work, and own property in Saudi Arabia without a sponsor.",
      ar: "أقم واعمل وتملّك العقار في السعودية دون كفيل.",
    },
    overview: [
      {
        en: "Premium Residency grants you and your family long-term residence without a sponsor — with the right to own real estate, run businesses, and move freely in and out of the Kingdom. We assess which track fits you (Limited, Unlimited, Investor, Talent, or Real Estate) and manage the application end to end.",
        ar: "تمنحك الإقامة المميزة وعائلتك إقامة طويلة الأمد دون كفيل — مع حق تملك العقار وإدارة الأعمال والتنقل بحرية من وإلى المملكة. نحدد المسار الأنسب لك (محدودة، غير محدودة، مستثمر، موهبة، أو مالك عقار) وندير الطلب بالكامل.",
      },
    ],
    audience: [
      { en: "Investors and business owners", ar: "المستثمرون وأصحاب الأعمال" },
      { en: "Senior professionals and specialized talent", ar: "الكفاءات والمواهب المتخصصة" },
      { en: "Real-estate owners in the Kingdom", ar: "ملاك العقارات في المملكة" },
    ],
    benefits: [
      { en: "No sponsor required — full personal independence", ar: "بدون كفيل — استقلالية كاملة" },
      { en: "Family included (spouse, children, parents)", ar: "تشمل العائلة (الزوج/الزوجة والأبناء والوالدان)" },
      { en: "Right to own property and run businesses", ar: "حق تملك العقار وإدارة الأعمال" },
      { en: "Eligibility check before you pay any fees", ar: "فحص الأهلية قبل دفع أي رسوم" },
    ],
    steps: [
      { title: { en: "Eligibility assessment", ar: "تقييم الأهلية" }, text: { en: "We confirm the best track and required evidence.", ar: "نحدد المسار الأنسب والمستندات المطلوبة." } },
      { title: { en: "File preparation", ar: "تجهيز الملف" }, text: { en: "Financial, professional, and legal documents compiled and attested.", ar: "تجميع وتوثيق المستندات المالية والمهنية والقانونية." } },
      { title: { en: "Application & follow-up", ar: "التقديم والمتابعة" }, text: { en: "Submission through the Premium Residency Center with active follow-up.", ar: "التقديم عبر مركز الإقامة المميزة مع متابعة نشطة." } },
      { title: { en: "Approval & issuance", ar: "الموافقة والإصدار" }, text: { en: "Fee payment, biometric procedures, and residency issuance.", ar: "سداد الرسوم والإجراءات الحيوية وإصدار الإقامة." } },
    ],
    requirements: [
      { en: "Valid passport and clean criminal record", ar: "جواز ساري وصحيفة خالية من السوابق" },
      { en: "Proof of financial solvency", ar: "إثبات الملاءة المالية" },
      { en: "Health insurance and medical report", ar: "تأمين صحي وتقرير طبي" },
    ],
    deliverables: [
      { en: "Premium Residency approval and ID", ar: "موافقة الإقامة المميزة والهوية" },
      { en: "Family residencies (where applicable)", ar: "إقامات أفراد العائلة (إن وجدت)" },
    ],
    timeline: { en: "4–12 weeks", ar: "4–12 أسبوعًا" },
    bestFor: { en: "Investors, talent & property owners", ar: "المستثمرون والمواهب وملاك العقار" },
    supportType: { en: "Full case management", ar: "إدارة كاملة للملف" },
    faqs: [
      {
        q: { en: "What is the cost of Premium Residency?", ar: "كم تكلفة الإقامة المميزة؟" },
        a: { en: "The Limited track is renewable annually (SAR 100,000/year) and the Unlimited track is a one-time SAR 800,000. Investor, Talent, and Real Estate tracks have their own criteria — we confirm current fees during assessment.", ar: "المسار المحدود يُجدد سنويًا (100,000 ر.س/سنة)، والمسار غير المحدود برسوم 800,000 ر.س لمرة واحدة. ولمسارات المستثمر والموهبة والعقار معاييرها الخاصة — نؤكد الرسوم المحدثة أثناء التقييم." },
      },
      {
        q: { en: "Does Premium Residency replace a work visa?", ar: "هل تغني الإقامة المميزة عن تأشيرة العمل؟" },
        a: { en: "Yes — holders can work for any employer or run their own business without sponsor transfer.", ar: "نعم — يمكن لحاملها العمل لدى أي جهة أو إدارة أعماله الخاصة دون نقل كفالة." },
      },
    ],
  },
  {
    slug: "business-incubators",
    category: "residency-visas",
    icon: "rocket",
    title: { en: "Business Incubators & Entrepreneur License", ar: "حاضنات الأعمال ورخصة ريادة الأعمال" },
    excerpt: {
      en: "MISA entrepreneur licensing and accredited incubator access for startups.",
      ar: "رخصة ريادة الأعمال من وزارة الاستثمار والانضمام للحاضنات المعتمدة.",
    },
    overview: [
      {
        en: "The MISA Entrepreneur License lets foreign founders incorporate in Saudi Arabia with reduced requirements — backed by an accredited incubator or university endorsement. We secure the endorsement, the license, and the founder's residency in one streamlined track.",
        ar: "تتيح رخصة ريادة الأعمال من وزارة الاستثمار للمؤسسين الأجانب التأسيس في السعودية بمتطلبات مخففة — بدعم من حاضنة معتمدة أو جهة جامعية. نؤمّن لك التزكية والرخصة وإقامة المؤسس في مسار واحد مبسّط.",
      },
    ],
    audience: [
      { en: "Foreign startup founders", ar: "مؤسسو الشركات الناشئة الأجانب" },
      { en: "Tech companies joining Saudi accelerators", ar: "شركات التقنية المنضمة للمسرعات السعودية" },
      { en: "Venture-backed teams relocating to Riyadh", ar: "الفرق الممولة المنتقلة إلى الرياض" },
    ],
    benefits: [
      { en: "Lower capital requirements than standard licenses", ar: "متطلبات رأس مال أقل من الرخص القياسية" },
      { en: "Founder residency and family visas", ar: "إقامة المؤسس وتأشيرات العائلة" },
      { en: "Introductions to accredited incubators & VCs", ar: "تعريف بالحاضنات المعتمدة والمستثمرين" },
      { en: "Path to scale into a full MISA license", ar: "مسار للترقية لاحقًا إلى رخصة استثمار كاملة" },
    ],
    steps: [
      { title: { en: "Startup assessment", ar: "تقييم المشروع" }, text: { en: "We review your venture's fit for the entrepreneur track.", ar: "نراجع مدى ملاءمة مشروعك لمسار ريادة الأعمال." } },
      { title: { en: "Incubator endorsement", ar: "تزكية الحاضنة" }, text: { en: "We secure support from an accredited incubator or VC.", ar: "نؤمّن دعمًا من حاضنة معتمدة أو صندوق استثمار جريء." } },
      { title: { en: "License & incorporation", ar: "الرخصة والتأسيس" }, text: { en: "Entrepreneur license, CR, and government registrations.", ar: "رخصة ريادة الأعمال والسجل التجاري والتسجيلات الحكومية." } },
      { title: { en: "Founder residency", ar: "إقامة المؤسس" }, text: { en: "Iqama issuance for founders and early team.", ar: "إصدار الإقامة للمؤسسين والفريق المبكر." } },
    ],
    requirements: [
      { en: "Pitch deck or business plan", ar: "عرض تقديمي أو خطة عمل" },
      { en: "Founder passports and CVs", ar: "جوازات وسير ذاتية للمؤسسين" },
      { en: "Evidence of traction or funding (helpful, not mandatory)", ar: "إثبات نمو أو تمويل (مفيد وليس إلزاميًا)" },
    ],
    deliverables: [
      { en: "Entrepreneur license + CR", ar: "رخصة ريادة الأعمال + السجل التجاري" },
      { en: "Incubator endorsement letter", ar: "خطاب تزكية من الحاضنة" },
      { en: "Founder iqama", ar: "إقامة المؤسس" },
    ],
    timeline: { en: "3–8 weeks", ar: "3–8 أسابيع" },
    bestFor: { en: "Early-stage and venture-backed startups", ar: "الشركات الناشئة في مراحلها المبكرة" },
    supportType: { en: "Startup-specialist advisors", ar: "مستشارون متخصصون في الشركات الناشئة" },
    faqs: [
      {
        q: { en: "Do I need existing revenue to qualify?", ar: "هل أحتاج إيرادات قائمة للتأهل؟" },
        a: { en: "No — a credible business plan with an incubator endorsement is typically sufficient for early-stage ventures.", ar: "لا — خطة عمل مقنعة مع تزكية من حاضنة معتمدة تكفي عادة للمشاريع في مراحلها المبكرة." },
      },
    ],
  },
  {
    slug: "visa-issuance",
    category: "residency-visas",
    icon: "stamp",
    title: { en: "Visa Issuance & Iqama Services", ar: "إصدار التأشيرات وخدمات الإقامة" },
    excerpt: {
      en: "Work visas, employee iqamas, family visas, and renewals — handled without the queues.",
      ar: "تأشيرات العمل وإقامات الموظفين والتأشيرات العائلية والتجديدات — دون طوابير.",
    },
    overview: [
      {
        en: "From block-visa allocation on Qiwa to iqama issuance on Muqeem and family visit visas, our PRO team manages the full visa lifecycle for your workforce — including renewals, profession changes, and exit/re-entry permits.",
        ar: "من تخصيص التأشيرات الجماعية في قوى إلى إصدار الإقامات في مقيم وتأشيرات الزيارة العائلية، يدير فريق العلاقات الحكومية لدينا دورة التأشيرات كاملة لموظفيك — بما يشمل التجديد وتغيير المهنة وتصاريح الخروج والعودة.",
      },
    ],
    audience: [
      { en: "Companies hiring international talent", ar: "الشركات التي توظف كفاءات دولية" },
      { en: "HR teams managing large workforces", ar: "فرق الموارد البشرية التي تدير قوى عاملة كبيرة" },
      { en: "Employees bringing families to the Kingdom", ar: "الموظفون المستقدمون لعائلاتهم" },
    ],
    benefits: [
      { en: "Block visa strategy aligned with Saudization bands", ar: "استراتيجية تأشيرات متوافقة مع نطاقات السعودة" },
      { en: "End-to-end processing on Qiwa, Muqeem & Absher", ar: "معالجة كاملة عبر قوى ومقيم وأبشر" },
      { en: "Renewal alerts before any document expires", ar: "تنبيهات تجديد قبل انتهاء أي مستند" },
      { en: "Transparent per-transaction pricing", ar: "تسعير شفاف لكل معاملة" },
    ],
    steps: [
      { title: { en: "Workforce plan", ar: "خطة القوى العاملة" }, text: { en: "We map roles to professions and visa quotas.", ar: "نطابق الوظائف مع المهن وحصص التأشيرات." } },
      { title: { en: "Block visa request", ar: "طلب التأشيرات الجماعية" }, text: { en: "Filed and defended on Qiwa with supporting evidence.", ar: "تقديم الطلب ومتابعته في قوى بالمستندات الداعمة." } },
      { title: { en: "Embassy & arrival", ar: "السفارة والوصول" }, text: { en: "Visa stamping support and arrival coordination.", ar: "دعم ختم التأشيرة وتنسيق الوصول." } },
      { title: { en: "Iqama & onboarding", ar: "الإقامة والتفعيل" }, text: { en: "Medical, iqama issuance, GOSI registration, and bank letters.", ar: "الفحص الطبي وإصدار الإقامة وتسجيل التأمينات وخطابات البنك." } },
    ],
    requirements: [
      { en: "Valid CR and Qiwa account", ar: "سجل تجاري ساري وحساب قوى" },
      { en: "Employee passports and attested certificates", ar: "جوازات الموظفين والشهادات المصدقة" },
      { en: "Signed employment contracts", ar: "عقود عمل موقعة" },
    ],
    deliverables: [
      { en: "Approved visas and issued iqamas", ar: "تأشيرات معتمدة وإقامات صادرة" },
      { en: "Compliance tracker for expiries", ar: "متابع امتثال لتواريخ الانتهاء" },
    ],
    timeline: { en: "2–6 weeks per batch", ar: "2–6 أسابيع لكل دفعة" },
    bestFor: { en: "Growing teams & HR departments", ar: "الفرق المتنامية وإدارات الموارد البشرية" },
    supportType: { en: "Dedicated PRO team", ar: "فريق علاقات حكومية مخصص" },
    faqs: [
      {
        q: { en: "How many visas can my company get?", ar: "كم عدد التأشيرات المتاحة لشركتي؟" },
        a: { en: "Quotas depend on your Saudization band, activity, and company size on Qiwa. We model your quota before filing.", ar: "تعتمد الحصص على نطاق السعودة والنشاط وحجم الشركة في قوى. نحسب حصتك المتوقعة قبل التقديم." },
      },
    ],
  },
  // ─────────────────────────── Office Solutions ───────────────────────────
  {
    slug: "virtual-address",
    category: "office-solutions",
    icon: "map-pin",
    title: { en: "Virtual Office Address", ar: "العنوان الوطني الافتراضي" },
    excerpt: {
      en: "A compliant national address for your CR — with mail handling and call answering.",
      ar: "عنوان وطني نظامي لسجلك التجاري — مع إدارة البريد والرد على المكالمات.",
    },
    overview: [
      {
        en: "Every Saudi entity needs a registered national address. Our virtual office packages give you a prestigious Riyadh address accepted for CR registration and municipality licensing, plus mail handling and bilingual call answering — at a fraction of the cost of a physical lease.",
        ar: "كل كيان سعودي يحتاج عنوانًا وطنيًا مسجلًا. توفر باقاتنا عنوانًا مرموقًا في الرياض مقبولًا لتسجيل السجل التجاري ورخص البلدية، مع إدارة البريد والرد على المكالمات بلغتين — بجزء يسير من تكلفة الإيجار الفعلي.",
      },
    ],
    audience: [
      { en: "New entities needing a registered address", ar: "الكيانات الجديدة التي تحتاج عنوانًا مسجلًا" },
      { en: "Remote-first companies", ar: "الشركات العاملة عن بُعد" },
      { en: "Foreign companies testing the market", ar: "الشركات الأجنبية التي تختبر السوق" },
    ],
    benefits: [
      { en: "Accepted for CR and municipality licensing", ar: "مقبول للسجل التجاري ورخص البلدية" },
      { en: "Prime Riyadh business district address", ar: "عنوان في حي أعمال رئيسي بالرياض" },
      { en: "Mail scanning and forwarding", ar: "مسح البريد وإعادة توجيهه" },
      { en: "Upgrade path to physical offices anytime", ar: "إمكانية الترقية لمكتب فعلي في أي وقت" },
    ],
    steps: [
      { title: { en: "Package selection", ar: "اختيار الباقة" }, text: { en: "Address-only or address + reception services.", ar: "عنوان فقط أو عنوان مع خدمات استقبال." } },
      { title: { en: "Contract & registration", ar: "العقد والتسجيل" }, text: { en: "Lease contract issued and national address registered.", ar: "إصدار العقد وتسجيل العنوان الوطني." } },
      { title: { en: "Activation", ar: "التفعيل" }, text: { en: "Mail and call services live within 48 hours.", ar: "تفعيل خدمات البريد والمكالمات خلال 48 ساعة." } },
    ],
    requirements: [
      { en: "CR copy (or setup in progress with us)", ar: "نسخة من السجل التجاري (أو تأسيس جارٍ معنا)" },
      { en: "Authorized signatory ID", ar: "هوية المفوض بالتوقيع" },
    ],
    deliverables: [
      { en: "Registered national address", ar: "عنوان وطني مسجل" },
      { en: "Attested lease contract", ar: "عقد إيجار موثق" },
    ],
    timeline: { en: "2–5 business days", ar: "2–5 أيام عمل" },
    bestFor: { en: "Startups & lean market entry", ar: "الشركات الناشئة والدخول المرن للسوق" },
    supportType: { en: "Reception + admin support", ar: "استقبال ودعم إداري" },
    faqs: [
      {
        q: { en: "Is a virtual address legal for company registration?", ar: "هل العنوان الافتراضي نظامي لتسجيل الشركات؟" },
        a: { en: "Yes — our addresses come with attested lease contracts accepted by the Ministry of Commerce and municipalities for most activities.", ar: "نعم — عناويننا مرفقة بعقود إيجار موثقة مقبولة لدى وزارة التجارة والبلديات لمعظم الأنشطة." },
      },
    ],
  },
  {
    slug: "serviced-offices",
    category: "office-solutions",
    icon: "building",
    title: { en: "Serviced Offices", ar: "المكاتب المجهزة" },
    excerpt: {
      en: "Private, fully furnished offices in Riyadh — move in within days, not months.",
      ar: "مكاتب خاصة مجهزة بالكامل في الرياض — انتقل خلال أيام لا شهور.",
    },
    overview: [
      {
        en: "Skip fit-out costs and long leases. Our serviced offices come furnished, connected, and staffed — with flexible terms from three months. Ideal for teams of 2–25 that need a professional base in Riyadh's business districts.",
        ar: "تجاوز تكاليف التجهيز والعقود الطويلة. مكاتبنا المجهزة تأتي مؤثثة ومتصلة ومدعومة بفريق استقبال — بشروط مرنة تبدأ من ثلاثة أشهر. مثالية لفرق من 2 إلى 25 موظفًا تحتاج مقرًا احترافيًا في أحياء الأعمال بالرياض.",
      },
    ],
    audience: [
      { en: "Teams landing in Riyadh", ar: "الفرق المنتقلة إلى الرياض" },
      { en: "Project offices with fixed durations", ar: "مكاتب المشاريع محددة المدة" },
      { en: "Companies scaling ahead of a permanent HQ", ar: "الشركات المتوسعة قبل المقر الدائم" },
    ],
    benefits: [
      { en: "All-inclusive monthly fee (utilities, internet, reception)", ar: "رسوم شهرية شاملة (مرافق وإنترنت واستقبال)" },
      { en: "Contracts accepted for licensing", ar: "عقود مقبولة لأغراض الترخيص" },
      { en: "Meeting room credits included", ar: "أرصدة قاعات اجتماعات مشمولة" },
      { en: "Scale up or down with 30 days notice", ar: "توسّع أو قلّص بإشعار 30 يومًا" },
    ],
    steps: [
      { title: { en: "Needs brief", ar: "تحديد الاحتياج" }, text: { en: "Headcount, budget, and location preferences.", ar: "عدد الموظفين والميزانية والمواقع المفضلة." } },
      { title: { en: "Shortlist & tour", ar: "الترشيح والمعاينة" }, text: { en: "Curated options with virtual or in-person tours.", ar: "خيارات منتقاة مع معاينة حضورية أو افتراضية." } },
      { title: { en: "Contract & move-in", ar: "العقد والانتقال" }, text: { en: "Attested contract and move-in within days.", ar: "عقد موثق وانتقال خلال أيام." } },
    ],
    requirements: [
      { en: "CR copy and signatory ID", ar: "نسخة السجل التجاري وهوية المفوض" },
      { en: "Expected team size", ar: "حجم الفريق المتوقع" },
    ],
    deliverables: [
      { en: "Furnished private office", ar: "مكتب خاص مؤثث" },
      { en: "Attested lease for licensing", ar: "عقد موثق لأغراض الترخيص" },
    ],
    timeline: { en: "3–7 business days", ar: "3–7 أيام عمل" },
    bestFor: { en: "Teams of 2–25", ar: "فرق من 2 إلى 25" },
    supportType: { en: "On-site reception & IT", ar: "استقبال ودعم تقني في الموقع" },
    faqs: [
      {
        q: { en: "What is included in the monthly fee?", ar: "ماذا تشمل الرسوم الشهرية؟" },
        a: { en: "Furniture, utilities, high-speed internet, reception, cleaning, and a monthly meeting-room allowance.", ar: "الأثاث والمرافق والإنترنت عالي السرعة والاستقبال والنظافة ورصيد شهري لقاعات الاجتماعات." },
      },
    ],
  },
  {
    slug: "coworking-spaces",
    category: "office-solutions",
    icon: "users",
    title: { en: "Co-working Spaces", ar: "مساحات العمل المشتركة" },
    excerpt: {
      en: "Flexible desks and memberships in Riyadh's best business hubs.",
      ar: "مكاتب مرنة وعضويات في أفضل مراكز الأعمال بالرياض.",
    },
    overview: [
      {
        en: "Day passes, dedicated desks, and team memberships across premium co-working locations — with access to meeting rooms, events, and a community of founders. We match you to the right space and negotiate member rates.",
        ar: "تذاكر يومية ومكاتب مخصصة وعضويات للفرق في أفضل مساحات العمل المشتركة — مع وصول لقاعات الاجتماعات والفعاليات ومجتمع من روّاد الأعمال. نرشح لك المساحة الأنسب ونتفاوض على أسعار الأعضاء.",
      },
    ],
    audience: [
      { en: "Freelancers and solo founders", ar: "المستقلون والمؤسسون الأفراد" },
      { en: "Small teams that value flexibility", ar: "الفرق الصغيرة التي تفضّل المرونة" },
      { en: "Remote employees of global companies", ar: "موظفو الشركات العالمية عن بُعد" },
    ],
    benefits: [
      { en: "No long-term commitment", ar: "بدون التزام طويل الأمد" },
      { en: "Premium locations at member rates", ar: "مواقع مميزة بأسعار الأعضاء" },
      { en: "Networking events and community", ar: "فعاليات تواصل ومجتمع نشط" },
      { en: "Meeting rooms on demand", ar: "قاعات اجتماعات عند الطلب" },
    ],
    steps: [
      { title: { en: "Match", ar: "الترشيح" }, text: { en: "We match your work style to 2–3 spaces.", ar: "نرشح لك 2–3 مساحات تناسب أسلوب عملك." } },
      { title: { en: "Trial day", ar: "يوم تجريبي" }, text: { en: "Complimentary day pass to test the space.", ar: "تذكرة يوم مجانية لتجربة المساحة." } },
      { title: { en: "Membership", ar: "العضوية" }, text: { en: "Activation at negotiated member rates.", ar: "تفعيل العضوية بأسعار تفضيلية." } },
    ],
    requirements: [{ en: "ID or iqama copy", ar: "نسخة من الهوية أو الإقامة" }],
    deliverables: [
      { en: "Active membership", ar: "عضوية مفعّلة" },
      { en: "Access card & app onboarding", ar: "بطاقة دخول وتفعيل التطبيق" },
    ],
    timeline: { en: "Same week", ar: "خلال الأسبوع نفسه" },
    bestFor: { en: "Individuals & teams up to 10", ar: "الأفراد والفرق حتى 10 أشخاص" },
    supportType: { en: "Concierge matching", ar: "ترشيح مخصص" },
    faqs: [
      {
        q: { en: "Can a co-working membership support my CR?", ar: "هل تكفي عضوية المساحة المشتركة للسجل التجاري؟" },
        a: { en: "Some locations offer CR-compliant contracts; we'll flag which ones during matching.", ar: "بعض المواقع توفر عقودًا متوافقة مع متطلبات السجل التجاري؛ نوضح لك ذلك أثناء الترشيح." },
      },
    ],
  },
  {
    slug: "meeting-rooms",
    category: "office-solutions",
    icon: "presentation",
    title: { en: "Meeting Rooms & Event Spaces", ar: "قاعات الاجتماعات والفعاليات" },
    excerpt: {
      en: "Professional boardrooms and training rooms by the hour or day.",
      ar: "قاعات اجتماعات وتدريب احترافية بالساعة أو اليوم.",
    },
    overview: [
      {
        en: "Host client meetings, board sessions, interviews, and training days in fully equipped rooms across Riyadh — with video conferencing, catering options, and bilingual reception for your guests.",
        ar: "استضف اجتماعات العملاء وجلسات مجالس الإدارة والمقابلات وأيام التدريب في قاعات مجهزة بالكامل في الرياض — مع مؤتمرات الفيديو وخيارات الضيافة واستقبال ثنائي اللغة لضيوفك.",
      },
    ],
    audience: [
      { en: "Remote companies meeting clients in person", ar: "الشركات العاملة عن بُعد لمقابلة عملائها" },
      { en: "Trainers and workshop facilitators", ar: "المدربون ومنظمو ورش العمل" },
      { en: "Boards and committees", ar: "مجالس الإدارة واللجان" },
    ],
    benefits: [
      { en: "Book by the hour — pay only for what you use", ar: "احجز بالساعة — وادفع فقط مقابل ما تستخدمه" },
      { en: "4K video conferencing in every room", ar: "مؤتمرات فيديو بجودة 4K في كل قاعة" },
      { en: "Catering and reception add-ons", ar: "إضافات الضيافة والاستقبال" },
      { en: "Central, parking-friendly locations", ar: "مواقع مركزية بمواقف سيارات" },
    ],
    steps: [
      { title: { en: "Book", ar: "الحجز" }, text: { en: "Choose room size, time, and add-ons.", ar: "اختر حجم القاعة والوقت والإضافات." } },
      { title: { en: "Host", ar: "الاستضافة" }, text: { en: "Guests welcomed and tech pre-tested.", ar: "استقبال الضيوف وتجهيز التقنيات مسبقًا." } },
    ],
    requirements: [{ en: "Booking details and guest list", ar: "تفاصيل الحجز وقائمة الضيوف" }],
    deliverables: [{ en: "Confirmed booking with setup", ar: "حجز مؤكد مع التجهيز" }],
    timeline: { en: "Same day availability", ar: "إتاحة في نفس اليوم" },
    bestFor: { en: "Client meetings & training days", ar: "اجتماعات العملاء وأيام التدريب" },
    supportType: { en: "On-site coordinator", ar: "منسق في الموقع" },
    faqs: [
      {
        q: { en: "Can I book outside working hours?", ar: "هل يمكن الحجز خارج ساعات العمل؟" },
        a: { en: "Evening and weekend bookings are available at selected locations with prior notice.", ar: "تتاح الحجوزات المسائية وعطلات نهاية الأسبوع في مواقع مختارة بإشعار مسبق." },
      },
    ],
  },
  // ─────────────────────── Finance & Compliance ───────────────────────
  {
    slug: "accounting-services",
    category: "finance-compliance",
    icon: "calculator",
    featured: true,
    title: { en: "Accounting & Bookkeeping", ar: "المحاسبة ومسك الدفاتر" },
    excerpt: {
      en: "IFRS-compliant bookkeeping, payroll, and monthly reporting for Saudi entities.",
      ar: "مسك دفاتر متوافق مع المعايير الدولية ورواتب وتقارير شهرية للكيانات السعودية.",
    },
    overview: [
      {
        en: "Saudi entities must keep accounting records under IFRS and file with ZATCA on time. Our team runs your books, payroll (WPS), and e-invoicing (FATOORA) — delivering clean monthly statements your bank, auditor, and management can trust.",
        ar: "يجب على الكيانات السعودية إمساك سجلات محاسبية وفق المعايير الدولية وتقديم إقراراتها لهيئة الزكاة في مواعيدها. يتولى فريقنا دفاترك ورواتبك (نظام حماية الأجور) وفوترتك الإلكترونية (فاتورة) — مع قوائم شهرية دقيقة يثق بها بنكك ومراجعك وإدارتك.",
      },
    ],
    audience: [
      { en: "New entities without an in-house accountant", ar: "الكيانات الجديدة بلا محاسب داخلي" },
      { en: "Foreign subsidiaries needing local compliance", ar: "الشركات التابعة الأجنبية التي تحتاج امتثالًا محليًا" },
      { en: "SMEs outgrowing spreadsheets", ar: "المنشآت الصغيرة والمتوسطة التي تجاوزت جداول البيانات" },
    ],
    benefits: [
      { en: "FATOORA-compliant e-invoicing setup", ar: "تهيئة فوترة إلكترونية متوافقة مع «فاتورة»" },
      { en: "WPS payroll with payslips in Arabic & English", ar: "رواتب عبر حماية الأجور بقسائم بالعربية والإنجليزية" },
      { en: "Monthly management reports", ar: "تقارير إدارية شهرية" },
      { en: "Audit-ready books at year end", ar: "دفاتر جاهزة للمراجعة في نهاية السنة" },
    ],
    steps: [
      { title: { en: "Systems setup", ar: "تهيئة الأنظمة" }, text: { en: "Chart of accounts, e-invoicing, and payroll configured.", ar: "إعداد شجرة الحسابات والفوترة الإلكترونية والرواتب." } },
      { title: { en: "Monthly cycle", ar: "الدورة الشهرية" }, text: { en: "Bookkeeping, reconciliations, payroll, and reporting.", ar: "القيود والتسويات والرواتب والتقارير." } },
      { title: { en: "Filings", ar: "الإقرارات" }, text: { en: "VAT and withholding filings prepared and submitted.", ar: "إعداد وتقديم إقرارات ضريبة القيمة المضافة والاستقطاع." } },
    ],
    requirements: [
      { en: "ZATCA portal access", ar: "صلاحية الدخول لبوابة هيئة الزكاة" },
      { en: "Bank statements and invoices", ar: "كشوف الحساب البنكية والفواتير" },
      { en: "Employee contracts for payroll", ar: "عقود الموظفين لإعداد الرواتب" },
    ],
    deliverables: [
      { en: "Monthly financial statements", ar: "قوائم مالية شهرية" },
      { en: "Filed VAT returns", ar: "إقرارات ضريبية مقدّمة" },
      { en: "Payroll records & WPS files", ar: "سجلات الرواتب وملفات حماية الأجور" },
    ],
    timeline: { en: "Ongoing monthly", ar: "شهري مستمر" },
    bestFor: { en: "Entities of 1–100 employees", ar: "كيانات من 1 إلى 100 موظف" },
    supportType: { en: "Dedicated accountant", ar: "محاسب مخصص" },
    faqs: [
      {
        q: { en: "Which accounting software do you use?", ar: "ما البرامج المحاسبية التي تستخدمونها؟" },
        a: { en: "We work with Zoho Books, QuickBooks, Odoo, and Xero — or your existing ERP if you have one.", ar: "نعمل على Zoho Books وQuickBooks وOdoo وXero — أو نظامك الحالي إن وُجد." },
      },
    ],
  },
  {
    slug: "zakat-tax",
    category: "finance-compliance",
    icon: "receipt-text",
    title: { en: "ZAKAT & Tax Services", ar: "خدمات الزكاة والضرائب" },
    excerpt: {
      en: "ZAKAT, VAT, and withholding tax — registration, filings, and ZATCA representation.",
      ar: "الزكاة وضريبة القيمة المضافة والاستقطاع — تسجيل وإقرارات وتمثيل أمام الهيئة.",
    },
    overview: [
      {
        en: "Saudi tax is layered: ZAKAT for Saudi/GCC ownership, 20% income tax on foreign shares, 15% VAT, and withholding tax on cross-border payments. We register you correctly, file on time, and represent you in ZATCA inquiries and assessments.",
        ar: "النظام الضريبي السعودي متعدد المستويات: الزكاة على الملكية السعودية والخليجية، وضريبة دخل 20% على الحصص الأجنبية، وقيمة مضافة 15%، وضريبة استقطاع على المدفوعات للخارج. نسجلك بشكل صحيح ونقدم إقراراتك في مواعيدها ونمثلك أمام الهيئة في الاستفسارات والربوط.",
      },
    ],
    audience: [
      { en: "Mixed and foreign-owned entities", ar: "الكيانات المختلطة والمملوكة لأجانب" },
      { en: "Companies making cross-border payments", ar: "الشركات التي تسدد مدفوعات للخارج" },
      { en: "Entities facing ZATCA assessments", ar: "الكيانات التي تواجه ربوطًا من الهيئة" },
    ],
    benefits: [
      { en: "Correct ZAKAT/tax base from day one", ar: "وعاء زكوي/ضريبي صحيح من اليوم الأول" },
      { en: "Deadline management — zero late penalties", ar: "إدارة المواعيد — بلا غرامات تأخير" },
      { en: "Treaty relief on withholding where applicable", ar: "الاستفادة من اتفاقيات منع الازدواج الضريبي" },
      { en: "Representation in audits and objections", ar: "تمثيل في الفحوصات والاعتراضات" },
    ],
    steps: [
      { title: { en: "Tax health check", ar: "فحص الوضع الضريبي" }, text: { en: "Review of registrations, past filings, and exposures.", ar: "مراجعة التسجيلات والإقرارات السابقة والمخاطر." } },
      { title: { en: "Registration & setup", ar: "التسجيل والتهيئة" }, text: { en: "ZAKAT, VAT, and WHT registrations completed.", ar: "إتمام تسجيلات الزكاة والقيمة المضافة والاستقطاع." } },
      { title: { en: "Ongoing filings", ar: "الإقرارات الدورية" }, text: { en: "Monthly/quarterly VAT and annual ZAKAT returns.", ar: "إقرارات شهرية/ربع سنوية للقيمة المضافة وسنوية للزكاة." } },
    ],
    requirements: [
      { en: "CR, articles, and ownership structure", ar: "السجل التجاري وعقد التأسيس وهيكل الملكية" },
      { en: "Trial balance and financials", ar: "ميزان المراجعة والقوائم المالية" },
    ],
    deliverables: [
      { en: "Filed returns with confirmations", ar: "إقرارات مقدمة بإشعارات التأكيد" },
      { en: "ZAKAT/tax certificates", ar: "شهادات الزكاة والضريبة" },
      { en: "Annual compliance calendar", ar: "تقويم امتثال سنوي" },
    ],
    timeline: { en: "Ongoing — annual & quarterly cycles", ar: "مستمر — دورات سنوية وربع سنوية" },
    bestFor: { en: "All registered Saudi entities", ar: "جميع الكيانات المسجلة في السعودية" },
    supportType: { en: "Tax specialists + ZATCA liaison", ar: "متخصصو ضرائب وتواصل مع الهيئة" },
    faqs: [
      {
        q: { en: "What happens if I miss a VAT filing?", ar: "ماذا يحدث إذا تأخرت في تقديم إقرار القيمة المضافة؟" },
        a: { en: "ZATCA applies penalties of 5–25% of the due tax plus fixed fines. If you're behind, we can prepare and file overdue returns and negotiate penalty relief.", ar: "تفرض الهيئة غرامات من 5% إلى 25% من الضريبة المستحقة إضافة لغرامات ثابتة. إن كنت متأخرًا، نعدّ الإقرارات المتأخرة ونقدمها ونسعى لتخفيض الغرامات." },
      },
      {
        q: { en: "Is my company subject to ZAKAT or income tax?", ar: "هل تخضع شركتي للزكاة أم لضريبة الدخل؟" },
        a: { en: "Saudi/GCC-owned shares are subject to ZAKAT (2.5% of the ZAKAT base); non-GCC shares to 20% income tax. Mixed entities pay both proportionally.", ar: "الحصص السعودية/الخليجية تخضع للزكاة (2.5% من الوعاء)، والحصص غير الخليجية لضريبة دخل 20%. والكيانات المختلطة تخضع للاثنين بالتناسب." },
      },
    ],
  },
  {
    slug: "audit-support",
    category: "finance-compliance",
    icon: "file-search",
    title: { en: "Audit & Assurance Support", ar: "دعم المراجعة والتدقيق" },
    excerpt: {
      en: "Statutory audit coordination, audit readiness, and licensed auditor engagement.",
      ar: "تنسيق المراجعة النظامية وتجهيز الملفات والتعاقد مع مراجعين مرخصين.",
    },
    overview: [
      {
        en: "Saudi companies must file audited financial statements annually through Qawaem. We prepare your books for audit, engage a licensed SOCPA audit firm suited to your size, and manage the process until the signed report is filed on time.",
        ar: "يجب على الشركات السعودية إيداع قوائم مالية مدققة سنويًا عبر منصة قوائم. نجهز دفاترك للمراجعة، ونتعاقد مع مكتب مراجعة مرخص من الهيئة السعودية للمراجعين والمحاسبين يناسب حجمك، وندير العملية حتى إيداع التقرير الموقع في موعده.",
      },
    ],
    audience: [
      { en: "Entities approaching their first statutory audit", ar: "الكيانات المقبلة على أول مراجعة نظامية" },
      { en: "Subsidiaries needing group-reporting packages", ar: "الشركات التابعة التي تحتاج حزم تقارير للمجموعة" },
      { en: "Companies fixing prior-year audit issues", ar: "الشركات التي تعالج ملاحظات مراجعات سابقة" },
    ],
    benefits: [
      { en: "Right-sized licensed audit firms — fair fees", ar: "مكاتب مراجعة مرخصة بحجم مناسب — وأتعاب عادلة" },
      { en: "Pre-audit cleanup reduces audit time", ar: "تهيئة مسبقة للدفاتر تختصر وقت المراجعة" },
      { en: "Qawaem filing handled", ar: "إيداع منصة قوائم مشمول" },
      { en: "Group reporting under IFRS", ar: "تقارير المجموعة وفق المعايير الدولية" },
    ],
    steps: [
      { title: { en: "Audit readiness review", ar: "مراجعة الجاهزية" }, text: { en: "Gap check on records, reconciliations, and policies.", ar: "فحص الفجوات في السجلات والتسويات والسياسات." } },
      { title: { en: "Auditor engagement", ar: "التعاقد مع المراجع" }, text: { en: "Licensed firm engaged with a clear fee and timeline.", ar: "تعاقد مع مكتب مرخص بأتعاب وجدول واضحين." } },
      { title: { en: "Fieldwork support", ar: "دعم أعمال الفحص" }, text: { en: "We answer queries and provide schedules on your behalf.", ar: "نرد على الاستفسارات ونوفر الجداول نيابة عنك." } },
      { title: { en: "Sign-off & filing", ar: "الاعتماد والإيداع" }, text: { en: "Signed report filed on Qawaem before the deadline.", ar: "إيداع التقرير الموقع في قوائم قبل الموعد النهائي." } },
    ],
    requirements: [
      { en: "Trial balance and ledgers", ar: "ميزان المراجعة ودفاتر الأستاذ" },
      { en: "Bank statements and contracts", ar: "كشوف بنكية وعقود" },
      { en: "Prior-year audit report (if any)", ar: "تقرير المراجعة السابق (إن وجد)" },
    ],
    deliverables: [
      { en: "Signed audited financial statements", ar: "قوائم مالية مدققة وموقعة" },
      { en: "Qawaem filing confirmation", ar: "تأكيد الإيداع في منصة قوائم" },
    ],
    timeline: { en: "3–8 weeks", ar: "3–8 أسابيع" },
    bestFor: { en: "LLCs and foreign subsidiaries", ar: "الشركات ذات المسؤولية المحدودة والتابعة" },
    supportType: { en: "Finance team + auditor liaison", ar: "فريق مالي وتنسيق مع المراجع" },
    faqs: [
      {
        q: { en: "Is an annual audit mandatory for my LLC?", ar: "هل المراجعة السنوية إلزامية لشركتي المحدودة؟" },
        a: { en: "Yes — LLCs must appoint a licensed auditor and file audited statements via Qawaem annually.", ar: "نعم — يجب على الشركات المحدودة تعيين مراجع مرخص وإيداع قوائم مدققة عبر منصة قوائم سنويًا." },
      },
    ],
  },
  {
    slug: "employee-insurance",
    category: "government-services",
    icon: "heart-pulse",
    featured: true,
    image: "/images/services/employee-insurance.webp",
    title: { en: "Employee Medical Insurance", ar: "التأمين الطبي للموظفين" },
    excerpt: { en: "Secure CCHI-compliant medical insurance for your employees and their dependents — the right class, competitive quotes from approved insurers, and coverage that keeps iqama issuance and renewal unblocked.", ar: "نُؤمّن لموظفيك ومرافقيهم تأميناً طبياً متوافقاً مع مجلس الضمان الصحي — بالفئة المناسبة، وعروض أسعار تنافسية من شركات معتمدة، وتغطية تُبقي إصدار الإقامة وتجديدها دون توقّف." },
    overview: [
      { en: "In Saudi Arabia, cooperative health insurance is mandatory for every private-sector employee and for their legal dependents, and it is regulated by the Council of Health Insurance (CCHI / مجلس الضمان الصحي) alongside the Insurance Authority (هيئة التأمين), which now supervises the insurance sector after SAMA. A valid policy is not optional paperwork — it is a precondition for issuing and renewing the iqama of expatriate staff and their families. Without active, compliant coverage recorded against each person, the iqama transaction on Absher and Muqeem will simply not proceed, and related labour services in Qiwa can stall.", ar: "في المملكة العربية السعودية يُعدّ التأمين الصحي التعاوني إلزامياً لكل موظف في القطاع الخاص ولمرافقيه النظاميين، وهو خاضع لإشراف مجلس الضمان الصحي (CCHI) إلى جانب هيئة التأمين التي تتولّى الآن الإشراف على قطاع التأمين بعد البنك المركزي السعودي. والوثيقة السارية ليست إجراءً ورقياً اختيارياً، بل شرط مسبق لإصدار وتجديد إقامة الموظفين الوافدين وأسرهم. فبدون تغطية فعّالة ومتوافقة مسجَّلة على كل فرد، لن تكتمل معاملة الإقامة في أبشر ومقيم، وقد تتعطّل خدمات العمل ذات الصلة في منصة قوى." },
      { en: "All insurers issue against the Unified Cooperative Policy (وثيقة الضمان الصحي الموحّدة), a standardized benefit schedule that defines inpatient and outpatient care, medicines, maternity, emergency dental, basic optical, and chronic-disease management. What differs between insurers is the class you buy — typically C (basic), B (mid), A (comprehensive), and VIP above them — along with hospital networks, annual limits, and price. Choosing the wrong class can either inflate your premium needlessly or leave staff under-covered and your renewal at risk.", ar: "تُصدر جميع الشركات وثائقها وفق وثيقة الضمان الصحي الموحّدة، وهي جدول منافع معياري يحدّد الرعاية الداخلية والخارجية والأدوية والولادة وطوارئ الأسنان والبصريات الأساسية وإدارة الأمراض المزمنة. ويبقى الفارق بين الشركات في الفئة التي تشتريها — وهي غالباً C (أساسية) وB (متوسطة) وA (شاملة) وVIP فوقها — إضافةً إلى شبكات المستشفيات والحدود السنوية والسعر. واختيار الفئة الخاطئة قد يرفع قسطك دون داعٍ أو يترك موظفيك بتغطية ناقصة ويُعرّض تجديدك للخطر." },
      { en: "Omnera One manages this end to end. We assess your headcount, visa categories, and budget, recommend the correct CCHI class for each tier of staff, and gather competitive quotes from approved insurers such as Bupa Arabia, Tawuniya, and MedGulf. We then issue the policy and register each member so coverage is recognized through NPHIES and reflected in Muqeem and Qiwa, and we handle every later change — adding new hires and dependents, removing departures, upgrading classes, and renewing on time — so your iqama transactions are never blocked by a lapsed or non-compliant policy.", ar: "تتولّى أومنيرا ون هذا العمل من البداية إلى النهاية. ندرس عدد موظفيك وفئات تأشيراتهم وميزانيتك، ونوصي بالفئة الصحيحة المعتمدة من المجلس لكل شريحة من الموظفين، ونجمع عروضاً تنافسية من شركات معتمدة مثل بوبا العربية والتعاونية وميدغلف. ثم نُصدر الوثيقة ونُسجّل كل مشترك بحيث تُعتمد التغطية عبر نظام نفيس (NPHIES) وتنعكس في مقيم وقوى، ونتولّى كل تغيير لاحق — إضافة الموظفين الجدد والمرافقين، وحذف المغادرين، وترقية الفئات، والتجديد في موعده — حتى لا تتوقف معاملات الإقامة بسبب وثيقة منتهية أو غير متوافقة." },
    ],
    audience: [
      { en: "Employers and establishments sponsoring expatriate staff who must keep iqamas valid", ar: "أصحاب العمل والمنشآت الذين يكفلون موظفين وافدين ويحتاجون إلى إبقاء الإقامات سارية" },
      { en: "New companies hiring their first employees and needing a compliant group policy fast", ar: "الشركات الجديدة التي توظّف أول موظفيها وتحتاج إلى وثيقة جماعية متوافقة بسرعة" },
      { en: "Businesses overpaying or under-covered on an existing policy who want the right class and price", ar: "المنشآت التي تدفع زيادةً أو تعاني نقص تغطية في وثيقة قائمة وتريد الفئة والسعر المناسبين" },
    ],
    benefits: [
      { en: "Iqama issuance and renewal never blocked by a missing or lapsed policy", ar: "إصدار الإقامة وتجديدها لا يتوقّف بسبب وثيقة مفقودة أو منتهية" },
      { en: "Competitive quotes gathered from multiple CCHI-approved insurers", ar: "عروض أسعار تنافسية من عدة شركات معتمدة لدى مجلس الضمان الصحي" },
      { en: "The right class chosen for your budget and CCHI rules — no over- or under-coverage", ar: "اختيار الفئة المناسبة لميزانيتك وأنظمة المجلس — دون زيادة أو نقص في التغطية" },
      { en: "Members added or removed within hours, not days", ar: "إضافة المشتركين أو حذفهم خلال ساعات لا أيام" },
      { en: "Government and CCHI fees passed through at cost — full transparency", ar: "رسوم الجهات الحكومية والمجلس تُمرَّر كما هي — شفافية كاملة" },
      { en: "Renewals tracked ahead of expiry so coverage never lapses", ar: "متابعة التجديدات قبل الانتهاء حتى لا تنقطع التغطية أبداً" },
    ],
    steps: [
      { title: { en: "Needs assessment", ar: "تقييم الاحتياج" }, text: { en: "We review your headcount, visa categories, dependents, and budget to define the coverage you actually need.", ar: "نراجع عدد موظفيك وفئات تأشيراتهم ومرافقيهم وميزانيتك لتحديد التغطية التي تحتاجها فعلاً." } },
      { title: { en: "Class selection", ar: "اختيار الفئة" }, text: { en: "We recommend the right CCHI class (C, B, A, or VIP) for each tier of staff under the Unified Cooperative Policy.", ar: "نوصي بالفئة الصحيحة المعتمدة من المجلس (C أو B أو A أو VIP) لكل شريحة من الموظفين وفق الوثيقة الموحّدة." } },
      { title: { en: "Competitive quotes", ar: "عروض تنافسية" }, text: { en: "We obtain and compare quotes from approved insurers such as Bupa Arabia, Tawuniya, and MedGulf.", ar: "نحصل على عروض من شركات معتمدة مثل بوبا العربية والتعاونية وميدغلف ونقارن بينها." } },
      { title: { en: "Policy issuance", ar: "إصدار الوثيقة" }, text: { en: "We issue the policy and register each member so coverage is recognized through NPHIES and reflected in Muqeem.", ar: "نُصدر الوثيقة ونُسجّل كل مشترك بحيث تُعتمد التغطية عبر نظام نفيس وتنعكس في مقيم." } },
      { title: { en: "Member management", ar: "إدارة المشتركين" }, text: { en: "We add new hires and dependents, remove departures, and process upgrades whenever your team changes.", ar: "نضيف الموظفين الجدد والمرافقين، ونحذف المغادرين، وننفّذ الترقيات كلما تغيّر فريقك." } },
      { title: { en: "Renewal & compliance", ar: "التجديد والامتثال" }, text: { en: "We track expiry dates and renew ahead of time so iqama transactions are never interrupted.", ar: "نتابع تواريخ الانتهاء ونجدّد قبل الموعد حتى لا تنقطع معاملات الإقامة." } },
    ],
    requirements: [
      { en: "Active Commercial Registration (CR) and a unified national number (700 number)", ar: "سجل تجاري ساري ورقم وطني موحّد (رقم 700)" },
      { en: "Employee details: name, iqama/border number, nationality, and date of birth", ar: "بيانات الموظفين: الاسم ورقم الإقامة/الحدود والجنسية وتاريخ الميلاد" },
      { en: "Dependent details for any spouse and children registered on the iqama", ar: "بيانات المرافقين من الزوج/الزوجة والأبناء المسجَّلين على الإقامة" },
      { en: "An authorized representative in Qiwa and Muqeem to confirm and register coverage", ar: "مفوّض في قوى ومقيم لاعتماد التغطية وتسجيلها" },
    ],
    deliverables: [
      { en: "An issued, CCHI-compliant policy covering all employees and dependents", ar: "وثيقة صادرة متوافقة مع مجلس الضمان الصحي تغطّي جميع الموظفين والمرافقين" },
      { en: "Member cards and coverage confirmation visible in Muqeem", ar: "بطاقات المشتركين وتأكيد التغطية الظاهر في مقيم" },
      { en: "An ongoing management and renewal schedule with expiry tracking", ar: "جدول إدارة وتجديد مستمر مع متابعة تواريخ الانتهاء" },
    ],
    timeline: { en: "Most policies are quoted within 1–2 business days and issued within 2–5 business days once member data is complete.", ar: "تُقدَّم عروض معظم الوثائق خلال يوم إلى يومَي عمل، وتُصدَر خلال يومين إلى خمسة أيام عمل بعد اكتمال بيانات المشتركين." },
    bestFor: { en: "Employers who need compliant, well-priced coverage in place before any iqama issuance or renewal.", ar: "أصحاب العمل الذين يحتاجون إلى تغطية متوافقة وبسعر مناسب قبل أي إصدار أو تجديد للإقامة." },
    supportType: { en: "A dedicated consultant who selects the class, secures quotes, issues the policy, and manages every change and renewal.", ar: "مستشار مخصّص يختار الفئة ويؤمّن العروض ويُصدر الوثيقة ويدير كل تغيير وتجديد." },
    faqs: [
      { q: { en: "Why can't I renew an iqama without medical insurance?", ar: "لماذا لا أستطيع تجديد الإقامة دون تأمين طبي؟" }, a: { en: "Cooperative health insurance is mandatory under CCHI rules and is checked automatically during the iqama transaction. If a valid, compliant policy is not recorded for the employee — and for each dependent on the iqama — Absher and Muqeem will not let the renewal proceed. We make sure coverage is active and registered before you attempt the transaction.", ar: "التأمين الصحي التعاوني إلزامي وفق أنظمة مجلس الضمان الصحي ويُتحقَّق منه تلقائياً أثناء معاملة الإقامة. وإذا لم تُسجَّل وثيقة سارية ومتوافقة للموظف — ولكل مرافق على الإقامة — فلن يسمح أبشر ومقيم بإتمام التجديد. ونحن نتأكد من أن التغطية فعّالة ومسجَّلة قبل محاولتك إجراء المعاملة." } },
      { q: { en: "Which insurance class do I need to choose?", ar: "أي فئة تأمين يجب أن أختار؟" }, a: { en: "All insurers follow the same Unified Cooperative Policy, but classes differ in network, limits, and price — typically C (basic), B (mid), A (comprehensive), and VIP above them. The right choice depends on your visa categories, staff seniority, and budget. We recommend the class that meets CCHI requirements without making you overpay.", ar: "تتّبع جميع الشركات الوثيقة الموحّدة نفسها، لكن الفئات تختلف في الشبكة والحدود والسعر — غالباً C (أساسية) وB (متوسطة) وA (شاملة) وVIP فوقها. ويعتمد الاختيار الصحيح على فئات تأشيراتك ومستوى موظفيك وميزانيتك. ونوصي بالفئة التي تستوفي متطلبات المجلس دون أن تدفع زيادة." } },
      { q: { en: "Are dependents required to be insured too?", ar: "هل يجب تأمين المرافقين أيضاً؟" }, a: { en: "Yes. Any spouse and children registered on an employee's iqama must have valid coverage, and their iqama issuance or renewal is blocked without it. Separately, the government dependent levy typically runs around SAR 400 per dependent per month, and the insurance premium is in addition to it; government fees are paid at cost. We register every dependent on the policy so none are missed at renewal.", ar: "نعم. يجب أن يكون لأي زوج/زوجة وأبناء مسجَّلين على إقامة الموظف تغطية سارية، ويتوقّف إصدار أو تجديد إقامتهم بدونها. وبشكل منفصل تبلغ رسوم المرافق الحكومية عادةً نحو 400 ريال لكل مرافق شهرياً، ويُضاف قسط التأمين إليها؛ وتُدفع الرسوم الحكومية كما هي. ونحن نُسجّل كل مرافق على الوثيقة حتى لا يُغفَل أحد عند التجديد." } },
      { q: { en: "How much does employee medical insurance cost?", ar: "كم تبلغ تكلفة التأمين الطبي للموظفين؟" }, a: { en: "Premiums vary widely by class, age, and insurer — a basic Class C plan can start in the low hundreds of riyals per year, while comprehensive Class A or VIP cover runs several thousand. Government and CCHI fees are passed through at cost. Your consultant confirms the exact figure after gathering competitive quotes; we never quote a fixed price blind.", ar: "تتفاوت الأقساط كثيراً حسب الفئة والعمر والشركة — فالخطة الأساسية من الفئة C قد تبدأ بمئات قليلة من الريالات سنوياً، بينما تبلغ التغطية الشاملة من الفئة A أو VIP عدة آلاف. وتُمرَّر رسوم الجهات الحكومية والمجلس كما هي. ويؤكّد مستشارك الرقم الدقيق بعد جمع عروض تنافسية؛ ولا نُحدّد سعراً ثابتاً دون دراسة." } },
      { q: { en: "Can you add or remove employees mid-year?", ar: "هل يمكنكم إضافة أو حذف موظفين خلال السنة؟" }, a: { en: "Yes. We handle additions, removals, and class upgrades throughout the policy year, usually within hours of receiving the member's details. New hires can be covered before their iqama is issued, and leavers removed to avoid paying for inactive members. You keep one compliant policy across all your staff at all times.", ar: "نعم. نتولّى الإضافة والحذف وترقية الفئات طوال سنة الوثيقة، غالباً خلال ساعات من استلام بيانات المشترك. ويمكن تغطية الموظفين الجدد قبل إصدار إقاماتهم، وحذف المغادرين لتجنّب الدفع عن مشتركين غير فعّالين. وتبقى لديك وثيقة واحدة متوافقة تشمل جميع موظفيك في كل وقت." } },
    ],
  },
  {
    slug: "car-insurance",
    category: "government-services",
    icon: "shield-check",
    featured: true,
    image: "/images/services/car-insurance.webp",
    title: { en: "Vehicle Insurance", ar: "تأمين السيارات" },
    excerpt: { en: "Compare every regulated insurer, secure the right cover at the best premium, and get your policy issued instantly so registration or ownership transfer is never delayed.", ar: "نقارن بين جميع شركات التأمين المرخّصة، ونؤمّن التغطية المناسبة بأفضل قسط، ونُصدر وثيقتك فوريًّا حتى لا يتأخّر تجديد الاستمارة أو نقل الملكية." },
    overview: [
      { en: "Vehicle insurance in Saudi Arabia comes in two forms, and knowing which you need matters. Third-party liability cover (التأمين ضد الغير) is the legal minimum: it pays for injury, death, or property damage your vehicle causes to others, but nothing for your own car. Comprehensive cover (التأمين الشامل) adds protection for your own vehicle against accidents, theft, fire, and certain natural risks, in line with the policy's terms. We explain the real difference for your situation and recommend the cover that actually fits how and what you drive — not the most expensive option by default.", ar: "ينقسم تأمين المركبات في المملكة إلى نوعين، ومعرفة ما تحتاجه أمرٌ مهم. فالتأمين ضد الغير هو الحد الأدنى القانوني: يغطّي ما تُسبّبه مركبتك للآخرين من إصاباتٍ أو وفاةٍ أو أضرارٍ في الممتلكات، لكنه لا يغطّي سيارتك أنت. أما التأمين الشامل فيضيف حمايةً لمركبتك ضد الحوادث والسرقة والحريق وبعض المخاطر الطبيعية وفق شروط الوثيقة. ونحن نوضّح لك الفرق الحقيقي بحسب وضعك، ونوصي بالتغطية التي تناسب طريقة استخدامك للمركبة فعليًّا — لا الخيار الأغلى تلقائيًّا." },
      { en: "The sector is regulated by the Insurance Authority (هيئة التأمين), which since late 2023 has been the single regulator after taking over insurance supervision from SAMA. Premiums are not arbitrary: they are driven by your claims and accident history recorded in the Najm (نجم) system, the vehicle's value and model, the driver's age and experience, and your no-claims record. A clean record earns a no-claims discount that grows each year — but letting the policy lapse for more than thirty days puts that discount at risk and can return you to the higher base rate. We review your Najm history before quoting so the premium reflects your true standing.", ar: "يخضع القطاع لإشراف هيئة التأمين، التي أصبحت منذ أواخر عام 2023 الجهة المنظِّمة الوحيدة بعد أن تسلّمت الإشراف على التأمين من البنك المركزي السعودي (ساما). والأقساط ليست اعتباطية: فهي تتأثّر بسجلّ حوادثك ومطالباتك المسجّل في نظام نجم، وقيمة المركبة وطرازها، وعمر السائق وخبرته، وسجلّك الخالي من المطالبات. والسجلّ النظيف يمنحك خصم عدم المطالبة الذي يتنامى سنويًّا — لكن انقطاع الوثيقة لأكثر من ثلاثين يومًا يُعرّض هذا الخصم للخطر وقد يعيدك إلى السعر الأساسي الأعلى. لذلك نراجع سجلّك في نجم قبل التسعير حتى يعكس القسط وضعك الحقيقي." },
      { en: "Valid insurance is not just for driving — it is a precondition for two government transactions. You cannot renew your vehicle registration (الاستمارة / رخصة السير) without an active policy, and you cannot transfer ownership of a vehicle until cover is in place. Because of this, timing matters: a gap in cover can stall a sale or freeze a renewal. We compare regulated insurers, lock in the best premium for the cover you need, and issue the policy instantly so the registration or transfer goes through without delay — and we stay with you for renewals and for filing claims through Najm if an accident happens.", ar: "التأمين الساري ليس للقيادة فحسب — بل هو شرطٌ مسبق لمعاملتين حكوميتين. فلا يمكنك تجديد استمارة المركبة (رخصة السير) دون وثيقةٍ سارية، ولا يمكنك نقل ملكية مركبةٍ قبل توفّر التغطية. ولهذا فالتوقيت مهم: فأي انقطاعٍ في التغطية قد يُعطّل عملية بيعٍ أو يُجمّد تجديدًا. نقارن بين شركات التأمين المرخّصة، ونثبّت أفضل قسطٍ للتغطية التي تحتاجها، ونُصدر الوثيقة فوريًّا ليتمّ التجديد أو النقل دون تأخير — ونبقى معك للتجديدات ولرفع المطالبات عبر نجم إذا وقع حادث." },
    ],
    audience: [
      { en: "Individuals renewing their istimara or buying/selling a vehicle who need cover in place today.", ar: "الأفراد الذين يجدّدون الاستمارة أو يبيعون/يشترون مركبة ويحتاجون تغطيةً سارية اليوم." },
      { en: "Owners unsure whether third-party or comprehensive cover is right for their car and budget.", ar: "المالكون غير المتأكّدين من مناسبة التأمين ضد الغير أم الشامل لسيارتهم وميزانيتهم." },
      { en: "Businesses and individuals managing multiple vehicles or a fleet who want one coordinated renewal.", ar: "الشركات والأفراد الذين يديرون عدة مركبات أو أسطولًا ويرغبون في تجديدٍ منظَّمٍ موحَّد." },
    ],
    benefits: [
      { en: "All regulated insurers compared in one place — you see the best real price, not one quote.", ar: "مقارنة جميع الشركات المرخّصة في مكان واحد — ترى أفضل سعرٍ حقيقي لا عرضًا واحدًا." },
      { en: "Policy issued instantly so registration renewal or ownership transfer is never blocked.", ar: "إصدار الوثيقة فوريًّا حتى لا يتعطّل تجديد الاستمارة أو نقل الملكية." },
      { en: "Your Najm no-claims history checked first so you capture every discount you've earned.", ar: "مراجعة سجلّك في نجم أولًا لتحصل على كل خصمٍ استحققته." },
      { en: "Clear advice on third-party vs comprehensive — the right cover, not the costliest.", ar: "نصيحة واضحة بين التأمين ضد الغير والشامل — التغطية المناسبة لا الأغلى." },
      { en: "Renewal reminders before the 30-day gap that would put your no-claims discount at risk.", ar: "تنبيهات تجديد قبل فجوة الثلاثين يومًا التي تُعرّض خصم عدم المطالبة للخطر." },
      { en: "Hands-on claims support through Najm if an accident happens.", ar: "دعم فعليّ للمطالبات عبر نجم في حال وقوع حادث." },
    ],
    steps: [
      { title: { en: "Vehicle and driver details", ar: "بيانات المركبة والسائق" }, text: { en: "We collect your istimara, ID, and vehicle details to identify your car and eligibility.", ar: "نجمع الاستمارة والهوية وبيانات المركبة لتحديد سيارتك وأهليتك." } },
      { title: { en: "Najm history check", ar: "مراجعة سجل نجم" }, text: { en: "We review your accident and no-claims record in Najm so quotes reflect your true standing.", ar: "نراجع سجلّ حوادثك وعدم مطالبتك في نجم حتى تعكس العروض وضعك الحقيقي." } },
      { title: { en: "Cover recommendation", ar: "توصية التغطية" }, text: { en: "We advise third-party or comprehensive based on your vehicle's value and how you use it.", ar: "نوصي بالتأمين ضد الغير أو الشامل بحسب قيمة مركبتك وطريقة استخدامك لها." } },
      { title: { en: "Compare regulated insurers", ar: "مقارنة الشركات المرخّصة" }, text: { en: "We compare quotes across licensed insurers and secure the best premium for that cover.", ar: "نقارن العروض بين الشركات المرخّصة ونؤمّن أفضل قسطٍ لتلك التغطية." } },
      { title: { en: "Instant policy issuance", ar: "إصدار الوثيقة فوريًّا" }, text: { en: "We issue the policy immediately and confirm it is active so your transaction isn't delayed.", ar: "نُصدر الوثيقة على الفور ونؤكّد سريانها حتى لا تتأخّر معاملتك." } },
      { title: { en: "Renewals and claims", ar: "التجديدات والمطالبات" }, text: { en: "We track renewal dates and support any claim filed through Najm after an accident.", ar: "نتابع مواعيد التجديد وندعم أي مطالبة تُرفع عبر نجم بعد حادث." } },
    ],
    requirements: [
      { en: "Valid national ID or Iqama of the vehicle owner.", ar: "هوية وطنية أو إقامة سارية لمالك المركبة." },
      { en: "Vehicle registration (istimara) or the serial/plate number.", ar: "استمارة المركبة (رخصة السير) أو الرقم التسلسلي/رقم اللوحة." },
      { en: "For comprehensive cover, the vehicle's current market value or purchase details.", ar: "للتأمين الشامل، القيمة السوقية الحالية للمركبة أو بيانات الشراء." },
      { en: "For ownership transfer, the buyer's details so cover can be issued in the new owner's name.", ar: "لنقل الملكية، بيانات المشتري لإصدار التغطية باسم المالك الجديد." },
    ],
    deliverables: [
      { en: "An active insurance policy issued by a regulated insurer, valid for registration and transfer.", ar: "وثيقة تأمين سارية صادرة عن شركة مرخّصة، صالحة للتجديد ونقل الملكية." },
      { en: "A side-by-side comparison showing why the chosen premium and cover are best for you.", ar: "مقارنة جنبًا إلى جنب توضّح لماذا القسط والتغطية المختارة هي الأنسب لك." },
      { en: "A renewal and claims plan, including Najm support contacts if an accident occurs.", ar: "خطة تجديدٍ ومطالبات، تشمل جهات دعم نجم في حال وقوع حادث." },
    ],
    timeline: { en: "Most policies are issued the same day — often within minutes once details are confirmed.", ar: "تُصدر معظم الوثائق في اليوم نفسه — غالبًا خلال دقائق بعد تأكيد البيانات." },
    bestFor: { en: "Anyone needing cover in place today to renew registration, complete a sale, or avoid a lapse.", ar: "كل من يحتاج تغطيةً سارية اليوم لتجديد الاستمارة أو إتمام بيعٍ أو تجنّب انقطاع الوثيقة." },
    supportType: { en: "A dedicated consultant who compares, issues, and stays on for renewals and claims.", ar: "مستشار مخصّص يقارن ويُصدر ويبقى معك للتجديدات والمطالبات." },
    faqs: [
      { q: { en: "Do I really need insurance just to renew my istimara?", ar: "هل أحتاج التأمين فعلًا لمجرد تجديد الاستمارة؟" }, a: { en: "Yes. An active policy is a precondition for renewing your vehicle registration (istimara), and the renewal will not go through without it. Valid cover is also required before any ownership transfer. We issue the policy instantly so neither transaction is held up.", ar: "نعم. الوثيقة السارية شرطٌ مسبق لتجديد استمارة المركبة، ولن يتمّ التجديد بدونها. كما تُشترط التغطية السارية قبل أي نقل ملكية. ونحن نُصدر الوثيقة فوريًّا حتى لا تتعطّل أيٌّ من المعاملتين." } },
      { q: { en: "What is the difference between third-party and comprehensive cover?", ar: "ما الفرق بين التأمين ضد الغير والشامل؟" }, a: { en: "Third-party (the legal minimum) covers damage and injury your vehicle causes to others, but nothing for your own car. Comprehensive adds protection for your own vehicle against accidents, theft, and fire, per the policy terms. We recommend the right one based on your car's value and how you use it.", ar: "التأمين ضد الغير (الحد الأدنى القانوني) يغطّي ما تُسبّبه مركبتك للآخرين من أضرارٍ وإصابات، دون سيارتك أنت. أما الشامل فيضيف حمايةً لمركبتك ضد الحوادث والسرقة والحريق وفق شروط الوثيقة. ونوصيك بالأنسب بحسب قيمة سيارتك وطريقة استخدامك لها." } },
      { q: { en: "Why is my premium higher than a friend's for a similar car?", ar: "لماذا قسطي أعلى من قسط صديقي لسيارةٍ مشابهة؟" }, a: { en: "Premiums depend on your personal Najm claims history, your no-claims record, driver age and experience, and the vehicle's value — not the car model alone. A clean record earns a discount that grows yearly. We check your Najm record first so you receive every discount you've actually earned.", ar: "يعتمد القسط على سجلّ مطالباتك في نجم، وسجلّك الخالي من المطالبات، وعمر السائق وخبرته، وقيمة المركبة — لا على الطراز وحده. والسجلّ النظيف يمنح خصمًا يتنامى سنويًّا. ونراجع سجلّك في نجم أولًا لتحصل على كل خصمٍ استحققته فعلًا." } },
      { q: { en: "What happens if I let my insurance lapse?", ar: "ماذا يحدث إذا انقطع تأميني؟" }, a: { en: "Driving without insurance is a violation, and a lapse can block registration renewal or a sale. Just as important, leaving cover lapsed for more than thirty days puts your no-claims discount at risk and can return you to the higher base rate. We send renewal reminders ahead of time to protect both your cover and your discount.", ar: "القيادة دون تأمين مخالفة، وانقطاع الوثيقة قد يُعطّل تجديد التسجيل أو عملية بيع. والأهم أن ترك التغطية منقطعة لأكثر من ثلاثين يومًا يُعرّض خصم عدم المطالبة للخطر وقد يعيدك إلى السعر الأساسي الأعلى. لذا نرسل تنبيهات تجديد مسبقة لحماية تغطيتك وخصمك معًا." } },
      { q: { en: "If I have an accident, do you help with the claim?", ar: "إذا وقع لي حادث، هل تساعدونني في المطالبة؟" }, a: { en: "Yes. Accidents in Saudi Arabia are reported through Najm, which documents the incident and assigns fault. We guide you through reporting and filing the claim with your insurer and follow up until it is settled. You are not left to handle the process alone.", ar: "نعم. تُبلَّغ الحوادث في المملكة عبر نجم الذي يوثّق الواقعة ويحدّد نسبة المسؤولية. ونرشدك خلال الإبلاغ ورفع المطالبة لدى شركتك ونتابع حتى تسويتها. ولن نتركك تتولّى الإجراء وحدك." } },
    ],
  },
  {
    slug: "vehicle-ownership-transfer",
    category: "government-services",
    icon: "scroll-text",
    featured: true,
    image: "/images/services/vehicle-ownership-transfer.webp",
    title: { en: "Vehicle Ownership Transfer", ar: "نقل ملكية السيارات" },
    excerpt: { en: "Transfer vehicle ownership in Saudi Arabia electronically through Absher and Tam — every condition verified, insurance and inspection arranged, completed without the hassle.", ar: "ننقل ملكية سيارتك في السعودية إلكترونيًا عبر أبشر ومنصة تم — نتحقق من كل شرط، ونرتّب التأمين والفحص، ونُنجز المعاملة دون عناء." },
    overview: [
      { en: "Transferring vehicle ownership in Saudi Arabia is now an electronic process completed through the Absher (أبشر) platform and the Tam (تم) platform, or through an authorized center (مركز معتمد). For the transfer to go through, several conditions must all be satisfied at once: a valid insurance policy issued in the buyer's name, a vehicle record clear of outstanding traffic violations, a valid periodic technical inspection (الفحص الدوري / MVPI), valid registration (الاستمارة), and payment of the government transfer fee. If any single condition is missing, the system blocks the sale — which is where most buyers and sellers get stuck.", ar: "أصبح نقل ملكية المركبات في السعودية إجراءً إلكترونيًا يُنجَز عبر منصة أبشر ومنصة تم، أو من خلال مركز معتمد. ولإتمام النقل يجب أن تتحقق عدة شروط في آنٍ واحد: وثيقة تأمين سارية صادرة باسم المشتري، وسجل مركبة خالٍ من المخالفات المرورية غير المسددة، وفحص فني دوري ساري المفعول (الفحص الدوري)، واستمارة سارية المفعول، وسداد الرسم الحكومي لنقل الملكية. وإذا تخلّف أيّ شرط واحد، يوقف النظام عملية المبايعة — وهنا يتعثّر معظم البائعين والمشترين." },
      { en: "At Omnera One we handle the entire transfer on your behalf. We begin by auditing the vehicle's record up front — checking the registration validity, the periodic inspection status, and the traffic-violation record on Absher — so there are no surprises mid-transaction. Where a condition is missing, we arrange it for you: we issue the buyer's insurance policy through a licensed insurer, book and complete the periodic inspection (الفحص الدوري), and ensure any outstanding violations are settled before we initiate the sale on Tam or at an authorized center.", ar: "في أومنيرا ون نتولّى المعاملة بالكامل نيابةً عنك. نبدأ بمراجعة سجل المركبة مسبقًا — نتحقق من سريان الاستمارة، وحالة الفحص الدوري، وسجل المخالفات المرورية عبر أبشر — حتى لا تظهر أي مفاجآت في منتصف المعاملة. وحين يكون أحد الشروط ناقصًا، نوفّره لك: نُصدر وثيقة تأمين المشتري عبر شركة تأمين مرخّصة، ونحجز الفحص الدوري وننجزه، ونتأكد من تسوية أي مخالفات قائمة قبل أن نبدأ المبايعة عبر منصة تم أو في مركز معتمد." },
      { en: "The service works for individuals and for companies and establishments alike (نقل ملكية لمنشأة) — whether you are selling a single private car or moving a vehicle into or out of a company's commercial registration (السجل التجاري) through Absher Business (أبشر أعمال). Because the e-service is fully electronic where the conditions allow, the buyer and seller often do not need to attend in person at all; the transfer is confirmed once the buyer approves the sale request on the platform. Government fees are passed through at cost, and a consultant confirms the final price and timeline with you before we proceed.", ar: "تخدم هذه الخدمة الأفراد والشركات والمنشآت على حدٍّ سواء (نقل ملكية لمنشأة) — سواء كنت تبيع سيارة خاصة واحدة أو تنقل مركبة من السجل التجاري لمنشأة أو إليه عبر أبشر أعمال. ولأن الخدمة إلكترونية بالكامل حيثما تسمح الشروط، فغالبًا لا يحتاج البائع والمشتري إلى الحضور شخصيًا إطلاقًا؛ إذ تُعتمد المبايعة بمجرد موافقة المشتري على طلب البيع عبر المنصة. وتُمرَّر الرسوم الحكومية كما هي، ويؤكد لك أحد المستشارين السعر النهائي والمدة قبل أن نبدأ." },
    ],
    audience: [
      { en: "Individuals buying or selling a private car who want the transfer handled without queues or back-and-forth", ar: "الأفراد الذين يبيعون أو يشترون سيارة خاصة ويرغبون في إنجاز النقل دون طوابير أو تكرار للإجراءات" },
      { en: "Companies and establishments adding or removing vehicles from their commercial registration (نقل ملكية لمنشأة)", ar: "الشركات والمنشآت التي تضيف مركبات إلى سجلها التجاري أو تزيلها منه (نقل ملكية لمنشأة)" },
      { en: "Buyers and sellers blocked by a missing condition — no insurance, an expired inspection, or unpaid violations", ar: "البائعون والمشترون المتعثّرون بسبب شرط ناقص — غياب التأمين، أو انتهاء الفحص، أو مخالفات غير مسددة" },
    ],
    benefits: [
      { en: "Every condition verified up front — no failed transfer at the counter", ar: "التحقق من كل شرط مسبقًا — دون فشل المعاملة عند التنفيذ" },
      { en: "Insurance in the buyer's name and periodic inspection arranged for you", ar: "إصدار التأمين باسم المشتري وترتيب الفحص الدوري نيابةً عنك" },
      { en: "Outstanding traffic violations identified and settled before the sale", ar: "رصد المخالفات المرورية القائمة وتسويتها قبل المبايعة" },
      { en: "Completed electronically via Tam/Absher — often no in-person attendance", ar: "إنجاز إلكتروني عبر منصة تم وأبشر — غالبًا دون حضور شخصي" },
      { en: "Works for individuals and for companies and establishments", ar: "يخدم الأفراد والشركات والمنشآت على حدٍّ سواء" },
      { en: "Government fees passed through at cost — full transparency", ar: "الرسوم الحكومية تُمرَّر كما هي — شفافية كاملة" },
    ],
    steps: [
      { title: { en: "Record audit", ar: "مراجعة السجل" }, text: { en: "We check the vehicle's registration validity, periodic inspection status, and traffic-violation record on Absher before anything else.", ar: "نتحقق من سريان الاستمارة وحالة الفحص الدوري وسجل المخالفات المرورية عبر أبشر قبل أي خطوة أخرى." } },
      { title: { en: "Insurance in buyer's name", ar: "التأمين باسم المشتري" }, text: { en: "We issue a valid insurance policy for the vehicle in the buyer's name through a licensed insurer.", ar: "نُصدر وثيقة تأمين سارية للمركبة باسم المشتري عبر شركة تأمين مرخّصة." } },
      { title: { en: "Inspection and violations", ar: "الفحص والمخالفات" }, text: { en: "We book and complete the periodic technical inspection (MVPI) and settle any outstanding violations.", ar: "نحجز الفحص الفني الدوري وننجزه، ونسوّي أي مخالفات قائمة على المركبة." } },
      { title: { en: "Initiate the sale", ar: "بدء المبايعة" }, text: { en: "We initiate the ownership transfer on Tam/Absher (or at an authorized center) under the correct buyer and seller details.", ar: "نبدأ نقل الملكية عبر منصة تم وأبشر (أو في مركز معتمد) ببيانات البائع والمشتري الصحيحة." } },
      { title: { en: "Buyer approval and fee", ar: "موافقة المشتري والرسم" }, text: { en: "The buyer approves the request on the platform and the government transfer fee is paid.", ar: "يوافق المشتري على الطلب عبر المنصة ويُسدَّد الرسم الحكومي لنقل الملكية." } },
      { title: { en: "New registration issued", ar: "إصدار الاستمارة الجديدة" }, text: { en: "Ownership is transferred and the new registration (الاستمارة) is issued in the buyer's name.", ar: "تُنقَل الملكية وتُصدَر الاستمارة الجديدة باسم المشتري." } },
    ],
    requirements: [
      { en: "Valid registration (الاستمارة) for the vehicle being sold", ar: "استمارة سارية المفعول للمركبة محل البيع" },
      { en: "Valid periodic technical inspection (الفحص الدوري / MVPI)", ar: "فحص فني دوري ساري المفعول (الفحص الدوري)" },
      { en: "Verified identities of buyer and seller (or the establishment's commercial registration for a company transfer)", ar: "إثبات هوية البائع والمشتري (أو السجل التجاري للمنشأة في حال النقل لمنشأة)" },
      { en: "A traffic record clear of unpaid violations on the vehicle", ar: "سجل مروري خالٍ من المخالفات غير المسددة على المركبة" },
    ],
    deliverables: [
      { en: "Completed ownership transfer on Tam/Absher with new registration in the buyer's name", ar: "نقل ملكية مكتمل عبر منصة تم وأبشر مع استمارة جديدة باسم المشتري" },
      { en: "Valid insurance policy issued in the buyer's name", ar: "وثيقة تأمين سارية صادرة باسم المشتري" },
      { en: "Confirmation that the periodic inspection and any violations are cleared", ar: "تأكيد إنجاز الفحص الدوري وتسوية أي مخالفات" },
    ],
    timeline: { en: "Often completed the same day once all conditions are met; arranging missing insurance or inspection may add a short period.", ar: "تُنجَز غالبًا في اليوم نفسه متى اكتملت الشروط؛ وقد يضيف ترتيب التأمين أو الفحص الناقص مدة قصيرة." },
    bestFor: { en: "Anyone whose vehicle sale is stalled by a missing condition and who wants it resolved and transferred in one go.", ar: "كل من تعثّرت مبايعته بسبب شرط ناقص ويرغب في معالجته وإتمام النقل دفعةً واحدة." },
    supportType: { en: "A dedicated consultant manages the transfer end to end and keeps you updated until the new registration is issued.", ar: "مستشار مخصّص يدير المعاملة من البداية إلى النهاية ويبقيك على اطّلاع حتى تُصدَر الاستمارة الجديدة." },
    faqs: [
      { q: { en: "Do the buyer and seller need to be physically present?", ar: "هل يجب حضور البائع والمشتري شخصيًا؟" }, a: { en: "In most cases, no. Where the e-service conditions are met, the transfer is completed electronically on Tam/Absher and confirmed once the buyer approves the sale request — neither party needs to attend in person. We use an authorized center only when a specific case requires it.", ar: "في معظم الحالات لا. فحيثما تتحقق شروط الخدمة الإلكترونية، يُنجَز النقل إلكترونيًا عبر منصة تم وأبشر ويُعتمد بمجرد موافقة المشتري على طلب البيع — دون حاجة لحضور أيٍّ من الطرفين شخصيًا. ولا نلجأ إلى مركز معتمد إلا عندما تستلزم حالة بعينها ذلك." } },
      { q: { en: "What stops a transfer from going through?", ar: "ما الذي يمنع إتمام نقل الملكية؟" }, a: { en: "The transfer is blocked if any condition is missing: no valid insurance in the buyer's name, an expired or missing periodic inspection, unpaid traffic violations on the vehicle, or an expired registration. We verify all of these up front and resolve them before initiating the sale, so the transfer does not fail midway.", ar: "يُمنَع النقل إذا تخلّف أيّ شرط: غياب تأمين ساري باسم المشتري، أو انتهاء الفحص الدوري أو عدم وجوده، أو وجود مخالفات مرورية غير مسددة على المركبة، أو انتهاء الاستمارة. ونحن نتحقق من ذلك كله مسبقًا ونعالجه قبل بدء المبايعة، حتى لا تتعثّر المعاملة في منتصفها." } },
      { q: { en: "Who pays for the insurance and inspection?", ar: "من يتحمّل تكلفة التأمين والفحص؟" }, a: { en: "The buyer's insurance and the periodic inspection are part of the transfer requirements and are billed at their actual cost. We arrange both on your behalf, pass the government and provider fees through transparently, and a consultant confirms the full breakdown with you before any payment.", ar: "يُعدّ تأمين المشتري والفحص الدوري جزءًا من متطلبات النقل ويُحتسبان بتكلفتهما الفعلية. ونحن نرتّب الاثنين نيابةً عنك، ونمرّر الرسوم الحكومية ورسوم مزوّد الخدمة بشفافية، ويؤكد لك أحد المستشارين التفاصيل الكاملة قبل أي سداد." } },
      { q: { en: "How much is the government transfer fee?", ar: "كم يبلغ الرسم الحكومي لنقل الملكية؟" }, a: { en: "The government transfer fee is typically a modest fixed amount, with an additional platform service charge for completing the sale. Because amounts can change, we do not quote a fixed figure as fact; a consultant confirms the exact fees, paid at cost, before we proceed.", ar: "يكون الرسم الحكومي لنقل الملكية عادةً مبلغًا ثابتًا متواضعًا، مع رسم خدمة إضافي عبر المنصة لإتمام المبايعة. ولأن المبالغ قد تتغيّر، لا نذكر رقمًا ثابتًا كحقيقة قاطعة؛ بل يؤكد لك أحد المستشارين الرسوم الدقيقة، التي تُسدَّد بتكلفتها، قبل أن نبدأ." } },
      { q: { en: "Can you transfer a vehicle into or out of a company's name?", ar: "هل يمكنكم نقل مركبة إلى اسم منشأة أو منها؟" }, a: { en: "Yes. We handle transfers for companies and establishments (نقل ملكية لمنشأة) through Absher Business, whether you are registering a vehicle under the company's commercial registration (السجل التجاري) or moving it out to an individual. The same conditions apply, and we verify the establishment's details and authorizations before initiating the transfer.", ar: "نعم. نتولّى عمليات النقل للشركات والمنشآت (نقل ملكية لمنشأة) عبر أبشر أعمال، سواء كنت تسجّل مركبة ضمن السجل التجاري للمنشأة أو تنقلها منها إلى فرد. وتنطبق الشروط نفسها، ونتحقق من بيانات المنشأة وتفويضاتها قبل بدء النقل." } },
    ],
  },
  {
    slug: "traffic-services",
    category: "government-services",
    icon: "map-pin",
    featured: true,
    image: "/images/services/traffic-services.webp",
    title: { en: "Traffic (Muroor) Services", ar: "خدمات المرور" },
    excerpt: { en: "We handle every General Department of Traffic transaction for you — registration renewal, plates, violations and objections, driving licences, and lifting holds — through Absher and Tam.", ar: "نتولّى نيابةً عنك كل معاملات الإدارة العامة للمرور — تجديد الاستمارة، واللوحات، والمخالفات والاعتراض عليها، ورخص القيادة، ورفع الإيقاف — عبر أبشر ومنصة تم." },
    overview: [
      { en: "Most General Department of Traffic (الإدارة العامة للمرور) transactions now run electronically through Absher (أبشر) for individuals and Tam (منصة تم) for establishments, but each one carries its own conditions that can quietly block you. We run the full range on your behalf: renewing vehicle registration (تجديد الاستمارة / رخصة السير), issuing and replacing plates (اللوحات), paying and objecting to traffic violations (المخالفات), issuing renewing and replacing driving licences, updating vehicle data, and lifting holds (إيقاف) on a vehicle or its registration.", ar: "تجري معظم معاملات الإدارة العامة للمرور اليوم إلكترونيًا عبر أبشر للأفراد ومنصة تم للمنشآت، غير أن لكل معاملة شروطًا قد تعرقلك دون أن تدري. نتولّى نيابةً عنك النطاق الكامل: تجديد الاستمارة (رخصة السير)، وإصدار اللوحات وإبدالها، وسداد المخالفات المرورية والاعتراض عليها، وإصدار رخص القيادة وتجديدها وإبدالها، وتحديث بيانات المركبة، ورفع الإيقاف عن المركبة أو استمارتها." },
      { en: "Vehicle registration in particular will not renew unless three prerequisites are in place at the same time: a valid periodic technical inspection (الفحص الدوري / MVPI), a valid motor insurance policy covering the renewal term, and a clean violation record with no unpaid fines. We verify each condition first, coordinate the inspection where needed, and settle or formally object to any outstanding violations before completing the renewal — so the transaction goes through on the first attempt rather than bouncing back.", ar: "ولا تُجدَّد استمارة المركبة على وجه الخصوص ما لم تتوفر ثلاثة متطلبات في آنٍ واحد: فحص فني دوري سارٍ، ووثيقة تأمين سارية تغطي مدة التجديد، وسجل مخالفات خالٍ من الغرامات غير المسددة. نتحقق من كل شرط أولًا، وننسّق الفحص عند الحاجة، ونسدّد أو نعترض رسميًا على أي مخالفات قائمة قبل إتمام التجديد — لتنجح المعاملة من المحاولة الأولى لا أن تُردّ." },
      { en: "Beyond one-off transactions, our real value is preventing fines and lapses from ever building up. We track every expiry date — registration, inspection, insurance, and driving licence — and renew ahead of the deadline (registration carries a grace period of roughly 60 days, but we never rely on it), while filing objections within the regulated window (typically 30 days from when a violation is registered) so disputable fines are challenged in time. For companies, we manage entire fleets through Tam on a single tracked schedule, and government fees are always passed through at cost with the final price confirmed by your consultant before we proceed.", ar: "وأبعد من المعاملات المفردة، تكمن قيمتنا الحقيقية في منع تراكم الغرامات والانتهاءات من الأساس. نتابع كل تاريخ انتهاء — الاستمارة، والفحص، والتأمين، ورخصة القيادة — ونجدّد قبل الموعد النهائي (وللاستمارة مهلة سماح تبلغ نحو 60 يومًا، غير أننا لا نعوّل عليها)، مع رفع الاعتراضات خلال المهلة النظامية (وغالبًا 30 يومًا من تاريخ تسجيل المخالفة) للطعن في الغرامات القابلة للنزاع في وقتها. أما للشركات، فندير أساطيل كاملة عبر منصة تم على جدول واحد متابَع، وتُمرَّر الرسوم الحكومية دائمًا كما هي مع تأكيد المستشار للسعر النهائي قبل المباشرة." },
    ],
    audience: [
      { en: "Individuals renewing registration, plates, or a driving licence without queues", ar: "الأفراد الراغبون في تجديد الاستمارة أو اللوحات أو رخصة القيادة دون طوابير" },
      { en: "Companies and establishments managing vehicle fleets through Tam", ar: "الشركات والمنشآت التي تُدير أساطيل المركبات عبر منصة تم" },
      { en: "Owners facing a hold (إيقاف) on a vehicle or accumulated traffic violations", ar: "المُلّاك الذين يواجهون إيقافًا على مركبة أو تراكمًا في المخالفات المرورية" },
    ],
    benefits: [
      { en: "Every Muroor transaction handled for you, end to end", ar: "كل معاملة مرورية تُنجَز نيابةً عنك من البداية إلى النهاية" },
      { en: "Expiry tracking that prevents fines from ever accumulating", ar: "متابعة لتواريخ الانتهاء تمنع تراكم الغرامات نهائيًا" },
      { en: "Formal objections to unjust fines filed within the legal window", ar: "اعتراضات رسمية على الغرامات غير المستحقة تُرفع خلال المهلة النظامية" },
      { en: "Holds (إيقاف) diagnosed and lifted at the source", ar: "حالات الإيقاف تُشخَّص وتُرفع من جذرها" },
      { en: "Government fees passed through at cost — full transparency", ar: "الرسوم الحكومية تُمرَّر كما هي — شفافية كاملة" },
      { en: "One dashboard for an entire fleet's registrations and licences", ar: "لوحة واحدة لجميع استمارات الأسطول ورخصه" },
    ],
    steps: [
      { title: { en: "Review & access", ar: "المراجعة والاطّلاع" }, text: { en: "We review your vehicle and licence status on Absher or Tam and identify what is due or blocked.", ar: "نراجع حالة مركبتك ورخصتك على أبشر أو تم ونحدّد ما هو مستحق أو متوقف." } },
      { title: { en: "Prerequisites", ar: "المتطلبات المسبقة" }, text: { en: "We confirm a valid periodic inspection (الفحص الدوري) and valid motor insurance before any renewal.", ar: "نتحقق من سريان الفحص الدوري ووثيقة التأمين قبل أي تجديد." } },
      { title: { en: "Clear obstacles", ar: "إزالة العوائق" }, text: { en: "We settle or formally object to outstanding violations and lift any hold (إيقاف) on the record.", ar: "نسدّد المخالفات القائمة أو نعترض عليها رسميًا ونرفع أي إيقاف مسجّل." } },
      { title: { en: "Execute the transaction", ar: "تنفيذ المعاملة" }, text: { en: "We complete the registration renewal, plate issuance, or licence service through the correct platform.", ar: "نُنجز تجديد الاستمارة أو إصدار اللوحة أو خدمة الرخصة عبر المنصة الصحيحة." } },
      { title: { en: "Deliver documents", ar: "تسليم الوثائق" }, text: { en: "We hand over the updated registration, plates, or licence and confirm the record is clean.", ar: "نُسلّمك الاستمارة المحدّثة أو اللوحات أو الرخصة ونؤكد خلوّ السجل." } },
      { title: { en: "Track & remind", ar: "المتابعة والتذكير" }, text: { en: "We log every expiry date and renew ahead of time so nothing ever lapses.", ar: "نسجّل كل تاريخ انتهاء ونجدّد مسبقًا حتى لا يفوت أي التزام." } },
    ],
    requirements: [
      { en: "Vehicle registration (الاستمارة) and owner ID, or a fleet list for companies", ar: "استمارة المركبة وهوية المالك، أو قائمة الأسطول للشركات" },
      { en: "Valid periodic inspection certificate (الفحص الدوري) or authorisation to arrange it", ar: "شهادة فحص دوري سارية أو تفويض بترتيبها" },
      { en: "Valid motor insurance policy covering the renewal period", ar: "وثيقة تأمين سارية تُغطي مدة التجديد" },
      { en: "Absher or Tam authorisation so we can act on your behalf", ar: "تفويض عبر أبشر أو تم لتمكيننا من العمل نيابةً عنك" },
    ],
    deliverables: [
      { en: "Renewed vehicle registration, new or replacement plates, or updated driving licence", ar: "استمارة مركبة مجدّدة، أو لوحات جديدة أو بديلة، أو رخصة قيادة محدّثة" },
      { en: "Settled or successfully objected violations and a cleared record", ar: "مخالفات مسدّدة أو معترَض عليها بنجاح وسجل خالٍ" },
      { en: "A tracked schedule of all upcoming registration and licence expiries", ar: "جدول متابَع بجميع تواريخ انتهاء الاستمارات والرخص القادمة" },
    ],
    timeline: { en: "Most online transactions are completed within 1–3 business days once prerequisites are met.", ar: "تُنجَز معظم المعاملات الإلكترونية خلال يوم إلى ثلاثة أيام عمل بعد استيفاء المتطلبات." },
    bestFor: { en: "Owners and fleets who want Muroor obligations handled and tracked, not chased.", ar: "المُلّاك والأساطيل الراغبون في إنجاز التزامات المرور ومتابعتها بدلًا من ملاحقتها." },
    supportType: { en: "A dedicated consultant who manages your vehicle and licence file end to end.", ar: "مستشار مخصّص يُدير ملف مركبتك ورخصتك من البداية إلى النهاية." },
    faqs: [
      { q: { en: "Why won't my vehicle registration renew?", ar: "لماذا لا يتم تجديد استمارة مركبتي؟" }, a: { en: "Renewal on Absher is blocked unless three conditions are met: a valid periodic inspection (الفحص الدوري), a valid motor insurance policy, and no unpaid traffic violations. We check all three, clear whatever is missing, and then complete the renewal in one pass. You don't have to figure out which condition is failing — we diagnose it for you.", ar: "يُحجَب التجديد على أبشر ما لم تُستوفَ ثلاثة شروط: فحص دوري سارٍ، ووثيقة تأمين سارية، وعدم وجود مخالفات غير مسدّدة. نتحقق من الثلاثة جميعًا، ونعالج ما هو ناقص، ثم نُكمل التجديد دفعة واحدة. ولن تحتاج إلى معرفة أيُّ الشروط غير مُستوفى — فنحن نُشخّصه نيابةً عنك." } },
      { q: { en: "Can you object to a traffic violation I believe is wrong?", ar: "هل يمكنكم الاعتراض على مخالفة مرورية أراها غير صحيحة؟" }, a: { en: "Yes. We file a formal objection (الاعتراض) through the Absher traffic service within the regulated window — typically 30 days from when the violation is registered — and the specialised committee at the General Department of Traffic reviews it. Note that an objection cannot be filed on a violation that has already been paid, so contact us before settling a disputed fine. We will tell you honestly whether the objection has a realistic chance.", ar: "نعم. نرفع اعتراضًا رسميًا عبر خدمة المرور في أبشر خلال المهلة النظامية — وغالبًا 30 يومًا من تاريخ تسجيل المخالفة — لتنظر فيه اللجنة المختصة في الإدارة العامة للمرور. وننبّه إلى أنه لا يمكن الاعتراض على مخالفة سُدّدت قيمتها مسبقًا، لذا تواصل معنا قبل سداد أي غرامة محل نزاع. وسنخبرك بصدق إن كان للاعتراض فرصة واقعية." } },
      { q: { en: "How much does registration renewal cost?", ar: "كم تبلغ تكلفة تجديد الاستمارة؟" }, a: { en: "Government renewal fees for a private vehicle are typically around SAR 100 per year (often settled as roughly SAR 300 for a three-year term), with higher fees for large or commercial vehicles, plus separate costs for inspection and insurance. A late-renewal fine may also apply once the grace period (around 60 days) has passed. These government fees are passed through at cost, and your consultant confirms the final figure before we proceed.", ar: "تبلغ رسوم التجديد الحكومية للمركبة الخاصة عادةً نحو 100 ريال عن كل سنة (وغالبًا ما تُسدَّد قرابة 300 ريال عن مدة ثلاث سنوات)، وترتفع للمركبات الكبيرة أو التجارية، إضافةً إلى تكاليف منفصلة للفحص والتأمين. وقد تُطبَّق غرامة تأخير بعد انتهاء مهلة السماح (نحو 60 يومًا). وتُمرَّر هذه الرسوم الحكومية كما هي، ويؤكد لك المستشار المبلغ النهائي قبل المباشرة." } },
      { q: { en: "There is a hold (إيقاف) on my vehicle — can you lift it?", ar: "يوجد إيقاف على مركبتي — هل يمكنكم رفعه؟" }, a: { en: "In most cases, yes. We first identify the source of the hold — an unpaid fine, an expired inspection, a lapsed insurance policy, or an order from a court or another authority — because each is lifted differently. Once the underlying cause is resolved, we clear the hold and confirm the record is clean. If the order comes from outside Muroor, we tell you exactly which authority must release it.", ar: "في معظم الحالات نعم. نحدّد أولًا مصدر الإيقاف — مخالفة غير مسدّدة أو فحص منتهٍ أو تأمين منقضٍ أو أمر من جهة قضائية أو جهة أخرى — لأن لكلٍّ منها طريقة رفع مختلفة. وبمجرد معالجة السبب الأساسي نرفع الإيقاف ونؤكد خلوّ السجل. وإن كان الأمر صادرًا من خارج المرور، نُخبرك بدقة بالجهة التي يجب أن ترفعه." } },
      { q: { en: "Can you manage a whole company fleet, not just one car?", ar: "هل يمكنكم إدارة أسطول شركة كامل لا سيارة واحدة فقط؟" }, a: { en: "Yes — fleet management is a core part of this service. We manage establishment vehicles through Tam (منصة تم), keep every registration, inspection, and insurance date on one tracked schedule, and renew ahead of each deadline so the fleet never has a lapsed or held vehicle. You receive a single consolidated view instead of chasing dozens of separate expiries.", ar: "نعم — إدارة الأساطيل جزء أساسي من هذه الخدمة. نُدير مركبات المنشآت عبر منصة تم، ونُبقي كل تواريخ الاستمارات والفحص والتأمين على جدول واحد متابَع، ونجدّد قبل كل موعد نهائي حتى لا يكون في الأسطول مركبة منتهية أو موقوفة. وتحصل على رؤية موحّدة واحدة بدلًا من ملاحقة عشرات تواريخ الانتهاء المنفصلة." } },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategoryId): Service[] {
  return services.filter((s) => s.category === category);
}

export function getCategory(id: ServiceCategoryId): ServiceCategory {
  return serviceCategories.find((c) => c.id === id)!;
}
