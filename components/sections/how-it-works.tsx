"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Clock,
  LocateFixed,
  MapPin,
  Receipt,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 4000;

const steps = [
  {
    kicker: "Step 1",
    title: "Browse",
    body: "Choose a trusted shop nearby, or search by device, repair type, or brand.",
    meta: "Verified shops, ratings, distance, and repair specialties in one scan.",
    icon: Search,
    Scene: BrowseScene,
  },
  {
    kicker: "Step 2",
    title: "Book",
    body: "Fill a quick QC checklist, confirm the repair quote, and pick a protection plan.",
    meta: "Your price and warranty details are locked before drop-off.",
    icon: Receipt,
    Scene: BookScene,
  },
  {
    kicker: "Step 3",
    title: "Track",
    body: "Follow live updates from drop-off to pickup, including quality check and ETA.",
    meta: "No guessing, no repeated calls, just clear repair progress.",
    icon: LocateFixed,
    Scene: TrackScene,
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const reduceMotion = useReducedMotion();
  const slideHeight = 100 / steps.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [timerKey]);

  const jumpToStep = (index: number) => {
    setActive(index);
    setTimerKey((current) => current + 1);
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 stripes-bg opacity-35 pointer-events-none" aria-hidden />
      <div
        className="absolute top-0 bottom-0 left-[8%] right-[8%] bg-bg pointer-events-none"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="mx-auto max-w-[460px] text-center lg:mx-0 lg:text-left">
            <p className="mb-3 font-mono text-[12px] font-semibold uppercase text-teal">
              How it works
            </p>
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              From broken to ready in 3 steps
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-[17px]">
              RepairNear turns a messy repair errand into one guided flow:
              browse, book, and track.
            </p>

            <div
              className="mt-9 flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
              aria-label="How it works steps"
            >
              {steps.map((step, index) => {
                const selected = active === index;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => jumpToStep(index)}
                    aria-current={selected ? "step" : undefined}
                    aria-label={`Show ${step.kicker}: ${step.title}`}
                    className={cn(
                      "group flex min-w-[150px] items-center gap-3 rounded-[18px] border px-2.5 py-2.5 text-left transition-colors duration-300 lg:min-w-0",
                      selected
                        ? "border-line bg-bg-alt shadow-[0_18px_40px_-28px_rgba(11,11,10,0.45)]"
                        : "border-transparent hover:bg-bg-alt"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold transition-colors duration-300",
                        selected
                          ? "bg-accent text-bg-alt"
                          : "border border-line bg-bg-alt text-ink-soft"
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className="hidden min-w-0 sm:block">
                      <span
                        className={cn(
                          "block text-[12px] font-semibold uppercase transition-colors",
                          selected ? "text-accent-deep" : "text-ink-muted"
                        )}
                      >
                        {step.kicker}
                      </span>
                      <span className="block truncate text-[15px] font-bold text-ink">
                        {step.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative h-[680px] overflow-hidden rounded-[28px] border border-line bg-bg-alt shadow-[0_38px_90px_-62px_rgba(11,11,10,0.55)] sm:h-[640px] lg:h-[540px]">
            <div
              className="will-change-transform"
              style={{
                height: `${steps.length * 100}%`,
                transform: `translateY(-${active * slideHeight}%)`,
                transition: reduceMotion
                  ? "none"
                  : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const Scene = step.Scene;

                return (
                  <article
                    key={step.title}
                    className="grid items-center gap-7 p-5 sm:p-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:p-10"
                    style={{ height: `${slideHeight}%` }}
                    aria-hidden={active !== index}
                  >
                    <Scene />

                    <div className="mx-auto max-w-[430px] lg:mx-0">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-accent text-bg-alt shadow-[0_16px_32px_-20px_rgba(242,120,46,0.9)]">
                        <Icon size={22} aria-hidden />
                      </div>
                      <p className="mb-2 font-mono text-[12px] font-semibold uppercase text-teal">
                        {step.kicker}
                      </p>
                      <h3 className="text-3xl font-extrabold leading-tight md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
                        {step.body}
                      </p>
                      <div className="mt-6 flex items-start gap-3 rounded-[16px] border border-line bg-bg px-4 py-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-bg-alt">
                          <Check size={13} aria-hidden />
                        </span>
                        <p className="text-[13px] leading-relaxed text-ink-soft md:text-sm">
                          {step.meta}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[285px] overflow-hidden rounded-[24px] border border-line bg-bg sm:h-[315px] lg:h-[380px]">
      <div className="absolute inset-0 stripes-bg opacity-45" aria-hidden />
      <div className="absolute inset-x-6 bottom-8 h-3 rounded-full bg-line/70" aria-hidden />
      {children}
    </div>
  );
}

function BrowseScene() {
  const shops = [
    { initials: "FP", name: "FixPoint Osu", rating: "4.9", distance: "1.2 km" },
    { initials: "TB", name: "TechBridge", rating: "4.8", distance: "2.4 km" },
  ];

  return (
    <SceneStage>
      <div className="absolute left-[7%] top-[12%] w-[72%] rounded-[22px] border-[3px] border-ink bg-bg-alt p-3 shadow-[8px_8px_0_var(--color-line)]">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-line" />
        </div>

        <div className="mb-3 flex items-center gap-2 rounded-full border-2 border-ink bg-bg px-3 py-2 text-[11px] font-semibold text-ink-soft">
          <Search size={13} aria-hidden />
          iPhone screen
        </div>

        <div className="space-y-2">
          {shops.map((shop) => (
            <div
              key={shop.name}
              className="flex items-center gap-2.5 rounded-[16px] border-2 border-ink bg-bg p-2"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-teal-tint text-[10px] font-extrabold text-teal">
                {shop.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-extrabold">{shop.name}</p>
                <p className="flex items-center gap-1 text-[10px] font-semibold text-ink-soft">
                  <Star size={10} className="fill-accent text-accent" aria-hidden />
                  {shop.rating} - {shop.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[13%] right-[7%] w-[29%] rounded-[24px] border-[3px] border-ink bg-bg-alt p-2 shadow-[6px_6px_0_var(--color-accent-tint)]">
        <div className="mx-auto mb-2 h-1.5 w-8 rounded-full bg-ink" />
        <div className="rounded-[18px] bg-teal-tint px-2 py-4 text-center">
          <MapPin className="mx-auto mb-2 text-teal" size={27} aria-hidden />
          <p className="text-[10px] font-extrabold text-teal">Nearby</p>
        </div>
      </div>
    </SceneStage>
  );
}

function BookScene() {
  const checks = ["QC checklist", "Repair quote", "Protection plan"];

  return (
    <SceneStage>
      <div className="absolute left-[8%] top-[13%] w-[54%] rounded-[22px] border-[3px] border-ink bg-bg-alt p-4 shadow-[8px_8px_0_var(--color-line)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase text-ink-soft">Repair</p>
            <p className="text-[15px] font-extrabold">Screen fix</p>
          </div>
          <Receipt className="text-accent-deep" size={25} aria-hidden />
        </div>

        <div className="space-y-2.5">
          {checks.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink",
                  index === 2 ? "bg-accent-tint" : "bg-teal"
                )}
              >
                <Check
                  size={13}
                  className={index === 2 ? "text-accent-deep" : "text-bg-alt"}
                  aria-hidden
                />
              </span>
              <span className="h-3 flex-1 rounded-full bg-line" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-[14px] border-2 border-ink bg-bg px-3 py-2">
          <span className="text-[11px] font-bold text-ink-soft">Total</span>
          <span className="text-[15px] font-extrabold">GHS 970</span>
        </div>
      </div>

      <div className="absolute bottom-[13%] right-[8%] w-[39%] rounded-[22px] border-[3px] border-ink bg-accent-tint p-3 shadow-[7px_7px_0_var(--color-accent)]">
        <ShieldCheck className="mb-2 text-accent-deep" size={30} aria-hidden />
        <p className="text-[12px] font-extrabold text-accent-deep">Protection</p>
        <div className="mt-3 space-y-1.5">
          <span className="block h-2.5 rounded-full bg-bg-alt" />
          <span className="block h-2.5 w-3/4 rounded-full bg-bg-alt" />
        </div>
      </div>
    </SceneStage>
  );
}

function TrackScene() {
  const updates = [
    { label: "Dropped off", done: true },
    { label: "Repairing", done: true },
    { label: "Pickup", done: false },
  ];

  return (
    <SceneStage>
      <div className="absolute left-[8%] top-[15%] h-[60%] w-[55%] rounded-[22px] border-[3px] border-ink bg-bg-alt p-4 shadow-[8px_8px_0_var(--color-line)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase text-ink-soft">Order RN-2841</p>
            <p className="text-[15px] font-extrabold">Live repair status</p>
          </div>
          <Clock className="text-teal" size={24} aria-hidden />
        </div>

        <div className="relative space-y-4">
          <span className="absolute left-3 top-3 h-[calc(100%-24px)] w-0.5 bg-line" />
          {updates.map((update) => (
            <div key={update.label} className="relative flex items-center gap-3">
              <span
                className={cn(
                  "z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink",
                  update.done ? "bg-teal" : "bg-bg"
                )}
              >
                {update.done ? (
                  <Check size={13} className="text-bg-alt" aria-hidden />
                ) : (
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                )}
              </span>
              <span className="text-[12px] font-extrabold text-ink-soft">
                {update.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[13%] right-[8%] w-[35%] rounded-[24px] border-[3px] border-ink bg-bg-alt p-2 shadow-[6px_6px_0_var(--color-teal-tint)]">
        <div className="mx-auto mb-2 h-1.5 w-8 rounded-full bg-ink" />
        <div className="rounded-[18px] bg-teal-tint p-3 text-center">
          <LocateFixed className="mx-auto mb-2 text-teal" size={30} aria-hidden />
          <p className="text-[10px] font-extrabold text-teal">Ready 2:30 PM</p>
        </div>
      </div>
    </SceneStage>
  );
}
