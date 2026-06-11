import type { Metadata } from "next";
import { site, whatsappLink } from "@/config/site";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

const contactCards = [
  { key: "phone", icon: "phone", value: "phone", href: "phoneHref" },
  { key: "whatsapp", icon: "message-circle", value: "phone", href: "whatsapp" },
  { key: "email", icon: "mail", value: "email", href: "email" },
  { key: "location", icon: "map-pin", value: "address", href: null },
] as const;

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
    title: dict.contact.heroTitle,
    description: dict.contact.heroText,
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);

  const valueFor = (value: (typeof contactCards)[number]["value"]) => {
    if (value === "address") return site.address[l];
    return site[value];
  };

  const hrefFor = (href: (typeof contactCards)[number]["href"]) => {
    if (href === "phoneHref") return site.phoneHref;
    if (href === "whatsapp") return whatsappLink();
    if (href === "email") return `mailto:${site.email}`;
    return undefined;
  };

  return (
    <>
      <PageHero
        locale={l}
        dark
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.contact }]}
        title={dict.contact.heroTitle}
        text={dict.contact.heroText}
      />

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            {contactCards.map((card) => {
              const href = hrefFor(card.href);
              const content = (
                <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-bold text-navy">{dict.contact[card.key]}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{valueFor(card.value)}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={card.key} href={href} target={card.key === "whatsapp" ? "_blank" : undefined} rel={card.key === "whatsapp" ? "noopener noreferrer" : undefined}>
                  {content}
                </a>
              ) : (
                <div key={card.key}>{content}</div>
              );
            })}

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-navy">{dict.contact.hours}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{site.workingHours[l]}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={whatsappLink()} external size="sm">
                  {dict.common.whatsapp}
                </Button>
                <Button href={site.phoneHref} external variant="secondary" size="sm">
                  {dict.contact.callUs}
                </Button>
              </div>
            </div>
          </div>

          <ContactForm locale={l} />
        </div>
      </section>
    </>
  );
}
