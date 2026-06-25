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
    title: dict.legal.termsTitle,
    description: `${dict.legal.termsTitle} - ${site.legalName[l]}`,
    path: "/terms",
  });
}

export default async function TermsPage({
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
          ["نطاق الموقع", "يوفر الموقع معلومات عامة عن خدمات الأعمال في السعودية ولا يعد استشارة قانونية أو ضريبية نهائية."],
          ["الخدمات والعروض", "تخضع الأسعار والنطاقات للتأكيد قبل بدء أي تعاقد، وقد تختلف الرسوم الحكومية حسب الحالة."],
          ["استخدام المحتوى", "لا يجوز نسخ أو إعادة نشر محتوى الموقع دون موافقة كتابية من Omnera One."],
          ["حدود المسؤولية", "نبذل العناية المهنية في تحديث المحتوى، لكن الأنظمة والرسوم الحكومية قد تتغير دون إشعار."],
        ]
      : [
          ["Website scope", "The website provides general information about business services in Saudi Arabia and is not final legal or tax advice."],
          ["Services and proposals", "Prices and scopes are confirmed before engagement, and government fees may vary by case."],
          ["Content use", "You may not copy or republish site content without written approval from Omnera One."],
          ["Liability limits", "We use professional care when updating content, but regulations and government fees may change without notice."],
        ];

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.legal.termsTitle }]}
        title={dict.legal.termsTitle}
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
