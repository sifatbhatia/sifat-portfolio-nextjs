import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Services from "@/components/Services";
import LatestSignals from "@/components/LatestSignals";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <LatestSignals />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
