import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import WhyRepairNear from "@/components/sections/why-repairnear";
import BuiltForEveryone from "@/components/sections/built-for-everyone";
import Testimonials from "@/components/sections/testimonials";
import Protection from "@/components/sections/protection";
import About from "@/components/sections/about";
import Faq from "@/components/sections/faq";
import DownloadCta from "@/components/sections/download-cta";
import { site } from "@/lib/site";
import { faqs } from "@/lib/faq-content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Structured data for rich results: brand entity, sitelinks search target,
// the mobile app, and the FAQ accordion rendered further down the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.entity,
      url: site.url,
      logo: `${site.url}/photos/repairnear-logo.jpeg`,
      email: site.supportEmail,
      address: { "@type": "PostalAddress", addressCountry: "GH" },
      sameAs: [site.appStoreUrl, site.playStoreUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "MobileApplication",
      "@id": `${site.url}/#app`,
      name: site.name,
      operatingSystem: "iOS, Android",
      applicationCategory: "UtilitiesApplication",
      description:
        "Find trusted phone, tablet, laptop and computer repair technicians near you in Ghana. Compare verified repair shops, book a repair, and track your device from drop-off to pickup.",
      installUrl: site.playStoreUrl,
      offers: { "@type": "Offer", price: "0", priceCurrency: "GHS" },
      publisher: { "@id": `${site.url}/#organization` },
      countriesSupported: "GH",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <WhyRepairNear />
        <HowItWorks />
        <BuiltForEveryone />
        <Protection />
        <Testimonials />
        <About />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
