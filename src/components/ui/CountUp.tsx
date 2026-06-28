/**
 * Renders a formatted number (prefix/suffix/decimals).
 * SSR-correct: always outputs the real value — never a "0" placeholder — so
 * the figures are right for crawlers, no-JS visitors, and SEO.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Kept for call-site compatibility; animation was removed for SSR correctness. */
  duration?: number;
  className?: string;
}) {
  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
