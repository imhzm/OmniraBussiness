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
            <div className="grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)] lg:items-start">
              {/* What to expect — makes the calendar feel part of a designed page */}
              <div className="space-y-4 lg:sticky lg:top-28">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h2 className="text-lg font-bold text-navy">
                    {ar ? "استشارتك المجانية" : "Your free consultation"}
                  </h2>
                  <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-ink">
                    {(ar
                      ? [
                          ["calendar-days", "جلسة في الوقت اللي يناسبك"],
                          ["message-circle", "عبر Google Meet — الرابط يصلك تلقائيًا"],
                          ["check-circle-2", "نفهم نشاطك ونرسم لك المسار الأنسب"],
                          ["shield-check", "مجانية بالكامل وبدون أي التزام"],
                        ]
                      : [
                          ["calendar-days", "A session at a time that suits you"],
                          ["message-circle", "Over Google Meet — link sent automatically"],
                          ["check-circle-2", "We map your activity and the best path"],
                          ["shield-check", "Entirely free, with no obligation"],
                        ]
                    ).map(([icon, text], i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-navy-gradient p-6 text-white shadow-card">
                  <p className="text-sm font-semibold">
                    {ar ? "تفضّل التواصل المباشر؟" : "Prefer to talk now?"}
                  </p>
                  <Button
                    href={whatsappLink(
                      ar ? "مرحبًا، أريد حجز استشارة مجانية." : "Hello, I'd like to book a free consultation."
                    )}
                    external
                    className="mt-3 w-full"
                    arrow
                  >
                    {ar ? "راسلنا على واتساب" : "Message us on WhatsApp"}
                  </Button>
                </div>
              </div>

              {/* Booking calendar — embedded inline, flush with the page */}
              <div>
                <iframe
                  src={booking.url}
                  title={ar ? "حجز موعد" : "Book a meeting"}
                  className="h-[720px] w-full"
                  style={{ border: 0, colorScheme: "light" }}
                  loading="lazy"
                />
                <p className="mt-2 text-center text-xs text-faint">
                  {ar ? "لا يظهر التقويم؟ " : "Calendar not loading? "}
                  <a
                    href={booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gold-dark underline"
                  >
                    {ar ? "افتحه في نافذة جديدة" : "Open in a new tab"}
                  </a>
                </p>
              </div>
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
