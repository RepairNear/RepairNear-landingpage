"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { Search, Ticket, LocateFixed } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Browse",
    description: "Choose a shop nearby or search by device or brand.",
  },
  {
    n: "02",
    icon: Ticket,
    title: "Book",
    description: "Fill a quick QC checklist and pick a protection plan.",
  },
  {
    n: "03",
    icon: LocateFixed,
    title: "Track",
    description: "Get live updates from drop-off to pickup.",
  },
];

type Geometry = { centers: number[]; stops: number[] };

export default function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [geom, setGeom] = useState<Geometry | null>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const springY = useSpring(scrollY, { stiffness: 120, damping: 26, mass: 0.6 });

  // Measure each circle's vertical center inside the timeline, and the window
  // scroll position at which that circle sits at the viewport's center.
  const measure = useCallback(() => {
    const container = timelineRef.current;
    if (!container) return;
    const circles = circleRefs.current.slice(0, steps.length);
    if (circles.some((c) => !c)) return;
    const cRect = container.getBoundingClientRect();
    if (cRect.width === 0) {
      setGeom(null);
      return;
    }
    const centers = circles.map((c) => {
      const r = c!.getBoundingClientRect();
      return r.top - cRect.top + r.height / 2;
    });
    const topDoc = cRect.top + window.scrollY;
    const stops = centers.map((cy) => topDoc + cy - window.innerHeight / 2);
    setGeom({ centers, stops });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (timelineRef.current) ro.observe(timelineRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const stops = geom?.stops ?? [0, 1, 2];
  const centers = geom?.centers ?? [0, 0, 0];
  // The marker rides from the first circle to the last as the page scrolls,
  // resting exactly on each circle as it's centered in the viewport.
  const markerY = useTransform(springY, stops, centers, { clamp: true });
  const fillHeight = useTransform(markerY, (m) => Math.max(0, m - centers[0]));

  // A number lights up only once the traveling marker actually reaches it —
  // track the marker's sprung position, not the raw scroll midpoints.
  useMotionValueEvent(markerY, "change", (m) => {
    if (!geom) return;
    const idx = geom.centers.reduce(
      (acc, c, i) => (m >= c - 2 ? i : acc),
      0,
    );
    setActive(idx);
  });

  const animate = !!geom && !reduceMotion;
  const displayActive = reduceMotion ? steps.length - 1 : active;
  const trackTop = centers[0];
  const trackHeight = centers[steps.length - 1] - centers[0];

  return (
    <section id="how-it-works" className="relative py-14 md:py-20">
      {/* Backdrop — the site's stripe motif carried through, softened */}
      <div className="absolute inset-0 stripes-bg opacity-30 pointer-events-none" aria-hidden />
      <div
        className="absolute top-0 bottom-0 left-[8%] right-[8%] bg-bg pointer-events-none"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading, sticky on desktop while the timeline scrolls */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-deep">
              How it works
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              From broken to brand-new in 3 steps
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-[17px]">
              RepairNear turns a messy repair errand into one guided flow —
              browse a trusted shop, book with a clear quote, and track your
              device all the way to pickup.
            </p>
          </motion.div>

          {/* Right — numbered timeline with a scroll-driven marker */}
          <div ref={timelineRef} className="relative">
            {/* Static connector track */}
            {geom && (
              <span
                className="absolute left-6 w-0.5 -translate-x-1/2 rounded-full bg-line"
                style={{ top: trackTop, height: trackHeight }}
                aria-hidden
              />
            )}
            {/* Accent fill trailing the marker */}
            {animate && (
              <motion.span
                className="absolute left-6 w-0.5 -translate-x-1/2 rounded-full bg-accent"
                style={{ top: trackTop, height: fillHeight }}
                aria-hidden
              />
            )}
            {/* Traveling marker — glides down, tucks behind each circle it reaches */}
            {animate && (
              <motion.span
                className="absolute left-6 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_var(--color-accent-tint)]"
                style={{ top: markerY }}
                aria-hidden
              />
            )}

            {steps.map((step, index) => {
              const last = index === steps.length - 1;
              const on = index <= displayActive;

              return (
                <motion.div
                  key={step.n}
                  className="flex gap-5 md:gap-7"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                >
                  {/* Numbered circle — lights accent as the marker reaches it */}
                  <div
                    ref={(el) => {
                      circleRefs.current[index] = el;
                    }}
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-bold transition-colors duration-300 ${
                      on
                        ? "bg-accent text-white shadow-[0_14px_30px_-12px_rgba(242,120,46,0.9)]"
                        : "border border-line bg-bg-alt text-ink-soft"
                    }`}
                  >
                    {step.n}
                  </div>

                  {/* Card — the step's icon sits as a watermark behind the title */}
                  <div className={last ? "flex-1" : "flex-1 pb-10 md:pb-12"}>
                    <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-alt p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_-38px_rgba(11,11,10,0.5)] md:p-7">
                      <step.icon
                        size={110}
                        strokeWidth={1.2}
                        aria-hidden
                        className={`pointer-events-none absolute -right-4 -top-5 -rotate-12 transition-colors duration-300 ${
                          on ? "text-accent/15" : "text-ink/5"
                        }`}
                      />
                      <h3 className="relative text-xl font-extrabold tracking-tight md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="relative mt-2 text-[15px] leading-relaxed text-ink-soft">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
