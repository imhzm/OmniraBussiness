import type { L } from "@/i18n/config";

export type KingdomTopic = {
  slug: string;
  icon: string;
  image: string;
  title: L;
  excerpt: L;
  sections: {
    title: L;
    text: L;
    points: L[];
  }[];
};

export const kingdomTopics: KingdomTopic[] = [
  {
    slug: "why-invest",
    icon: "trending-up",
    image: "/images/about/kingdom.webp",
    title: { en: "Why Invest in Saudi Arabia", ar: "لماذا الاستثمار في السعودية" },
    excerpt: {
      en: "A large domestic market, public investment, and regulatory reform are reshaping the Kingdom into a regional growth base.",
      ar: "سوق محلي كبير واستثمار عام وإصلاحات تنظيمية تعيد تشكيل المملكة كقاعدة نمو إقليمية.",
    },
    sections: [
      {
        title: { en: "Strategic market scale", ar: "حجم سوق استراتيجي" },
        text: {
          en: "Saudi Arabia is the largest economy in the Middle East and a gateway to GCC demand, Red Sea trade routes, and regional headquarters activity.",
          ar: "السعودية أكبر اقتصاد في الشرق الأوسط وبوابة لطلب الخليج ومسارات البحر الأحمر ونشاط المقرات الإقليمية.",
        },
        points: [
          { en: "Young, digitally active consumer base", ar: "قاعدة مستهلكين شابة ونشطة رقمياً" },
          { en: "Major public and private project pipeline", ar: "محفظة ضخمة من المشاريع العامة والخاصة" },
          { en: "Regional headquarters momentum in Riyadh", ar: "زخم المقرات الإقليمية في الرياض" },
        ],
      },
    ],
  },
  {
    slug: "life",
    icon: "heart-pulse",
    image: "/images/about/office.webp",
    title: { en: "Life in Saudi Arabia", ar: "الحياة في السعودية" },
    excerpt: {
      en: "Relocating teams need more than licenses: housing, schooling, healthcare, mobility, and a realistic onboarding plan.",
      ar: "انتقال الفرق يحتاج أكثر من التراخيص: سكن وتعليم ورعاية صحية وتنقل وخطة تهيئة واقعية.",
    },
    sections: [
      {
        title: { en: "Relocation readiness", ar: "جاهزية الانتقال" },
        text: {
          en: "Riyadh, Jeddah, and the Eastern Province offer expanding residential, education, healthcare, and business communities for international teams.",
          ar: "توفر الرياض وجدة والمنطقة الشرقية مجتمعات سكنية وتعليمية وصحية وتجارية متوسعة للفرق الدولية.",
        },
        points: [
          { en: "Family visa and iqama planning", ar: "تخطيط تأشيرات العائلة والإقامات" },
          { en: "Schooling and healthcare orientation", ar: "توجيه التعليم والرعاية الصحية" },
          { en: "Office, housing, and mobility coordination", ar: "تنسيق المكاتب والسكن والتنقل" },
        ],
      },
    ],
  },
  {
    slug: "quality-of-life",
    icon: "sparkles",
    image: "/images/sectors/entertainment.webp",
    title: { en: "Quality of Life", ar: "جودة الحياة" },
    excerpt: {
      en: "Entertainment, culture, sports, and urban development are changing how teams live and work in the Kingdom.",
      ar: "الترفيه والثقافة والرياضة والتطوير الحضري تغير طريقة عيش وعمل الفرق داخل المملكة.",
    },
    sections: [
      {
        title: { en: "A changing daily experience", ar: "تجربة يومية متغيرة" },
        text: {
          en: "The Quality of Life Program is creating more cultural venues, events, parks, sports facilities, and modern neighborhoods.",
          ar: "يساهم برنامج جودة الحياة في خلق وجهات ثقافية وفعاليات وحدائق ومرافق رياضية وأحياء حديثة أكثر.",
        },
        points: [
          { en: "Year-round events and business gatherings", ar: "فعاليات وملتقيات أعمال على مدار العام" },
          { en: "More lifestyle districts and cultural venues", ar: "مناطق نمط حياة ووجهات ثقافية أكثر" },
          { en: "Improved mobility and urban services", ar: "تحسن التنقل والخدمات الحضرية" },
        ],
      },
    ],
  },
  {
    slug: "investment-opportunities",
    icon: "target",
    image: "/images/sectors/finance.webp",
    title: { en: "Investment Opportunities", ar: "الفرص الاستثمارية" },
    excerpt: {
      en: "Vision 2030 creates opportunity across technology, tourism, logistics, industry, healthcare, and business services.",
      ar: "رؤية 2030 تخلق فرصاً في التقنية والسياحة واللوجستيات والصناعة والصحة وخدمات الأعمال.",
    },
    sections: [
      {
        title: { en: "Where opportunity is moving", ar: "أين تتحرك الفرص" },
        text: {
          en: "The strongest opportunities combine demand growth, licensing clarity, local-content strategy, and a practical go-to-market path.",
          ar: "أقوى الفرص تجمع بين نمو الطلب ووضوح الترخيص واستراتيجية المحتوى المحلي ومسار دخول عملي للسوق.",
        },
        points: [
          { en: "Tech, cloud, AI, and cybersecurity", ar: "التقنية والسحابة والذكاء الاصطناعي والأمن السيبراني" },
          { en: "Tourism, hospitality, and experiences", ar: "السياحة والضيافة والتجارب" },
          { en: "Logistics, industrial services, and manufacturing", ar: "اللوجستيات والخدمات الصناعية والتصنيع" },
        ],
      },
    ],
  },
  {
    slug: "neom",
    icon: "landmark",
    image: "/images/sectors/technology.webp",
    title: { en: "NEOM Business Opportunities", ar: "فرص الأعمال في نيوم" },
    excerpt: {
      en: "NEOM is a long-horizon opportunity for suppliers, operators, technology providers, and specialist service firms.",
      ar: "نيوم فرصة طويلة المدى للموردين والمشغلين ومزودي التقنية وشركات الخدمات المتخصصة.",
    },
    sections: [
      {
        title: { en: "How to approach NEOM", ar: "كيف تقترب من نيوم" },
        text: {
          en: "Companies need a compliant Saudi entity, supplier-readiness documents, relevant references, and a clear local delivery model.",
          ar: "تحتاج الشركات إلى كيان سعودي متوافق ومستندات جاهزية للموردين ومراجع ذات صلة ونموذج تنفيذ محلي واضح.",
        },
        points: [
          { en: "Supplier registration and prequalification", ar: "تسجيل الموردين والتأهيل المسبق" },
          { en: "Local content and workforce planning", ar: "المحتوى المحلي وتخطيط القوى العاملة" },
          { en: "Project-specific licensing and compliance", ar: "التراخيص والامتثال حسب المشروع" },
        ],
      },
    ],
  },
];

export function getKingdomTopic(slug: string): KingdomTopic | undefined {
  return kingdomTopics.find((topic) => topic.slug === slug);
}
