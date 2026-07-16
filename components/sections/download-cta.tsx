"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

// Text block rises in on scroll, then each element cascades.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function DownloadCta() {
  const reduce = useReducedMotion();

  return (
    <section id="download" className="scroll-mt-24 pt-8 pb-4 md:pt-12">
      <div className="container-page">
        <motion.div
          className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-accent to-accent-deep shadow-[0_60px_120px_-60px_rgba(184,84,26,0.75)] md:rounded-[36px]"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Faint mosaic grid, echoing the panel texture */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
            aria-hidden
          />
          {/* Soft glows — white behind the headline, accent behind the phone */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full bg-white/10 blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-[420px] w-[420px] rounded-full bg-white/20 blur-[120px]"
            aria-hidden
          />
          {/* Inner ring for panel polish */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10 md:rounded-[36px]"
            aria-hidden
          />

          <div className="relative z-10 grid md:grid-cols-[1.1fr_0.9fr]">
            {/* Left — copy + CTAs */}
            <motion.div
              className="px-7 pt-12 text-center sm:px-10 md:px-10 md:py-16 md:text-left lg:px-16 lg:py-24"
              variants={container}
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.h2
                variants={item}
                className="mx-auto max-w-[520px] text-[32px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[40px] md:mx-0 md:text-[36px] lg:text-[46px] xl:text-[52px]"
              >
                Your trusted repair, right around you.
              </motion.h2>

              <motion.p
                variants={item}
                className="mx-auto mt-5 max-w-[420px] text-[16px] leading-relaxed text-white/85 md:mx-0 md:text-[17px]"
              >
                Download RepairNear and book your first repair in minutes.
              </motion.p>

              {/* Same CTA pair as the hero */}
              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap items-center justify-center gap-5 md:justify-start"
              >
                <motion.a
                  href="#"
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="inline-flex items-center gap-2.5 rounded-[11px] bg-ink px-6 py-3.5 text-[14px] font-semibold text-white transition-shadow hover:shadow-[0_16px_36px_-14px_rgba(0,0,0,0.6)]"
                >
                  Get from Apple
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                </motion.a>

                <span className="text-[13px] font-medium text-white/70">
                  Or
                </span>

                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.DAGElectronics.repairnear"
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="inline-flex items-center gap-2.5 rounded-[11px] bg-white px-6 py-3.5 text-[14px] font-semibold text-accent-deep transition-colors hover:bg-accent-tint hover:shadow-[0_16px_36px_-14px_rgba(0,0,0,0.35)]"
                >
                  Play Store
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right — spacer that reserves room for the phone on small screens */}
            <div className="relative h-[270px] sm:h-[300px] md:h-auto" aria-hidden />
          </div>

          {/* Phone mockup — bleeds out of the panel's bottom edge, tilted like the reference */}
          <motion.div
            className="pointer-events-none absolute -bottom-14 left-1/2 w-120 -translate-x-1/2 rotate-10 sm:w-135 md:-bottom-16 md:left-auto md:-right-50 md:w-155 md:translate-x-0 lg:-bottom-20 lg:-right-60 lg:w-175"
            initial={reduce ? false : { opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <Image
              src="/photos/footerpic.png"
              alt="RepairNear app on a phone"
              width={7878}
              height={6441}
              sizes="(min-width: 1024px) 700px, (min-width: 768px) 620px, 540px"
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
