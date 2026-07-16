"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

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
        scrolled || open
          ? "bg-bg/80 backdrop-blur-md border-line/60"
          : "bg-bg border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        {/* Plain <a> (not next/link) so the smooth-scroll click interceptor
            can preventDefault and Lenis-scroll to top when already on "/" */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="flex items-center gap-3">
          <LogoMark size={36} />
          <span className="text-base font-extrabold tracking-tight sm:text-lg">
            RepairNear
          </span>
        </a>

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

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Plain <a> for the same smooth-scroll interception as above */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#download"
            className="inline-flex px-4 py-2 text-sm font-semibold rounded-[11px] bg-accent text-white transition-colors hover:bg-accent-deep sm:px-5"
          >
            Download
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-line text-ink transition-colors hover:bg-bg-alt lg:hidden"
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu — slides open beneath the bar, closes on link tap */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line/60 lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-soft transition-colors hover:bg-bg-alt hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
