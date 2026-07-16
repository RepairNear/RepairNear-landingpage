"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { ShieldCheck, Ticket, LocateFixed } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    kicker: "Trust",
    pain: "No idea who to trust",
    title: "Vetted, rated technicians",
    body: "Every shop on RepairNear is verified and reviewed by real customers before it's listed.",
  },
  {
    icon: Ticket,
    kicker: "Booking",
    pain: "Calling shops one by one",
    title: "Booking a repair",
    body: "Compare nearby repair shops and book a repair in just a few taps.",
  },
  {
    icon: LocateFixed,
    kicker: "Tracking",
    pain: "Where is my device?",
    title: "Real-time order tracking",
    body: "Watch your repair progress live, from drop-off to pickup.",
  },
];

type Geometry = {
  stops: number[];
  xs: number[];
  ys: number[];
  w: number;
  h: number;
  path: string;
};

export default function WhyRepairNear() {
  const sectionRef = useRef<HTMLElement>(null);
  const dockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [geom, setGeom] = useState<Geometry | null>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const springY = useSpring(scrollY, {
    stiffness: 120,
    damping: 26,
    mass: 0.6,
  });

  // Measure where each dock sits inside the section, and at which window
  // scroll position each dock is vertically centered in the viewport.
  const measure = useCallback(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const docks = dockRefs.current.slice(0, points.length);
    if (docks.some((d) => !d)) return;
    const sRect = sec.getBoundingClientRect();
    const rects = docks.map((d) => d!.getBoundingClientRect());
    if (rects[0].width === 0) {
      setGeom(null);
      return;
    }
    const secTop = sRect.top + window.scrollY;
    const xs = rects.map((r) => r.left - sRect.left);
    const ys = rects.map((r) => r.top - sRect.top);
    const cxs = rects.map((r, i) => xs[i] + r.width / 2);
    const cys = rects.map((r, i) => ys[i] + r.height / 2);
    const stops = cys.map((cy) => secTop + cy - window.innerHeight / 2);
    let path = `M ${cxs[0]} ${cys[0]}`;
    for (let i = 0; i < cxs.length - 1; i++) {
      const dy = cys[i + 1] - cys[i];
      path += ` C ${cxs[i]} ${cys[i] + dy * 0.5}, ${cxs[i + 1]} ${
        cys[i + 1] - dy * 0.5
      }, ${cxs[i + 1]} ${cys[i + 1]}`;
    }
    setGeom({ stops, xs, ys, w: sRect.width, h: sRect.height, path });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (sectionRef.current) ro.observe(sectionRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const stops = geom?.stops ?? [0, 1, 2];
  const phoneX = useTransform(springY, stops, geom?.xs ?? [0, 0, 0]);
  const phoneY = useTransform(springY, stops, geom?.ys ?? [0, 0, 0]);
  const phoneBank = useTransform(
    springY,
    [
      stops[0],
      (stops[0] + stops[1]) / 2,
      stops[1],
      (stops[1] + stops[2]) / 2,
      stops[2],
    ],
    [0, -4, 0, 4, 0],
  );
  const pathProgress = useTransform(springY, [stops[0], stops[2]], [0, 1]);

  useMotionValueEvent(scrollY, "change", (v) => {
    if (!geom) return;
    const m01 = (geom.stops[0] + geom.stops[1]) / 2;
    const m12 = (geom.stops[1] + geom.stops[2]) / 2;
    setActive(v < m01 ? 0 : v < m12 ? 1 : 2);
  });

  const showTraveler = !!geom && !reduceMotion;

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative py-17 md:py-15 overflow-hidden"
    >
      {/* Backdrop — the hero's stripe motif carried through, plus soft brand glows */}
      <div
        className="absolute inset-0 stripes-bg opacity-40 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-0 bottom-0 left-[8%] right-[8%] bg-bg pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-[10%] top-[14%] h-[380px] w-[380px] rounded-full bg-accent-tint/60 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute left-[8%] top-[44%] h-[360px] w-[360px] rounded-full bg-teal-tint/70 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute right-[12%] bottom-[6%] h-[340px] w-[340px] rounded-full bg-accent-tint/50 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* The route the phone travels, drawn in as you scroll */}
      {showTraveler && (
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox={`0 0 ${geom.w} ${geom.h}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d={geom.path}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="2"
            strokeDasharray="3 10"
            strokeLinecap="round"
          />
          <motion.path
            d={geom.path}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: pathProgress }}
          />
        </svg>
      )}

      {/* The traveling phone — glides dock to dock, banking gently in transit */}
      {showTraveler && (
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
          style={{ x: phoneX, y: phoneY, rotate: phoneBank }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <PhoneMockup active={active} />
        </motion.div>
      )}

      <div className="container-page relative">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-deep">
            WHY REPAIRNEAR
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Repairs without the guesswork
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-[17px]">
            Three problems every repair customer knows — solved in one app.
          </p>
        </div>

        <div className="mx-auto flex max-w-[900px] flex-col gap-14 md:gap-16">
          {points.map((point, i) => (
            <PointRow
              key={point.title}
              point={point}
              index={i}
              flip={i % 2 === 1}
              active={active === i}
              stop={geom ? geom.stops[i] : null}
              springY={springY}
              reduceMotion={!!reduceMotion}
              dockRef={(el) => {
                dockRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PointRow({
  point,
  index,
  flip,
  active,
  stop,
  springY,
  reduceMotion,
  dockRef,
}: {
  point: (typeof points)[number];
  index: number;
  flip: boolean;
  active: boolean;
  stop: number | null;
  springY: MotionValue<number>;
  reduceMotion: boolean;
  dockRef: (el: HTMLDivElement | null) => void;
}) {
  // Copy breathes with the phone: brightens and leans toward it as it docks,
  // recedes as it flies off to the next point.
  const s = stop ?? 0;
  const copyOpacity = useTransform(
    springY,
    [s - 420, s, s + 420],
    [0.4, 1, 0.4],
  );
  const copyX = useTransform(
    springY,
    [s - 420, s, s + 420],
    [flip ? 26 : -26, 0, flip ? 26 : -26],
  );
  const scrollDriven = stop != null && !reduceMotion;

  const reveal =
    !scrollDriven && !reduceMotion
      ? {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.55, ease: "easeOut" as const },
        }
      : {};

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
      <motion.div
        className={`max-w-[400px] ${
          flip ? "md:order-2 md:justify-self-start" : "md:justify-self-end"
        }`}
        style={scrollDriven ? { opacity: copyOpacity, x: copyX } : undefined}
        {...reveal}
      >
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
              active ? "bg-accent-tint" : "border border-line bg-white"
            }`}
          >
            <point.icon
              size={20}
              className={active ? "text-accent-deep" : "text-ink-muted"}
            />
          </div>
          <p className="flex items-center gap-3 font-mono text-[12px] font-bold tracking-[0.2em] text-accent-deep">
            0{index + 1}
            <span className="h-px w-10 bg-accent" />
            <span className="uppercase">{point.kicker}</span>
          </p>
        </div>
        <p className="mb-1.5 text-[14px] text-ink-muted line-through">
          {point.pain}
        </p>
        <h3 className="mb-2 text-2xl font-extrabold tracking-tight md:text-[30px] md:leading-tight">
          {point.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-soft md:text-base">
          {point.body}
        </p>
      </motion.div>

      {/* Dock — the empty seat the traveling phone parks in */}
      {!reduceMotion && (
        <div
          className={`hidden md:flex ${
            flip
              ? "md:order-1 justify-center md:justify-end md:pr-6"
              : "justify-center md:justify-start md:pl-6"
          }`}
        >
          <div ref={dockRef} className="h-[520px] w-[256px]" />
        </div>
      )}

      {/* Mobile & reduced-motion: a static phone per point */}
      <motion.div
        className={`flex justify-center ${
          reduceMotion ? (flip ? "md:order-1" : "") : "md:hidden"
        }`}
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative h-[391px] w-[192px]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.752]">
            <PhoneMockup active={index} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Real app screenshots — one per point, in the same order as `points`.
const screens = [
  {
    src: "/photos/vettedtechnicains.jpeg",
    alt: "RepairNear app showing top-rated repair shops near you",
  },
  {
    src: "/photos/booking.jpeg",
    alt: "RepairNear app confirming a submitted repair booking",
  },
  {
    src: "/photos/tracking.jpeg",
    alt: "RepairNear app tracking repair progress step by step",
  },
];

function PhoneMockup({ active }: { active: number }) {
  return (
    <div className="relative h-[520px] w-[256px]">
      {/* titanium band, bezel, screen, glass sheen */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#55555a] via-[#232326] to-[#3c3c41] p-[3px] shadow-[0_40px_80px_-24px_rgba(11,11,10,0.5)]">
        <div className="relative h-full w-full rounded-[45px] bg-[#0b0b0c] p-[9px]">
          <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-bg-alt">
            <div className="absolute left-1/2 top-2 z-20 flex h-[18px] w-[62px] -translate-x-1/2 items-center justify-end rounded-full bg-[#0b0b0c] pr-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1c2b45] ring-1 ring-white/10" />
            </div>

            {screens.map((screen, i) => (
              <motion.div
                key={screen.src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  y: active === i ? 0 : 10,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  sizes="256px"
                  className="object-cover object-top"
                />
              </motion.div>
            ))}

            {/* glass reflection */}
            <div
              className="pointer-events-none absolute inset-0 z-30 rounded-[37px] bg-[linear-gradient(118deg,rgba(255,255,255,0.14),rgba(255,255,255,0)_36%)]"
              aria-hidden
            />
          </div>
        </div>
        {/* side buttons */}
        <span
          className="absolute -right-[2.5px] top-[128px] h-[62px] w-[3px] rounded-r-sm bg-[#39393e]"
          aria-hidden
        />
        <span
          className="absolute -left-[2.5px] top-[92px] h-[22px] w-[3px] rounded-l-sm bg-[#39393e]"
          aria-hidden
        />
        <span
          className="absolute -left-[2.5px] top-[132px] h-[42px] w-[3px] rounded-l-sm bg-[#39393e]"
          aria-hidden
        />
        <span
          className="absolute -left-[2.5px] top-[184px] h-[42px] w-[3px] rounded-l-sm bg-[#39393e]"
          aria-hidden
        />
      </div>
    </div>
  );
}
