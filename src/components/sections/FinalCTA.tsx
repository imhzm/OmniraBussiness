import { whatsappLink } from "@/config/site";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Pattern } from "@/components/ui/Pattern";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="relative overflow-hidden bg-navy-gradient py-16 lg:py-20">
      <Pattern id="cta-pattern" className="absolute inset-0 text-gold opacity-[0.06]" />
      <div
        className="pointer-events-none absolute -end-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Reveal className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-start">
          <Logo locale={locale} variant="light" className="shrink-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              {dict.home.ctaTitle}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
              {dict.home.ctaText}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink()} external size="lg" arrow>
              {dict.common.talkToExpert}
            </Button>
            <Button href={localeHref(locale, "/contact")} variant="outline-light" size="lg">
              {dict.common.bookConsultation}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
