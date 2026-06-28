import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { whatsappLink } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { licenseTypes } from "@/data/license-types";

export function LicenseTypesGrid({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <section className="bg-ivory/40 py-14 lg:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
            {ar ? "كل التراخيص في مكان واحد" : "Every licence in one place"}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy lg:text-3xl">
            {ar ? "أنواع التراخيص التي نُصدرها" : "Types of licences we issue"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {ar
              ? "نُصدر ترخيص نشاطك بالتصنيف الصحيح من وزارة الاستثمار والجهات المختصة — اختر نوعك واحصل على عرض سعر مجاني."
              : "We issue your activity licence with the correct classification from MISA and the relevant authorities — pick your type and get a free quote."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {licenseTypes.map((lt) => (
            <Link
              key={lt.id}
              href={localeHref(locale, `/licenses/${lt.id}`)}
              className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-faint text-gold-dark transition-colors group-hover:bg-gold group-hover:text-navy">
                <Icon name={lt.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{t(lt.name, locale)}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{t(lt.desc, locale)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold-dark">
                {ar ? "اعرف أكثر" : "Learn more"}
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={localeHref(locale, "/contact")} size="lg" arrow>
            {ar ? "احصل على عرض سعر مجاني" : "Get a free quote"}
          </Button>
          <Button
            href={whatsappLink(
              ar
                ? "مرحبًا، أرغب في إصدار ترخيص نشاطي في السعودية."
                : "Hello, I'd like to issue my activity licence in Saudi Arabia."
            )}
            external
            variant="secondary"
            size="lg"
          >
            {ar ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          </Button>
        </div>
      </div>
    </section>
  );
}
