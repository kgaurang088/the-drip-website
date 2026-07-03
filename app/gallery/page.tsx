import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import FeaturedMoment from "@/components/gallery/FeaturedMoment";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">

        <GalleryHero />
        <GalleryFilters />
        <GalleryGrid />
         <FeaturedMoment />


      </main>

      <Footer />
    </>
  );
}