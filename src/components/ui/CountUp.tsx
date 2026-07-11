"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated counter that is SSR-correct: the first render (server + no-JS) always
 * outputs the real value, so crawlers and non-JS visitors see the true figure.
 * After hydration it eases 0 → value once scrolled into view (skipped when the
 * user prefers reduced motion).
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No animation available (or unwanted) → the real value is already rendered.
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let fallback = 0;
    let started = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();

        // If the tab isn't visible, rAF is paused — just show the final value.
        if (document.visibilityState !== "visible") {
          setDisplay(value);
          return;
        }

        // Safety net: guarantee the final value even if rAF stalls.
        fallback = window.setTimeout(() => setDisplay(value), duration + 500);

        setDisplay(0);
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setDisplay(value * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        raf = requestAnimationFrame(tick);
      },
      // Pre-trigger just below the viewport so the reset-to-0 happens off-screen.
      { threshold: 0, rootMargin: "0px 0px 120px 0px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (fallback) clearTimeout(fallback);
    };
  }, [value, duration]);

  const shown = decimals > 0 ? Number(display.toFixed(decimals)) : Math.round(display);
  const formatted = shown.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
