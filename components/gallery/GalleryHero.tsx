"use client";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] pt-36 pb-28">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-220px] top-[-120px] h-[600px] w-[600px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[600px] w-[600px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

      </div>

      <div className="container-custom text-center">

        <p className="section-tag">

          GALLERY

        </p>

        <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">

          Every Picture
          <br />
          Tells Our Story.

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

          Discover the atmosphere, handcrafted beverages,
          artisan desserts and unforgettable moments that
          make The Drip by Kulfi Club a destination worth visiting.

        </p>

      </div>

    </section>
  );
}