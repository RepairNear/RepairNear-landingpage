"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Star, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  stars: number;
  quote: string;
  name: string;
  location: string;
  bg: string;
  quoteColor: string;
};

const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote:
      "My laptop screen was fixed the same day. Tracked the whole thing from the app — no calls, no stress.",
    name: "Esi Quaye",
    location: "Kumasi, Ghana",
    bg: "bg-accent-tint",
    quoteColor: "text-accent-deep",
  },
  {
    stars: 5,
    quote:
      "Found a verified shop two streets away. The quote matched what I paid. Finally, transparency.",
    name: "Daniel Owusu",
    location: "Accra, Ghana",
    bg: "bg-teal-tint",
    quoteColor: "text-teal",
  },
  {
    stars: 4,
    quote:
      "Booked, dropped off, picked up. Super smooth. Protection plan saved me when a part needed replacing.",
    name: "Akua Sarpong",
    location: "Tema, Ghana",
    bg: "bg-bg-alt",
    quoteColor: "text-ink-muted",
  },
  {
    stars: 5,
    quote:
      "Felt safe choosing a technician for the first time. The reviews and verified badge made the difference.",
    name: "Yaw Boadu",
    location: "Takoradi, Ghana",
    bg: "bg-accent-tint",
    quoteColor: "text-accent-deep",
  },
];

// Group the testimonials into pages of two — page 0 shows first, then it
// auto-advances to reveal the next pair.
const PER_PAGE = 2;
const pages: Testimonial[][] = [];
for (let i = 0; i < testimonials.length; i += PER_PAGE) {
  pages.push(testimonials.slice(i, i + PER_PAGE));
}

const AUTOPLAY_MS = 5000;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, s) =>
        s < count ? (
          <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />
        ) : (
          <Star key={s} size={16} className="text-yellow-500/40" />
        )
      )}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.figure
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`${t.bg} relative flex h-full flex-col overflow-hidden rounded-3xl border border-line p-7 shadow-[0_40px_90px_-60px_rgba(11,11,10,0.55)] md:p-9`}
    >
      {/* Decorative quote watermark */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-3 right-5 select-none text-[110px] leading-none ${t.quoteColor} opacity-20`}
        style={{ fontFamily: "Georgia, serif" }}
      >
        &rdquo;
      </span>

      <Stars count={t.stars} />

      <blockquote className="relative mt-5 mb-8 text-[16px] font-medium leading-relaxed text-ink md:text-[18px]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5">
        <div>
          <p className="text-[15px] font-bold text-ink">{t.name}</p>
          <p className="text-[12px] text-ink-soft">{t.location}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-tint px-3 py-1.5 text-[11px] font-semibold text-teal">
          <ShieldCheck size={12} />
          Verified
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  // Auto-advance to the next pair. Keyed on `page`, so any manual navigation
  // resets the timer instead of firing a double jump.
  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setTimeout(() => {
      setDirection(1);
      setPage((p) => (p + 1) % pages.length);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [page, paused, reduce]);

  const go = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + pages.length) % pages.length);
  };

  const goTo = (i: number) => {
    if (i === page) return;
    setDirection(i > page ? 1 : -1);
    setPage(i);
  };

  const dist = reduce ? 0 : 64;
  const pageVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? dist : -dist }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -dist : dist }),
  };

  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container-page">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-deep">
            Customer stories
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            What our customers say
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
            Real repairs, real people. Here&rsquo;s what the RepairNear community
            has to say.
          </p>
        </motion.div>

        {/* Carousel — pauses on hover/focus */}
        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
            >
              {pages[page].map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls — arrows flanking page dots, beneath the cards */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <motion.button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-alt text-ink transition-colors hover:border-transparent hover:bg-accent hover:text-white"
            >
              <ArrowLeft size={18} aria-hidden />
            </motion.button>

            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonials ${i + 1} of ${pages.length}`}
                  aria-current={i === page}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-6 bg-accent"
                      : "w-2 bg-line hover:bg-ink-muted"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonials"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-alt text-ink transition-colors hover:border-transparent hover:bg-accent hover:text-white"
            >
              <ArrowRight size={18} aria-hidden />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
