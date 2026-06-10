"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: string;
};

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-line rounded-2xl border border-line bg-white shadow-card", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
            >
              <span className={cn("text-base font-semibold transition-colors", isOpen ? "text-gold-dark" : "text-navy")}>
                {item.title}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen ? "rotate-180 border-gold bg-gold-faint text-gold-dark" : "border-line text-muted"
                )}
              >
                <Icon name="chevron-down" className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
