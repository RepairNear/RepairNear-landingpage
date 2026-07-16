"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { sections } from "@/lib/terms-content";

function formatEntry(number: number, title: string) {
  return `${String(number).padStart(2, "0")}. ${title}`;
}

// Desktop TOC — highlights the section currently in view.
export function TocList() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // triggers when section is in top ~20-30% of viewport
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ol className="space-y-2 text-[13px]">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className={`block leading-snug transition-colors ${
              activeId === s.id
                ? "text-accent-deep font-semibold"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {formatEntry(s.number, s.title)}
          </a>
        </li>
      ))}
    </ol>
  );
}

// Mobile TOC — collapsible details element, no scroll-spy.
export function MobileToc() {
  return (
    <details className="group lg:hidden mb-8 border border-line rounded-[11px] bg-bg-alt">
      <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-5 py-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
        Table of Contents ({sections.length} sections)
        <ChevronDown
          size={18}
          className="shrink-0 text-ink-soft transition-transform group-open:rotate-180"
        />
      </summary>
      <ol className="space-y-2 text-[13px] px-5 pb-5">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="block leading-snug text-ink-soft transition-colors hover:text-ink"
            >
              {formatEntry(s.number, s.title)}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
