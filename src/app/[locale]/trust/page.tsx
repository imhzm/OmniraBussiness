import type { Metadata } from "next";
import { isLocale, type L, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { localeHref, t } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Pattern } from "@/components/ui/Pattern";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  trustPillars,
  trustGuarantees,
  trustProtections,
  trustAuthorities,
  trustFaqs,
  testimonials,
  type TrustItem,
} from "@/data/trust";

const PAGE = {
  title: {
    en: "Why Trust Omnera One — Guarantees & Transparency",
    ar: "لماذا تثق بـ Omnera One — الضمانات والشفافية",
  } satisfies L,
  desc: {
    en: "Trust built on real commitments: fixed transparent pricing, government fees at cost, a documented scope, and work done only through Saudi Arabia's official platforms.",
    ar: "ثقة مبنية على التزامات حقيقية: أسعار ثابتة وشفافة، رسوم حكومية كما هي، نطاق عمل موثّق، وتنفيذ عبر المنصات الرسمية في السعودية حصرًا.",
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
    path: "/trust",
  });
}

function CardGrid({ locale, items }: { locale: Locale; items: TrustItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 70}>
          <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
              <Icon name={it.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-base font-bold text-navy">{t(it.title, locale)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t(it.text, locale)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-navy lg:text-3xl">{title}</h2>
      {text && <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const ar = l === "ar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: trustFaqs.map((f) => ({
          "@type": "Question",
          name: t(f.q, l),
          acceptedAnswer: { "@type": "Answer", text: t(f.a, l) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.nav.home, item: `${site.url}/${l}` },
          {
            "@type": "ListItem",
            position: 2,
            name: ar ? "لماذا تثق بنا" : "Why Trust Us",
            item: `${site.url}/${l}/trust`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        locale={l}
        dark
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: ar ? "لماذا تثق بنا" : "Why Trust Us" },
        ]}
        eyebrow={ar ? "الثقة والضمانات" : "Trust & guarantees"}
        title={ar ? "ثقة مبنية على الإنجاز، لا الوعود" : "Trust built on delivery, not promises"}
        text={t(PAGE.desc, l)}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={localeHref(l, "/book")} size="lg" arrow>
            {ar ? "احجز استشارة مجانية" : "Book a free consultation"}
          </Button>
          <Button href={localeHref(l, "/pricing")} variant="outline-light" size="lg">
            {ar ? "شوف الأسعار الشفّافة" : "See transparent pricing"}
          </Button>
        </div>
      </PageHero>

      {/* Pillars */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow={ar ? "لماذا نحن" : "Why us"}
            title={ar ? "لماذا يثق بنا المؤسسون" : "Why founders trust us"}
            text={
              ar
                ? "أسباب ملموسة يمكنك التحقق منها — لا شعارات."
                : "Concrete reasons you can verify — not slogans."
            }
          />
          <CardGrid locale={l} items={trustPillars} />
        </div>
      </section>

      {/* Authorities — strong, verifiable trust signal */}
      <section className="relative overflow-hidden bg-navy-gradient py-14 text-white lg:py-20">
        <Pattern id="trust-pattern" className="absolute inset-0 text-gold opacity-[0.05]" />
        <div className="container-x relative">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-soft">
              {ar ? "رسمي وقابل للتحقق" : "Official & verifiable"}
            </p>
            <h2 className="mt-2 text-2xl font-bold lg:text-3xl">
              {ar ? "نعمل عبر الجهات والمنصات الرسمية" : "We operate through official authorities & platforms"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {ar
                ? "كل معاملة تُسجَّل لدى الجهة الحكومية المختصة باسمك — لا وسطاء ولا قنوات جانبية."
                : "Every transaction is recorded with the relevant government body in your name — no middlemen, no side channels."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {trustAuthorities.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Icon name={a.icon} className="h-5 w-5 shrink-0 text-gold-soft" />
                <span className="text-sm font-semibold text-white/90">{t(a.name, l)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-ivory/40 py-14 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow={ar ? "وعودنا الموثّقة" : "Our documented promises"}
            title={ar ? "ضمانات تشيل عنك المخاطرة" : "Guarantees that take the risk off you"}
          />
          <CardGrid locale={l} items={trustGuarantees} />
        </div>
      </section>

      {/* Protections */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow={ar ? "حماية" : "Protection"}
            title={ar ? "كيف نحمي أموالك ومعاملاتك" : "How we protect your money & transactions"}
          />
          <CardGrid locale={l} items={trustProtections} />
        </div>
      </section>

      {/* Testimonials — only shown when real ones exist */}
      {testimonials.length > 0 && (
        <section className="bg-ivory/40 py-14 lg:py-20">
          <div className="container-x">
            <SectionHead
              eyebrow={ar ? "آراء العملاء" : "Client voices"}
              title={ar ? "ماذا يقول عملاؤنا" : "What our clients say"}
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((tst, i) => (
                <Reveal key={i} delay={i * 70}>
                  <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
                    {typeof tst.rating === "number" && (
                      <div className="mb-2 flex gap-0.5 text-gold-dark">
                        {Array.from({ length: tst.rating }).map((_, s) => (
                          <Icon key={s} name="badge-check" className="h-4 w-4" />
                        ))}
                      </div>
                    )}
                    <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                      “{t(tst.quote, l)}”
                    </blockquote>
                    <figcaption className="mt-4 border-t border-line pt-4">
                      <p className="text-sm font-bold text-navy">{tst.name}</p>
                      <p className="text-xs text-muted">
                        {t(tst.role, l)}
                        {tst.company ? ` · ${tst.company}` : ""}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust FAQ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-x max-w-3xl">
          <SectionHead
            eyebrow={ar ? "أسئلة الثقة" : "Trust questions"}
            title={ar ? "أسئلة قبل أن تثق بنا" : "Questions before you trust us"}
          />
          <Accordion items={trustFaqs.map((f) => ({ title: t(f.q, l), content: t(f.a, l) }))} />
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
