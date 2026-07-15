"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Users, Wrench, ShieldCheck, Blend } from "lucide-react";

const values = [
  { icon: Users, label: "Customers first" },
  { icon: Wrench, label: "Skilled shops" },
  { icon: Blend, label: "Real transparency" },
];

export default function About() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — the story */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={item}
              className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-deep"
            >
              About RepairNear
            </motion.p>

            <motion.h2
              variants={item}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl"
            >
              Built in Ghana, for everyday device owners and the people who fix
              them.
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft md:text-[17px]"
            >
              RepairNear started with a simple frustration: getting a phone or
              laptop fixed shouldn&rsquo;t feel like a gamble. Our mission is to
              make device repair transparent, trustworthy, and stress-free for
              every Ghanaian — from Accra to Takoradi.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft md:text-[17px]"
            >
              We connect customers with vetted technicians, show what each
              repair includes upfront, and back every booking with optional
              Protection. For technicians, we provide tools to grow their shop,
              manage jobs, and reach more customers.
            </motion.p>

            {/* Value chips */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
            >
              {values.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-line bg-bg-alt px-3 py-5 text-center shadow-sm"
                >
                  <Icon size={22} className="text-accent" aria-hidden />
                  <span className="text-[13px] font-semibold text-ink md:text-[14px]">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — brand visual */}
          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[28px] bg-bg-alt shadow-[0_50px_110px_-60px_rgba(0,0,0,0.55)] ring-1 ring-black/5 md:min-h-[460px] md:rounded-[32px]">
              <Image
                src="/photos/about-pic.jpg"
                alt="The RepairNear team in Accra"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom-up scrim keeps the caption legible over the photo */}
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10 md:rounded-[32px]"
                aria-hidden
              />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <motion.span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30 backdrop-blur"
                    animate={reduce ? undefined : { y: [0, -6, 0] }}
                    transition={
                      reduce
                        ? undefined
                        : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
                    }
                  >
                    <ShieldCheck size={20} className="text-white" aria-hidden />
                  </motion.span>
                  <div>
                    <p className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                      The RepairNear team
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
