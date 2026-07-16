import type { Metadata } from "next";
import Link from "next/link";
import { FileClock, ArrowRight } from "lucide-react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The RepairNear Privacy Policy is coming soon. RepairNear is owned and operated by Davis Dag Electronics.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="container-page py-12 md:py-20 border-b border-line">
          <p className="text-[13px] font-bold tracking-[0.15em] uppercase text-accent-deep mb-4">
            LEGAL
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Privacy Policy
          </h1>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8 text-[14px] text-ink-soft">
            <p>
              Owned by:{" "}
              <span className="font-semibold text-ink">
                Davis Dag Electronics
              </span>
            </p>
            <p>
              Registered in:{" "}
              <span className="font-semibold text-ink">Republic of Ghana</span>
            </p>
          </div>
        </header>

        <section className="container-page pt-12 md:pt-16 pb-24">
          <div className="max-w-2xl border border-line rounded-[16px] bg-bg-alt p-8 md:p-12">
            <div className="flex size-12 items-center justify-center rounded-full bg-accent-tint text-accent-deep mb-6">
              <FileClock size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4">
              Coming soon
            </h2>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-ink-soft mb-4">
              We&apos;re putting the finishing touches on our Privacy Policy.
              It will explain how RepairNear collects, uses, stores, and
              protects your personal data in line with the Data Protection
              Act, 2012 (Act 843) of Ghana.
            </p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-ink-soft mb-8">
              In the meantime, our Terms of Service outline our data
              protection commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/terms#data-protection"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-[11px] bg-accent text-white transition-colors hover:bg-accent-deep"
              >
                Read Section 20 of our Terms
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-[11px] border border-line text-ink transition-colors hover:bg-bg"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
