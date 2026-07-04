"use client";

import Link from "next/link";
import Image from "next/image";

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

      <div className="absolute -right-62.5 -bottom-55 h-[650px] w-[650px] rounded-full bg-[#C8A96A]/5 blur-[220px]"/>

        <div className="absolute left-1/2 top-1/3 h-80 w-[320px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />

      </div>

      <div className="container-custom">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[82vh]">

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

    <h1 className="hero-heading mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight font-bold">

      Sip, Bite,

      <br />

      and Drip.

    </h1>

    {/* Description */}

    <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">

      Welcome to

      <span className="font-medium text-white">
        {" "}The Drip by Kulfi Club.
      </span>

      {" "}From freshly brewed coffee and refreshing boba drinks to
      delicious sandwiches, creamy shakes and handcrafted kulfi,
      we&apos;ve created a place where every visit is filled with
      unforgettable flavours and memorable moments.

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

    <div className="mt-10 flex flex-col sm:flex-row gap-4">

      <Link
        href="/menu"
        className="btn-primary flex items-center justify-center gap-2"
      >
        Explore Menu

        <ArrowRight size={18} />
      </Link>

      <Link
        href="/contact"
        className="btn-secondary flex justify-center"
      >
        Find Our Location
      </Link>

    </div>

    {/* Quick Info */}

    <div className="mt-10 flex flex-col sm:flex-row gap-4">

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
  <div className="relative flex justify-center items-center mt-12 lg:mt-0">

    {/* Main Glow */}
    <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full bg-[#C8A96A]/10 blur-[120px] animate-pulse" />

    {/* Top Floating Card */}
    <div className="absolute top-4 left-0 glass rounded-2xl px-5 py-4 hidden lg:flex items-center gap-3 shadow-2xl z-20">

      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

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

      <h3 className="text-xl font-bold mt-1">
        11 AM – 11 PM
      </h3>

    </div>

    {/* Hero Card */}

    <div className="group relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] rounded-[28px] lg:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1A1A1A] via-[#151515] to-[#101010] p-4 sm:p-6 shadow-2xl transition-all duration-700 hover:-translate-y-2">
          
     <div className="relative h-[360px] sm:h-[430px] lg:h-[500px] overflow-hidden rounded-[24px] lg:rounded-[28px]">

        {/* Glow */}

        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#C8A96A]/20 blur-[80px]" />

        <div className="absolute bottom-0 right-0 w-52 h-52 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

        {/* Logo */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <Image
  src="/logo.png"
  alt="The Drip"
  width={150}
  height={150}
  className="w-32 sm:w-40 lg:w-44 h-auto object-contain transition-transform duration-700 group-hover:scale-110"
/>
           
         <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            The Drip
          </h2>

                <p className="mt-3 text-center text-sm sm:text-base text-gray-400 max-w-xs leading-6 sm:leading-7">
            Premium coffee, boba, shakes,
            sandwiches & handcrafted kulfi.
          </p>

        </div>

        {/* Featured */}

        <div className="absolute left-5 right-5 bottom-5 glass rounded-3xl p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-400 text-sm">
                Featured Today
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                Coffee • Boba • Kulfi
              </h3>

            </div>

            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C8A96A]/20 text-xl">

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