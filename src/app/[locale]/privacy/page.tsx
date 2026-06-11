import type { Metadata } from "next";
import { site } from "@/config/site";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  return pageMetadata({
    locale: l,
    title: dict.legal.privacyTitle,
    description: `${dict.legal.privacyTitle} - ${site.legalName[l]}`,
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);

  const sections =
    l === "ar"
      ? [
          ["البيانات التي نجمعها", "نجمع بيانات التواصل التي ترسلها لنا طوعاً مثل الاسم والبريد ورقم الجوال واحتياج الخدمة."],
          ["كيف نستخدم البيانات", "نستخدم البيانات للرد على الاستفسارات، ترتيب الاستشارات، وتحسين تجربة خدمات أومنيرا."],
          ["مشاركة البيانات", "لا نبيع بياناتك. قد نشارك معلومات محدودة مع مزودي خدمات يساعدوننا في التواصل أو تقديم الخدمة."],
          ["التواصل", `يمكنك مراسلتنا عبر ${site.email} لطلب تحديث أو حذف بياناتك.`],
        ]
      : [
          ["Data we collect", "We collect contact details you voluntarily submit, such as name, email, phone number, and service needs."],
          ["How we use data", "We use data to respond to inquiries, arrange consultations, and improve the Omnira service experience."],
          ["Data sharing", "We do not sell your data. We may share limited information with service providers that help us communicate or deliver services."],
          ["Contact", `You can contact us at ${site.email} to request an update or deletion of your data.`],
        ];

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.legal.privacyTitle }]}
        title={dict.legal.privacyTitle}
        text={`${dict.legal.lastUpdated}: 2026-06-11`}
      />
      <section className="py-12 lg:py-16">
        <div className="container-x max-w-3xl space-y-8">
          {sections.map(([title, text]) => (
            <section key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
