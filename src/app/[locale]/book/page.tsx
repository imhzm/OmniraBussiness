import type { Metadata } from "next";
import { isLocale, type L, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { booking, hasBooking, whatsappLink } from "@/config/site";
import { localeHref, t } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";

const PAGE = {
  title: {
    en: "Book a Meeting — Free Consultation",
    ar: "احجز موعدًا — استشارة مجانية",
  } satisfies L,
  desc: {
    en: "Pick a time that suits you and book a free consultation with Omnera One — confirmed instantly to your calendar.",
    ar: "اختر الوقت المناسب لك واحجز استشارة مجانية مع Omnera One — تأكيد فوري على تقويمك.",
  } satisfies L,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  return pageMetadata({
    locale: l,
    title: t(PAGE.title, l),
    description: t(PAGE.desc, l),
    path: "/book",
  });
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const ar = l === "ar";

  return (
    <>
      <PageHero
        locale={l}
        dark
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: ar ? "احجز موعد" : "Book a meeting" },
        ]}
        eyebrow={ar ? "استشارة مجانية" : "Free consultation"}
        title={ar ? "احجز موعدك" : "Book your meeting"}
        text={t(PAGE.desc, l)}
      />

      <section className="py-12 lg:py-16">
        <div className="container-x">
          {hasBooking() ? (
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <iframe
                  src={booking.url}
                  title={ar ? "حجز موعد" : "Book a meeting"}
                  className="h-[760px] w-full"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm text-muted">
                {ar ? "لا تظهر صفحة الحجز؟ " : "Booking page not loading? "}
                <a
                  href={booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gold-dark underline"
                >
                  {ar ? "افتحها في نافذة جديدة" : "Open it in a new tab"}
                </a>
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-2xl border border-line bg-white p-8 text-center shadow-card">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-faint text-gold-dark">
                <Icon name="calendar-days" className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-navy">
                {ar ? "احجز استشارتك المجانية" : "Book your free consultation"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {ar
                  ? "اختر الطريقة الأنسب لك، وسنؤكّد موعدك فورًا ونرسل لك تفاصيله."
                  : "Choose the easiest way for you, and we'll confirm your slot right away."}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={whatsappLink(
                    ar
                      ? "مرحبًا، أريد حجز استشارة مجانية."
                      : "Hello, I'd like to book a free consultation."
                  )}
                  external
                  arrow
                >
                  {ar ? "احجز عبر واتساب" : "Book via WhatsApp"}
                </Button>
                <Button href={localeHref(l, "/contact")} variant="secondary">
                  {ar ? "عبر نموذج التواصل" : "Via contact form"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
