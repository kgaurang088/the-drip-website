"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OrderHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] pt-28 lg:pt-36 pb-16 lg:pb-28">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-220px] top-[-120px]h-[350px] w-[350px] lg:h-[600px] lg:w-[600px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[350px] w-[350px] lg:h-[600px] lg:w-[600px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

      </div>

      <div className="container-custom text-center">

        <p className="section-tag">
          ORDER ONLINE
        </p>

        <h1 className="hero-heading mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">

          Freshly Brewed.
          <br />
          Freshly Delivered.

        </h1>

        <p className="mx-auto mt-6 lg:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">

          Enjoy your favourite coffee, kulfi, shakes,
          sandwiches and boba drinks delivered fresh
          through our trusted delivery partners.

        </p>
            <div className="mt-8 lg:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">

  <div className="rounded-full border border-white/10 bg-[#151515] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">
    🚀 Fast Delivery
  </div>

  <div className="rounded-full border border-white/10 bg-[#151515] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">
    ☕ Freshly Prepared
  </div>

  <div className="rounded-full border border-white/10 bg-[#151515] px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">
    ❤️ Made with Love
  </div>

</div>

        {/* Buttons */}

        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://www.swiggy.com/city/nanded/the-drip-by-kulfi-club-harsh-nagar-rest1074309"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-3"
          >
            🟠 Order on Swiggy
            <ArrowRight size={18} />
          </a>

          <a
            href="https://www.zomato.com/nanded/the-drip-by-kulfi-club-nanded-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-3"
          >
            🔴 Order on Zomato
            <ArrowRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}