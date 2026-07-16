"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Users, Wrench, Check, ArrowLeftRight } from "lucide-react";

const cards = [
  {
    photo: "/photos/customers.jpg",
    photoAlt: "Ghanaian customers using their phones",
    icon: Users,
    accentToken: "accent", // orange
    label: "For Customers",
    title: "Find the right shop, fast.",
    description:
      "Skip the shop-hopping. Compare verified technicians near you in seconds.",
    benefits: [
      "Verified shops & technicians",
      "Optional protection plans",
      "Real-time order tracking",
      "In-app technician chat",
    ],
  },
  {
    photo: "/photos/technician.jpg",
    photoAlt: "A verified RepairNear technician at work",
    icon: Wrench,
    accentToken: "teal", // teal
    label: "For Technicians",
    title: "Take your shop online.",
    description:
      "Reach new customers, manage jobs, and grow your repair business.",
    benefits: [
      "Grow your repair business",
      "Manage jobs effortlessly",
      "Instant job alerts nearby",
      "Flexible subscription plans",
    ],
  },
] as const;

// Accent token → the two brand "worlds" that meet at the seam.
const accentStyles = {
  accent: {
    panel: "bg-accent-tint",
    scrim: "to-accent-tint",
    badge: "bg-accent",
    label: "text-accent-deep",
    check: "text-accent-deep",
  },
  teal: {
    panel: "bg-teal-tint",
    scrim: "to-teal-tint",
    badge: "bg-teal",
    label: "text-teal",
    check: "text-teal",
  },
} as const;

export default function BuiltForEveryone() {
  return (
    <section id="built-for-everyone" className="py-16 md:py-24">
      <div className="container-page">
        {/* Heading area */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-accent-deep">
            Built for everyone
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            One marketplace. Two sides. Everyone wins.
          </h2>
        </motion.div>

        {/* Split diptych — the two sides of the marketplace meeting at a seam */}
        <motion.div
          className="relative grid grid-cols-1 overflow-hidden rounded-3xl border border-line shadow-[0_40px_90px_-60px_rgba(11,11,10,0.55)] md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            const styles = accentStyles[card.accentToken];

            return (
              <div
                key={card.label}
                className={`group relative flex flex-col ${styles.panel} ${
                  index === 1
                    ? "border-t border-line md:border-t-0 md:border-l"
                    : ""
                }`}
              >
                {/* Photo — melts into the colored panel below */}
                <div className="relative h-52 overflow-hidden sm:h-60 md:h-72">
                  <Image
                    src={card.photo}
                    alt={card.photoAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-transparent ${styles.scrim}`}
                    aria-hidden
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2.5 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.badge}`}
                    >
                      <Icon size={20} className="text-white" aria-hidden />
                    </div>
                    <p
                      className={`text-[12px] font-bold uppercase tracking-[0.15em] ${styles.label}`}
                    >
                      {card.label}
                    </p>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {card.description}
                  </p>

                  <ul className="mt-1 space-y-2">
                    {card.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-[15px] text-ink"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
                          <Check size={12} className={styles.check} aria-hidden />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Connector emblem — bridges the two sides on the seam (desktop) */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white shadow-[0_16px_36px_-18px_rgba(11,11,10,0.5)]">
              <ArrowLeftRight size={22} className="text-ink" aria-hidden />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
