"use client";

import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import {
  Coffee,
  MapPin,
  ArrowRight,
} from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] pt-32 lg:pt-40 pb-28">

      {/* ===========================
          BACKGROUND
      =========================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-55 -top-45 h-150 w-150 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute -right-62.5 -bottom-55 h-162.5w-162.5rounded-full bg-[#C8A96A]/5 blur-[220px]" />

        <div className="absolute left-1/2 top-1/3 h-80 w-[320px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />

      </div>

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[82vh]">

          {/* ===========================
              LEFT CONTENT
          =========================== */}
          <Reveal>
          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-5 py-2">

              <span className="text-[#C8A96A] text-sm tracking-[0.25em] uppercase">
                The Drip by Kulfi Club
              </span>

            </div>

            {/* Heading */}

            <h1 className="hero-heading mt-8 text-5xl md:text-6xl xl:text-7xl leading-[1.05] font-bold">

              Sip, Bite,

              <br />

              and Drip.

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Welcome to
              <span className="text-white font-medium">
                {" "}The Drip by Kulfi Club.
              </span>

              {" "}From freshly brewed coffee and refreshing
              boba drinks to delicious sandwiches,
              creamy shakes and kulfi,
              we've created a place where every visit
              is filled with great flavours,
              good conversations and memorable moments.

            </p>

            {/* Categories */}

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Coffee",
                "Boba Drinks",
                "Shakes",
                "Sandwiches",
                "Kulfi",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-full border border-neutral-700 bg-[#171717] px-5 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-[#C8A96A] hover:text-white"
                >
                  {item}
                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/menu"
                className="btn-primary flex items-center gap-2 shadow-lg shadow-[#C8A96A]/20"
              >

                Explore Menu

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/contact"
                className="btn-secondary"
              >

                Find Our Location

              </Link>

            </div>

            {/* Quick Info */}

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="glass rounded-full px-5 py-3 flex items-center gap-3">

                <Coffee
                  size={18}
                  className="text-[#C8A96A]"
                />

                <span className="text-sm text-gray-300">

                  Freshly Brewed Every Day

                </span>

              </div>

              <div className="glass rounded-full px-5 py-3 flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-[#C8A96A]"
                />

                <span className="text-sm text-gray-300">

                  Nanded, Maharashtra

                </span>

              </div>

            </div>

          </div>
          </Reveal>

         {/* ===========================
    RIGHT SIDE
=========================== */}
<Reveal delay={0.3}>
<div className="relative flex justify-center items-center">

  {/* Main Glow */}
<div className="absolute w-135 h-135 rounded-full bg-[#C8A96A]/10 blur-[140px] animate-pulse" />

  {/* Top Floating Card */}

  <div className="absolute top-4 left-0 glass rounded-2xl px-5 py-4 hidden lg:flex items-center gap-3 shadow-2xl z-20">

    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

    <div>

      <p className="text-white text-sm font-semibold">
        Freshly Made
      </p>

      <p className="text-gray-400 text-xs">
        Everyday
      </p>

    </div>

  </div>

  {/* Bottom Floating Card */}

  <div className="absolute bottom-5 right-0 glass rounded-2xl px-6 py-4 hidden lg:block shadow-2xl z-20">

    <p className="text-[#C8A96A] text-sm uppercase tracking-widest">
      Open
    </p>

    <h3 className="text-2xl font-bold mt-1">
      11 AM – 11 PM
    </h3>

  </div>

  {/* Product Card */}

  <div className="group relative card-premium p-8 rounded-[36px] w-full max-w-130 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02]">

    {/* Decorative Border */}

    <div className="absolute inset-0 rounded-[36px] border border-white/5 pointer-events-none"></div>

    {/* Image Area */}

    <div className="relative h-140 rounded-[30px] overflow-hidden bg-linear-to-br from-[#1B1B1B] via-[#151515] to-[#101010]">

  {/* Background Glow */}

  <div className="absolute inset-0">

    <div className="absolute top-12 left-12 w-44 h-44 rounded-full bg-[#C8A96A]/20 blur-[90px]" />

    <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#C8A96A]/10 blur-[120px]" />

  </div>

  {/* Decorative Circles */}

  <div className="absolute top-10 right-10 w-28 h-28 rounded-full border border-white/10"></div>

  <div className="absolute bottom-24 left-10 w-16 h-16 rounded-full border border-[#C8A96A]/20"></div>

  {/* Logo */}

  <div className="absolute inset-0 flex flex-col items-center justify-center">

    <img
      src="/logo.png"
      alt="The Drip"
      className="w-44 h-44 object-contain transition-all duration-700 group-hover:scale-110"
    />

    <h2 className="mt-10 text-4xl font-bold">
      The Drip
    </h2>

    <p className="mt-4 text-gray-400 text-center max-w-xs leading-7">

      Premium hero image
      coming soon.

    </p>

  </div>

  {/* Bottom Glass Card */}

  <div className="absolute left-6 right-6 bottom-6 glass rounded-3xl p-6">

    <div className="flex justify-between items-center">

      <div>

        <p className="text-gray-400 text-sm">

          Featured Today

        </p>

        <h3 className="text-2xl font-semibold mt-2">

          Coffee • Boba • Kulfi

        </h3>

      </div>

      <div className="w-14 h-14 rounded-full bg-[#C8A96A]/20 flex items-center justify-center">

        ☕

      </div>

    </div>

  </div>

</div>

    </div>
            
  </div>
</Reveal> 
</div>

</div>

    

     {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center">

        <div className="w-0.5 h-14 rounded-full bg-linear-to-b from-[#C8A96A] to-transparent"></div>

        <p className="mt-3 text-[11px] uppercase tracking-[0.4em] text-gray-500">
          Scroll
        </p>

      </div>

    </section>
  );
}