"use client";

import { useId, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "How do I book a repair?",
    answer:
      "Open the RepairNear app, tell us your device and what's wrong, then compare verified technicians near you by distance and rating. Pick a time, confirm your booking, and follow your repair with live status — from drop-off to pickup.",
  },
  {
    question: "What is RepairNear Protection?",
    answer:
      "Protection is an optional add-on for any booking. It covers dispute resolution, mediator support, and a 72-hour technician response guarantee — so you're never left stranded if a repair doesn't go to plan.",
  },
  {
    question: "How do I find a trusted technician?",
    answer:
      "Every shop on RepairNear is vetted and rated by real customers. Filter by device, distance, and rating, then check verified badges and honest reviews so you know exactly who you're booking before you commit.",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Yes. You can cancel free of charge any time before the technician starts work, right from the app. Once a repair is underway, cancellations may be subject to the shop's own policy, which is always shown upfront.",
  },
  {
    question: "How do technicians get verified?",
    answer:
      "We review each technician's ID, business details, and repair skills before they go live. Verified shops carry a badge and are continuously scored on completed jobs — so the rating you see reflects real, recent work.",
  },
  {
    question: "What if I'm not satisfied with the repair?",
    answer:
      "Reach out through the app within your guarantee window. With Protection, our mediators step in to resolve the issue — including arranging a re-repair or a fair resolution, so a bad experience never has to be the end of it.",
  },
];

// Card rises in on scroll, then each row cascades.
const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
  reduce,
}: {
  faq: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  reduce: boolean;
}) {
  const uid = useId();
  const buttonId = `faq-btn-${uid}`;
  const panelId = `faq-panel-${uid}`;

  return (
    <motion.div
      variants={row}
      className={`border-b border-line last:border-b-0 ${
        isOpen ? "bg-teal-tint/40" : ""
      } transition-colors duration-300`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-8 md:py-7"
        >
          <span
            className={`text-[17px] font-semibold leading-snug tracking-tight transition-colors duration-200 md:text-[19px] ${
              isOpen
                ? "text-accent-deep"
                : "text-ink group-hover:text-accent-deep"
            }`}
          >
            <span
              aria-hidden
              className="mr-3 hidden text-[13px] font-bold tabular-nums text-ink-muted sm:inline"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {faq.question}
          </span>

          <motion.span
            aria-hidden
            animate={reduce ? undefined : { rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
              isOpen
                ? "border-transparent bg-accent text-white shadow-[0_10px_22px_-10px_rgba(242,120,46,0.9)]"
                : "border-line text-ink-soft group-hover:border-accent/50 group-hover:text-accent"
            }`}
          >
            <ChevronDown size={18} />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{
              duration: reduce ? 0 : 0.34,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl px-6 pb-7 text-[15px] leading-relaxed text-ink-soft md:px-8 md:pb-8 md:pl-[4.25rem] md:text-[16px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const reduce = useReducedMotion();
  // Single-open accordion; first question opens by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-page relative">
        {/* Soft decorative glow behind the card, echoing the site's depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 -top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(20,99,87,0.12),transparent_65%)] blur-2xl"
        />

        {/* Heading */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-deep">
            Got questions?
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
            Everything you need to know about booking, Protection, and getting
            your device fixed with confidence.
          </p>
        </motion.div>

        {/* Accordion card */}
        <motion.div
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-line bg-bg-alt shadow-[0_40px_90px_-60px_rgba(11,11,10,0.55)] md:rounded-[36px]"
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              reduce={!!reduce}
            />
          ))}
        </motion.div>

        {/* Still have questions — support CTA */}
        <motion.div
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-bg-alt px-6 py-5 text-center shadow-sm sm:flex-row sm:text-left"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-[15px] font-medium text-ink-soft">
            Still have questions?{" "}
            <span className="font-semibold text-ink">
              Our team is here to help.
            </span>
          </p>
          <a
            href="mailto:dagelectronics58@gmail.com"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Contact support
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
