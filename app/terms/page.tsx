import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { sections, termsMeta } from "@/lib/terms-content";
import { TocList, MobileToc } from "@/components/terms/toc";
import { SectionRenderer } from "@/components/terms/section-renderer";

export const metadata: Metadata = {
  title: "Terms of Service | RepairNear",
  description:
    "The terms of service governing use of RepairNear, owned and operated by Davis Dag Electronics.",
  robots: { index: true, follow: true },
};

const metaItems = [
  { label: "Effective date:", value: termsMeta.effectiveDate },
  { label: "Owned by:", value: termsMeta.entity },
  { label: "Registered in:", value: termsMeta.jurisdiction },
];

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="container-page py-12 md:py-20 border-b border-line">
          <p className="text-[13px] font-bold tracking-[0.15em] uppercase text-accent-deep mb-4">
            LEGAL
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            {termsMeta.title}
          </h1>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8 text-[14px] text-ink-soft">
            {metaItems.map((item) => (
              <p key={item.label}>
                {item.label}{" "}
                <span className="font-semibold text-ink">{item.value}</span>
              </p>
            ))}
          </div>
        </header>

        <section className="container-page pt-12 md:pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16">
            <div className="hidden lg:block sticky top-32 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
              <TocList />
            </div>

            <div>
              <MobileToc />
              <article className="max-w-2xl">
                {sections.map((section) => (
                  <SectionRenderer key={section.id} section={section} />
                ))}
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
