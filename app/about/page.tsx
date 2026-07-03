import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import FourPillars from "@/components/about/FourPillars";
import Philosophy from "@/components/about/Philosophy";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">
        <AboutHero />
        <OurStory />
        <FourPillars />
        <Philosophy />
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}