import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import WhyRepairNear from "@/components/sections/why-repairnear";
import BuiltForEveryone from "@/components/sections/built-for-everyone";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyRepairNear />
        <HowItWorks />
        <BuiltForEveryone />
      </main>
      <Footer />
    </>
  );
}
