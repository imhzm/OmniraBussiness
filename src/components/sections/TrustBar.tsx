import { trustPoints } from "@/data/home";
import type { Locale } from "@/i18n/config";
import { t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-x">
        <Reveal className="grid grid-cols-2 gap-x-4 gap-y-5 py-7 sm:grid-cols-3 lg:grid-cols-5">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex items-center justify-center gap-2.5 text-center sm:justify-start sm:text-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-faint text-gold-dark">
                <Icon name={point.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-navy">{t(point.label, locale)}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
