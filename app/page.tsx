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

export default function Home() {
  return (
    <>
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
