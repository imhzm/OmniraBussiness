import Link from "next/link";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function LocaleNotFound() {
  const locale: Locale = "ar";
  const dict = getDict(locale);

  return (
    <section className="min-h-[70vh] bg-ivory py-20">
      <div className="container-x max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-faint text-gold-dark">
          <Icon name="file-search" className="h-7 w-7" />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-navy">{dict.notFound.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{dict.notFound.text}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href={localeHref(locale, "/")} variant="navy">
            {dict.common.backHome}
          </Button>
          <Link href={localeHref(locale, "/contact")} className="inline-flex h-12 items-center justify-center rounded-full border border-navy/25 px-6 text-sm font-semibold text-navy">
            {dict.nav.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
