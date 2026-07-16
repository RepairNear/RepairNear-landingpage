"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/ui/logo";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Protection", href: "/#protection" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Same-value setState bails out of re-rendering, so no throttle needed.
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-line/60"
          : "bg-bg border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark size={36} />
          <span className="text-lg font-extrabold tracking-tight">
            RepairNear
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex px-5 py-2 text-sm font-semibold rounded-[11px] bg-accent text-white transition-colors hover:bg-accent-deep"
        >
          Get the app
        </a>
      </div>
    </nav>
  );
}
