"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Star, ArrowRight, Check } from "lucide-react";

const coverage = [
  "Dispute resolution",
  "Mediator support",
  "48-hour technician response",
];

export default function Protection() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, x: 16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="protection" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <motion.div
          className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-12 shadow-[0_50px_110px_-60px_rgba(0,0,0,0.85)] md:rounded-[40px] md:px-14 md:py-16"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Circuit-board traces — tiled PCB motif, faded toward the edges */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
            style={{
              maskImage:
                "radial-gradient(120% 120% at 50% 40%, #000 52%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 50% 40%, #000 52%, transparent 100%)",
            }}
          >
            <defs>
              <pattern
                id="pcb"
                width="130"
                height="130"
                patternUnits="userSpaceOnUse"
              >
                <g
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.13"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 26 H72 V58 H104" />
                  <path d="M44 104 V66 H72" />
                  <path d="M96 110 V84 H66" />
                  <path d="M26 82 H50" />
                  <circle cx="72" cy="58" r="5.5" />
                </g>
                <g fill="#ffffff" fillOpacity="0.15">
                  <circle cx="20" cy="26" r="2.3" />
                  <circle cx="104" cy="58" r="2.3" />
                  <circle cx="44" cy="104" r="2.3" />
                  <circle cx="96" cy="110" r="2.3" />
                  <circle cx="26" cy="82" r="2.3" />
                  <circle cx="66" cy="84" r="2.3" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pcb)" />
          </svg>

          {/* Depth + glows — subtle sheen on black, warmed by a soft accent glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(242,120,46,0.22),transparent_65%)] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_65%)] blur-2xl"
            aria-hidden
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            {/* Left — the pitch */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                <span className="flex items-center gap-0.5" aria-hidden>
                  <Star size={11} className="fill-accent text-accent" />
                  <Star size={11} className="fill-accent text-accent" />
                  <Star size={11} className="fill-accent text-accent" />
                </span>
                RepairNear Protection
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-white md:text-[46px]">
                Add Protection — we step in if something goes wrong.
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70 md:text-[17px]">
                Optional peace of mind for any booking. Mediation, response
                guarantees, and dispute support — built in.
              </p>

              <a
                href="#how-it-works"
                className="group mt-7 inline-flex items-center gap-3 text-[15px] font-semibold text-white"
              >
                See what&rsquo;s covered
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={16} className="text-white" aria-hidden />
                </span>
              </a>
            </div>

            {/* Right — glass checklist card */}
            <motion.ul
              className="relative overflow-hidden rounded-[22px] border border-white/15 bg-linear-to-b from-white/[0.14] to-white/5 p-6 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.6)] backdrop-blur-md md:p-7"
              variants={list}
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* soft inner top highlight */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25"
                aria-hidden
              />
              {coverage.map((label) => (
                <motion.li
                  key={label}
                  className="flex items-center gap-4 py-3"
                  variants={item}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent shadow-[0_8px_18px_-8px_rgba(242,120,46,0.9)]">
                    <Check size={18} className="text-white" aria-hidden />
                  </span>
                  <span className="text-[16px] font-semibold text-white md:text-[17px]">
                    {label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
