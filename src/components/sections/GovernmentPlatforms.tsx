import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlatformsExplorer } from "@/components/sections/PlatformsExplorer";

export function GovernmentPlatforms({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.resources.platforms}
          title={dict.home.platformsTitle}
          text={dict.home.platformsText}
          action={{
            label: dict.home.explorePlatforms,
            href: localeHref(locale, "/resources/platforms"),
          }}
        />
        <Reveal>
          <PlatformsExplorer locale={locale} limit={6} />
        </Reveal>
      </div>
    </section>
  );
}
