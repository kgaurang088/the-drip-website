import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Bestseller from "../components/home/Bestseller";
/*import WhyChooseUs from "../components/home/WhyChooseUs";*/
import About from "../components/home/About";
import Footer from "../components/common/Footer";
import GalleryPreview from "../components/home/GalleryPreview";
import CTA from "../components/home/CTA";
import OrderOnline from "@/components/home/OrderOnline";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* Hero Section */}
        <Hero />

        {/* Menu Categories */}
        <Categories />

        {/* Signature Collection / Best Sellers */}
        <Bestseller />
        <OrderOnline />
        {/* Brand Experience */}
        

        {/* About The Drip */}
        <About />

        <GalleryPreview/> 

        <CTA />

      </main>

      <Footer />
    </>
  );
}