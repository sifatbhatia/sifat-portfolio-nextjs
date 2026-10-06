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
<<<<<<< HEAD
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
=======
      <Navbar />
      <main>
>>>>>>> 3babd2b66149a1aa12626224c79a39167987fda2
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
