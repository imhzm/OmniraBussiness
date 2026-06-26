import type { Locale } from "@/i18n/config";

/** Target source-markets we bring into Saudi Arabia — each shown in its own language/script. */
const COUNTRIES: { native: string; en: string; ar: string }[] = [
  { native: "中国", en: "China", ar: "الصين" },
  { native: "भारत", en: "India", ar: "الهند" },
  { native: "پاکستان", en: "Pakistan", ar: "باكستان" },
  { native: "বাংলাদেশ", en: "Bangladesh", ar: "بنغلاديش" },
  { native: "مصر", en: "Egypt", ar: "مصر" },
  { native: "Türkiye", en: "Turkey", ar: "تركيا" },
  { native: "Indonesia", en: "Indonesia", ar: "إندونيسيا" },
  { native: "United Kingdom", en: "United Kingdom", ar: "المملكة المتحدة" },
  { native: "United States", en: "United States", ar: "الولايات المتحدة" },
  { native: "Deutschland", en: "Germany", ar: "ألمانيا" },
  { native: "France", en: "France", ar: "فرنسا" },
  { native: "日本", en: "Japan", ar: "اليابان" },
  { native: "대한민국", en: "South Korea", ar: "كوريا الجنوبية" },
  { native: "Россия", en: "Russia", ar: "روسيا" },
  { native: "Pilipinas", en: "Philippines", ar: "الفلبين" },
  { native: "Italia", en: "Italy", ar: "إيطاليا" },
  { native: "España", en: "Spain", ar: "إسبانيا" },
  { native: "Nigeria", en: "Nigeria", ar: "نيجيريا" },
];

export function TargetCountries({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const track = [...COUNTRIES, ...COUNTRIES];

  return (
    <section className="overflow-hidden bg-navy py-14 lg:py-20">
      <style>{`@keyframes omn-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div className="container-x text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
          {ar ? "حضور عالمي" : "Global reach"}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
          {ar ? "نخدم المؤسسين من حول العالم" : "We serve founders from around the world"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
          {ar
            ? "نُدخل عملاءنا السوق السعودي من أي دولة — عن بُعد، وبفريق سعودي واحد يمسك كل الإجراءات."
            : "We bring our clients into the Saudi market from anywhere — remotely, with one Saudi team handling every step."}
        </p>
      </div>

      <div className="relative mt-10" dir="ltr">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent sm:w-28" />
        <div className="flex w-max gap-3 px-4 motion-reduce:animate-none" style={{ animation: "omn-marquee 55s linear infinite" }}>
          {track.map((c, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 text-center transition-colors hover:border-gold/40 hover:bg-white/[0.1]"
            >
              <span className="text-xl font-bold leading-none text-white">{c.native}</span>
              <span className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-white/45">
                {ar ? c.ar : c.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
