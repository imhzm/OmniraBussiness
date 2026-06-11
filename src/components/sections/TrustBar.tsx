import { trustedMarks } from "@/data/home";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { t } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  return (
    <section className="border-y border-line bg-white">
      <div className="container-x">
        <Reveal className="grid items-center gap-5 py-6 lg:grid-cols-[220px_1fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
            {dict.home.trustedBy}
          </p>
          <div className="grid grid-cols-2 items-center gap-x-7 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedMarks.map((mark, i) => (
            <span
              key={i}
              className="text-center text-sm font-bold tracking-wide text-navy/36 transition-colors hover:text-navy/64 lg:text-start"
            >
              {t(mark, locale)}
            </span>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
