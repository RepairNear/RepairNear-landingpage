"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export default function SmoothScroll() {
  const pathname = usePathname();

  // Initialize Lenis once on mount + install click interceptor
  useEffect(() => {
    // On a page refresh, keep the user right where they were: the browser's
    // native scroll restoration puts them back at the section they were
    // viewing. We only drop a stale section hash left behind by nav clicks,
    // so the hash-scroll effect below doesn't yank the page away from that
    // spot. Fresh navigations keep their hash so deep links (e.g. /#faq)
    // still work.
    const navEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (navEntry?.type === "reload") {
      history.scrollRestoration = "auto";
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global click interceptor for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      // Only handle plain left clicks (no cmd/ctrl/shift for new-tab intent)
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Case 1: Logo click on home page — href="/" and we're on "/"
      if (href === "/" && window.location.pathname === "/") {
        e.preventDefault();
        lenis.scrollTo(0);
        // Drop any stale hash so the URL reads "/" again
        if (window.location.hash) {
          history.pushState(null, "", "/");
        }
        return;
      }

      // Case 2: Plain hash link on same page — href="#foo"
      if (href.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(href);
        history.pushState(null, "", href);
        return;
      }

      // Case 3: Path + hash where path matches current page — href="/#foo" on "/"
      if (href.includes("#") && !href.startsWith("http")) {
        const [path, hash] = href.split("#");
        const targetPath = path || "/";

        if (targetPath === window.location.pathname && hash) {
          e.preventDefault();
          lenis.scrollTo("#" + hash);
          history.pushState(null, "", href);
          return;
        }
        // If path is different, let the browser navigate normally.
        // The pathname useEffect below will handle the hash after load.
      }

      // Everything else: let the browser handle it (external links, new pages, etc.)
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Handle hash on page load / after client-side navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || !lenisInstance) return;

    // Wait a beat for content to render before scrolling
    const t = setTimeout(() => {
      lenisInstance?.scrollTo(hash);
    }, 200);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
