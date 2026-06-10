import Link from "next/link";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  text,
  action,
  dark,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: { label: string; href: string };
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 sm:mb-12",
        center ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", center && "flex flex-col items-center")}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2
          className={cn(
            "text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
            dark ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h2>
        {text && (
          <p className={cn("mt-3 text-base leading-relaxed", dark ? "text-white/70" : "text-muted")}>
            {text}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors",
            dark ? "text-gold-soft hover:text-white" : "text-gold-dark hover:text-navy"
          )}
        >
          {action.label}
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
