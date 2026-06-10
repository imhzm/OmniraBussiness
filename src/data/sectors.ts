import type { L } from "@/i18n/config";

export type Sector = {
  slug: string;
  icon: string;
  image: string;
  name: L;
  short: L;
  opportunity: "high" | "very-high" | "growing";
  overview: L[];
  drivers: L[];
  initiatives: L[];
  opportunities: L[];
  challenges: L[];
  relatedServices: string[];
};

export const sectors: Sector[] = [
  {
    slug: "energy",
    icon: "zap",
    image: "/images/sectors/energy.webp",
    name: { en: "Energy & Renewables", ar: "الطاقة والطاقة المتجددة" },
    short: {
      en: "From the world's largest oil exporter to a global green hydrogen and solar leader.",
      ar: "من أكبر مصدّر للنفط في العالم إلى ريادة عالمية في الهيدروجين الأخضر والطاقة الشمسية.",
    },
    opportunity: "very-high",
    overview: [
      {
        en: "Saudi Arabia is investing heavily to generate 50% of its electricity from renewables by 2030, while NEOM hosts one of the world's largest green hydrogen projects. The energy transition is creating a full supply chain of opportunities — from manufacturing and EPC to services and technology.",
        ar: "تستثمر السعودية بكثافة لتوليد 50% من كهربائها من مصادر متجددة بحلول 2030، فيما تحتضن نيوم أحد أكبر مشاريع الهيدروجين الأخضر في العالم. هذا التحول في الطاقة يخلق سلسلة كاملة من الفرص — من التصنيع والمقاولات إلى الخدمات والتقنية.",
      },
    ],
    drivers: [
      { en: "National Renewable Energy Program tenders", ar: "مناقصات البرنامج الوطني للطاقة المتجددة" },
      { en: "NEOM green hydrogen at global scale", ar: "هيدروجين نيوم الأخضر بمقياس عالمي" },
      { en: "Local content requirements opening supplier slots", ar: "متطلبات المحتوى المحلي تفتح المجال للموردين" },
    ],
    initiatives: [
      { en: "Saudi Green Initiative", ar: "مبادرة السعودية الخضراء" },
      { en: "Liquid fuel displacement program", ar: "برنامج إزاحة الوقود السائل" },
    ],
    opportunities: [
      { en: "Solar/wind component manufacturing & assembly", ar: "تصنيع وتجميع مكونات الطاقة الشمسية والرياح" },
      { en: "Energy efficiency & ESCO services", ar: "خدمات كفاءة الطاقة وشركات الـESCO" },
      { en: "Grid technology and storage solutions", ar: "تقنيات الشبكات وحلول التخزين" },
    ],
    challenges: [
      { en: "Local content (IKTVA-style) thresholds in tenders", ar: "نسب المحتوى المحلي المطلوبة في المنافسات" },
      { en: "Pre-qualification requirements for mega-projects", ar: "متطلبات التأهيل المسبق للمشاريع الكبرى" },
    ],
    relatedServices: ["business-setup", "free-zones", "saudi-partners"],
  },
  {
    slug: "finance-fintech",
    icon: "banknote",
    image: "/images/sectors/finance.webp",
    name: { en: "Finance & Fintech", ar: "المالية والتقنية المالية" },
    short: {
      en: "A regulator-backed fintech boom under the Financial Sector Development Program.",
      ar: "طفرة تقنية مالية مدعومة من المنظمين ضمن برنامج تطوير القطاع المالي.",
    },
    opportunity: "very-high",
    overview: [
      {
        en: "SAMA's regulatory sandbox, open banking framework, and dozens of new fintech licenses have made Riyadh a regional fintech hub. The Financial Sector Development Program targets hundreds of fintech companies and a largely cashless economy by 2030.",
        ar: "جعل المختبر التنظيمي للبنك المركزي السعودي وإطار الخدمات المصرفية المفتوحة وعشرات التراخيص الجديدة من الرياض مركزًا إقليميًا للتقنية المالية. ويستهدف برنامج تطوير القطاع المالي مئات شركات التقنية المالية واقتصادًا شبه غير نقدي بحلول 2030.",
      },
    ],
    drivers: [
      { en: "Open banking & instant payments infrastructure", ar: "الخدمات المصرفية المفتوحة والمدفوعات الفورية" },
      { en: "Young, digital-first consumer base", ar: "قاعدة مستهلكين شابة رقمية بطبعها" },
      { en: "Government push for cashless payments", ar: "توجه حكومي نحو المدفوعات غير النقدية" },
    ],
    initiatives: [
      { en: "Fintech Saudi & SAMA sandbox", ar: "فنتك السعودية والمختبر التنظيمي" },
      { en: "Financial Sector Development Program", ar: "برنامج تطوير القطاع المالي" },
    ],
    opportunities: [
      { en: "Payments, lending, and WealthTech licenses", ar: "تراخيص المدفوعات والتمويل وإدارة الثروات" },
      { en: "InsurTech under the Insurance Authority", ar: "تقنية التأمين تحت مظلة هيئة التأمين" },
      { en: "B2B financial infrastructure and APIs", ar: "البنية المالية للشركات وواجهات البرمجة" },
    ],
    challenges: [
      { en: "Licensing capital requirements by activity", ar: "متطلبات رأس المال حسب نوع الترخيص" },
      { en: "Data residency and cybersecurity controls", ar: "متطلبات إقامة البيانات وضوابط الأمن السيبراني" },
    ],
    relatedServices: ["business-setup", "consultation", "accounting-services"],
  },
  {
    slug: "logistics-transport",
    icon: "truck",
    image: "/images/sectors/logistics.webp",
    name: { en: "Logistics & Transport", ar: "الخدمات اللوجستية والنقل" },
    short: {
      en: "The Kingdom is becoming the logistics bridge between three continents.",
      ar: "تتحول المملكة إلى الجسر اللوجستي الرابط بين ثلاث قارات.",
    },
    opportunity: "high",
    overview: [
      {
        en: "The National Transport and Logistics Strategy aims to position Saudi Arabia as a top-10 global logistics hub — with new airports, the expansion of Jeddah Islamic Port, dedicated logistics zones, and the landbridge rail project connecting the Red Sea to the Gulf.",
        ar: "تهدف الاستراتيجية الوطنية للنقل والخدمات اللوجستية إلى وضع السعودية ضمن أفضل 10 مراكز لوجستية عالميًا — بمطارات جديدة وتوسعة ميناء جدة الإسلامي ومناطق لوجستية مخصصة ومشروع الجسر البري الرابط بين البحر الأحمر والخليج.",
      },
    ],
    drivers: [
      { en: "E-commerce growth demanding last-mile networks", ar: "نمو التجارة الإلكترونية وطلبها لشبكات التوصيل" },
      { en: "Riyadh Integrated Logistics Zone incentives", ar: "حوافز المنطقة اللوجستية المتكاملة بالرياض" },
      { en: "Mega-project construction supply chains", ar: "سلاسل إمداد مشاريع البناء الكبرى" },
    ],
    initiatives: [
      { en: "National Transport & Logistics Strategy", ar: "الاستراتيجية الوطنية للنقل والخدمات اللوجستية" },
      { en: "King Salman International Airport program", ar: "برنامج مطار الملك سلمان الدولي" },
    ],
    opportunities: [
      { en: "3PL/4PL services and bonded warehousing", ar: "خدمات الطرف الثالث والرابع والمستودعات الجمركية" },
      { en: "Cold chain for food & pharma", ar: "سلاسل التبريد للغذاء والدواء" },
      { en: "Fleet technology and freight platforms", ar: "تقنيات الأساطيل ومنصات الشحن" },
    ],
    challenges: [
      { en: "Licensing across multiple transport authorities", ar: "التراخيص عبر أكثر من جهة نقل" },
      { en: "Saudization quotas for driver roles", ar: "نسب التوطين لوظائف السائقين" },
    ],
    relatedServices: ["free-zones", "business-setup", "visa-issuance"],
  },
  {
    slug: "technology",
    icon: "cpu",
    image: "/images/sectors/technology.webp",
    name: { en: "Technology & Digital", ar: "التقنية والاقتصاد الرقمي" },
    short: {
      en: "The region's largest ICT market, with cloud, AI, and gaming at the center.",
      ar: "أكبر سوق لتقنية المعلومات في المنطقة، والسحابة والذكاء الاصطناعي والألعاب في القلب منه.",
    },
    opportunity: "very-high",
    overview: [
      {
        en: "Saudi Arabia is the largest ICT market in MENA. Global cloud providers are opening local regions, SDAIA is driving national AI adoption, and Savvy Games Group is investing tens of billions in gaming. The Cloud Computing SEZ offers a dedicated regulatory home for providers.",
        ar: "السعودية أكبر سوق لتقنية المعلومات والاتصالات في المنطقة. مزودو السحابة العالميون يفتتحون مناطق محلية، وسدايا تقود تبني الذكاء الاصطناعي وطنيًا، ومجموعة سافي للألعاب تستثمر عشرات المليارات في قطاع الألعاب. كما توفر المنطقة الاقتصادية الخاصة للحوسبة السحابية بيئة تنظيمية مخصصة للمزودين.",
      },
    ],
    drivers: [
      { en: "Government cloud-first mandates", ar: "توجه حكومي يقدّم الحوسبة السحابية أولًا" },
      { en: "National AI strategy under SDAIA", ar: "الاستراتيجية الوطنية للذكاء الاصطناعي بقيادة سدايا" },
      { en: "Young population with high digital adoption", ar: "سكان شباب بمعدلات تبنٍّ رقمي مرتفعة" },
    ],
    initiatives: [
      { en: "Cloud Computing Special Economic Zone", ar: "المنطقة الاقتصادية الخاصة للحوسبة السحابية" },
      { en: "National Technology Development Program", ar: "البرنامج الوطني لتنمية التقنية" },
    ],
    opportunities: [
      { en: "Cloud services, cybersecurity, and managed IT", ar: "الخدمات السحابية والأمن السيبراني وإدارة التقنية" },
      { en: "Enterprise AI and data platforms", ar: "الذكاء الاصطناعي للمؤسسات ومنصات البيانات" },
      { en: "Gaming studios and esports infrastructure", ar: "استوديوهات الألعاب وبنية الرياضات الإلكترونية" },
    ],
    challenges: [
      { en: "CST licensing and data classification rules", ar: "تراخيص هيئة الاتصالات وقواعد تصنيف البيانات" },
      { en: "Competition for senior local tech talent", ar: "المنافسة على الكفاءات التقنية المحلية" },
    ],
    relatedServices: ["business-incubators", "business-setup", "coworking-spaces"],
  },
  {
    slug: "tourism",
    icon: "plane",
    image: "/images/sectors/tourism.webp",
    name: { en: "Tourism & Hospitality", ar: "السياحة والضيافة" },
    short: {
      en: "150 million visits targeted by 2030 — the world's biggest tourism build-out.",
      ar: "استهداف 150 مليون زيارة بحلول 2030 — أكبر توسع سياحي في العالم.",
    },
    opportunity: "very-high",
    overview: [
      {
        en: "From the Red Sea's regenerative resorts to AlUla's heritage and Diriyah's cultural district, Saudi Arabia raised its target to 150 million annual visits by 2030. Hotels, experiences, F&B, and tourism services are all scaling at once — supported by e-visas covering most nationalities.",
        ar: "من منتجعات البحر الأحمر المستدامة إلى تراث العُلا وحي الدرعية الثقافي، رفعت السعودية مستهدفها إلى 150 مليون زيارة سنويًا بحلول 2030. الفنادق والتجارب والمطاعم وخدمات السياحة تتوسع جميعها في آن واحد — مدعومة بتأشيرات إلكترونية تغطي معظم الجنسيات.",
      },
    ],
    drivers: [
      { en: "Giga-projects: Red Sea, AlUla, Diriyah, Qiddiya", ar: "المشاريع الكبرى: البحر الأحمر، العلا، الدرعية، القدية" },
      { en: "Instant e-visas for 60+ nationalities", ar: "تأشيرات إلكترونية فورية لأكثر من 60 جنسية" },
      { en: "Major events: Expo 2030 & FIFA World Cup 2034", ar: "فعاليات كبرى: إكسبو 2030 وكأس العالم 2034" },
    ],
    initiatives: [
      { en: "Tourism Development Fund financing", ar: "تمويل صندوق التنمية السياحي" },
      { en: "Red Sea Global destinations", ar: "وجهات البحر الأحمر الدولية" },
    ],
    opportunities: [
      { en: "Hotel operations and hospitality management", ar: "تشغيل الفنادق وإدارة الضيافة" },
      { en: "Tour operators and experience providers", ar: "منظمو الرحلات ومزودو التجارب" },
      { en: "F&B concepts and entertainment retail", ar: "مفاهيم المطاعم وتجزئة الترفيه" },
    ],
    challenges: [
      { en: "Seasonality planning outside event periods", ar: "إدارة الموسمية خارج فترات الفعاليات" },
      { en: "Hospitality Saudization requirements", ar: "متطلبات توطين وظائف الضيافة" },
    ],
    relatedServices: ["business-setup", "visa-issuance", "saudi-partners"],
  },
  {
    slug: "real-estate",
    icon: "landmark",
    image: "/images/sectors/real-estate.webp",
    name: { en: "Real Estate & Construction", ar: "العقارات والتشييد" },
    short: {
      en: "Over a trillion dollars of projects under way — and housing demand keeps climbing.",
      ar: "مشاريع تتجاوز تريليون دولار قيد التنفيذ — وطلب الإسكان في صعود مستمر.",
    },
    opportunity: "high",
    overview: [
      {
        en: "Saudi Arabia's construction pipeline is the largest in the world, spanning giga-projects, 660,000+ new homes targeted under Sakani, and commercial space across Riyadh's expanding districts. New laws now allow broader foreign ownership of real estate in designated zones.",
        ar: "محفظة البناء السعودية هي الأكبر عالميًا، وتمتد من المشاريع العملاقة إلى أكثر من 660 ألف وحدة سكنية مستهدفة عبر سكني، والمساحات التجارية في أحياء الرياض المتوسعة. كما تتيح الأنظمة الجديدة تملكًا أجنبيًا أوسع للعقار في مناطق محددة.",
      },
    ],
    drivers: [
      { en: "Riyadh population growth toward 10M+", ar: "نمو سكان الرياض نحو أكثر من 10 ملايين" },
      { en: "70% home-ownership target under Vision 2030", ar: "مستهدف تملك السكن 70% ضمن رؤية 2030" },
      { en: "New foreign ownership regulations (2026)", ar: "أنظمة التملك الأجنبي الجديدة (2026)" },
    ],
    initiatives: [
      { en: "Sakani housing program", ar: "برنامج سكني للإسكان" },
      { en: "New Murabba & Diriyah developments", ar: "مشروعا المربع الجديد والدرعية" },
    ],
    opportunities: [
      { en: "Development management and PMO services", ar: "إدارة التطوير وخدمات مكاتب المشاريع" },
      { en: "Building materials and modular construction", ar: "مواد البناء والبناء المعياري" },
      { en: "PropTech and facility management", ar: "تقنية العقار وإدارة المرافق" },
    ],
    challenges: [
      { en: "Contractor classification requirements", ar: "متطلبات تصنيف المقاولين" },
      { en: "Cost inflation in materials and labor", ar: "تضخم تكاليف المواد والعمالة" },
    ],
    relatedServices: ["business-setup", "saudi-partners", "audit-support"],
  },
  {
    slug: "healthcare",
    icon: "heart-pulse",
    image: "/images/sectors/healthcare.webp",
    name: { en: "Healthcare & Life Sciences", ar: "الرعاية الصحية وعلوم الحياة" },
    short: {
      en: "A $65B+ health transformation opening the sector to private investment.",
      ar: "تحول صحي يتجاوز 65 مليار دولار يفتح القطاع أمام الاستثمار الخاص.",
    },
    opportunity: "high",
    overview: [
      {
        en: "The Health Sector Transformation Program is privatizing services, expanding insurance coverage, and building health clusters across the regions. Demand is rising for hospitals, specialized clinics, digital health, and local pharmaceutical manufacturing.",
        ar: "يعمل برنامج تحول القطاع الصحي على تخصيص الخدمات وتوسيع التغطية التأمينية وبناء التجمعات الصحية في المناطق. والطلب يتزايد على المستشفيات والعيادات المتخصصة والصحة الرقمية والتصنيع الدوائي المحلي.",
      },
    ],
    drivers: [
      { en: "Mandatory insurance expanding the private market", ar: "التأمين الإلزامي يوسّع السوق الخاص" },
      { en: "Localization of pharma & medical devices", ar: "توطين صناعة الدواء والأجهزة الطبية" },
      { en: "Digital health adoption (Seha, telemedicine)", ar: "تبني الصحة الرقمية (صحة والطب الاتصالي)" },
    ],
    initiatives: [
      { en: "Health Sector Transformation Program", ar: "برنامج تحول القطاع الصحي" },
      { en: "NUPCO local manufacturing agreements", ar: "اتفاقيات نوبكو للتصنيع المحلي" },
    ],
    opportunities: [
      { en: "Specialized clinics and day-surgery centers", ar: "العيادات المتخصصة ومراكز جراحة اليوم الواحد" },
      { en: "Telehealth and health-data platforms", ar: "منصات الطب الاتصالي وبيانات الصحة" },
      { en: "Pharma/medical device manufacturing", ar: "تصنيع الأدوية والأجهزة الطبية" },
    ],
    challenges: [
      { en: "MOH and SFDA licensing pathways", ar: "مسارات ترخيص وزارة الصحة وهيئة الغذاء والدواء" },
      { en: "Clinical staff credentialing timelines", ar: "مدد اعتماد وتصنيف الكوادر الصحية" },
    ],
    relatedServices: ["business-setup", "visa-issuance", "consultation"],
  },
  {
    slug: "entertainment",
    icon: "clapperboard",
    image: "/images/sectors/entertainment.webp",
    name: { en: "Entertainment & Culture", ar: "الترفيه والثقافة" },
    short: {
      en: "A brand-new industry: cinemas, festivals, music, and world-class attractions.",
      ar: "صناعة جديدة بالكامل: سينما ومهرجانات وموسيقى ووجهات ترفيه عالمية.",
    },
    opportunity: "growing",
    overview: [
      {
        en: "Since 2018, Saudi Arabia has built an entertainment industry from scratch — cinemas in every city, Riyadh Season drawing tens of millions of visits, and Qiddiya rising as a global entertainment destination. GEA licensing now covers events, attractions, and talent agencies.",
        ar: "منذ 2018 بنت السعودية صناعة ترفيه من الصفر — دور سينما في كل مدينة، وموسم الرياض يستقطب عشرات الملايين من الزيارات، والقدية تنهض كوجهة ترفيه عالمية. وتغطي تراخيص هيئة الترفيه اليوم الفعاليات والوجهات ووكالات المواهب.",
      },
    ],
    drivers: [
      { en: "Riyadh Season and year-round event calendar", ar: "موسم الرياض وتقويم فعاليات على مدار العام" },
      { en: "Qiddiya entertainment city build-out", ar: "تطوير مدينة القدية الترفيهية" },
      { en: "Young population spending on experiences", ar: "إنفاق متزايد من فئة الشباب على التجارب" },
    ],
    initiatives: [
      { en: "General Entertainment Authority licensing", ar: "تراخيص الهيئة العامة للترفيه" },
      { en: "Film commission incentives (40% cash rebate)", ar: "حوافز هيئة الأفلام (استرداد نقدي 40%)" },
    ],
    opportunities: [
      { en: "Event production and venue operations", ar: "إنتاج الفعاليات وتشغيل الوجهات" },
      { en: "Film production and studio services", ar: "الإنتاج السينمائي وخدمات الاستوديوهات" },
      { en: "Family entertainment centers and IP licensing", ar: "مراكز الترفيه العائلي وترخيص العلامات" },
    ],
    challenges: [
      { en: "Event-by-event permitting timelines", ar: "مدد تصاريح كل فعالية على حدة" },
      { en: "Content compliance standards", ar: "معايير توافق المحتوى" },
    ],
    relatedServices: ["business-setup", "saudi-partners", "meeting-rooms"],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
