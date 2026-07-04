"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-[#0B0B0B]">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-250px] top-0 h-[500px] w-[500px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

      </div>

      <div className="container-custom">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] items-center gap-12 lg:gap-24">

          {/* ===========================
              LEFT CONTENT
          =========================== */}

          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            <p className="section-tag">

              ABOUT THE DRIP

            </p>

            <h2 className="section-title mt-5 text-3xl sm:text-4xl lg:text-5xl">

              Crafted Around Every Moment.

            </h2>

            <p className="section-description mt-6 lg:mt-8 text-base sm:text-lg">

              From the aroma of freshly brewed coffee to the
              refreshing taste of boba drinks, every menu item
              at <span className="text-white">The Drip by Kulfi Club</span>
              {" "}is thoughtfully prepared and served in a space
              designed for comfort, connection and memorable
              experiences.

            </p>

            <p className="mt-6 lg:mt-8 text-base sm:text-[17px] leading-7 sm:leading-8 text-gray-400">

              Whether you&apos;re enjoying a quiet morning coffee,
              catching up with friends over refreshing drinks,
              or spending quality time with family, The Drip
              brings together great flavours and a welcoming
              atmosphere for every occasion.

            </p>

            

          </div>

          {/* ===========================
                 RIGHT SIDE
            =========================== */}

                      <div className="flex justify-center lg:justify-end">

              <div className="group relative w-full max-w-[340px] sm:max-w-[450px] lg:max-w-[560px] about-float">
    {/* Background Glow */}

    <div className="absolute -right-10 top-10 h-[320px] w-[320px] rounded-full bg-[#C8A96A]/15 blur-[120px]" />

    {/* Premium Card */}

    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#181818] via-[#151515] to-[#111111] p-5 sm:p-6 lg:p-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:border-[#C8A96A]/60 group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.45)]">

      {/* Decorative Border */}

      <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/5"></div>

      {/* Placeholder */}

      <div className="relative flex h-[360px] sm:h-[460px] lg:h-[560px] items-center justify-center overflow-hidden rounded-[28px] bg-[#101010]">

        {/* Gold Glow */}

        <div className="absolute h-72 w-72 rounded-full bg-[#C8A96A]/15 blur-[100px]" />

        {/* Decorative Rings */}

        <div className="absolute h-52 w-52 rounded-full border border-[#C8A96A]/20"></div>

        <div className="absolute h-36 w-36 rounded-full border border-white/10"></div>
        {/* Decorative Dots */}

        <div className="absolute top-10 left-10 h-4 w-4 rounded-full bg-[#C8A96A]/40"></div>

        <div className="absolute bottom-10 right-10 h-6 w-6 rounded-full border border-[#C8A96A]/30"></div>
        {/* Content */}

        <div className="relative z-10 flex flex-col items-center text-center">

          <Image
  src="/logo.png"
  alt="The Drip"
  width={160}
  height={160}
  className="h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
/>
          <h3 className="mt-8 text-2xl sm:text-3xl font-bold text-white">
            THE DRIP
          </h3>

          <p className="mt-3 uppercase tracking-[0.35em] text-[#C8A96A] text-sm">
            Premium Café Experience
          </p>

          <p className="mt-10 text-gray-500">
            Image Coming Soon
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

        </div>

      </div>
{/* Floating Experience Card */}

<div className="hidden lg:block absolute bottom-8 right-100 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl px-6 py-5 shadow-2xl">

  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
    Experience
  </p>

  <h4 className="mt-2 text-2xl font-bold text-white">
    Coffee • Kulfi
  </h4>

  <p className="mt-2 text-sm text-gray-400">
    Shakes • Sandwiches • Boba
  </p>

</div>

{/* Top Premium Badge */}

<div className="hidden lg:block absolute right-100 top-8 rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-5 py-2 backdrop-blur-md">

  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
    Since 2025
  </p>

</div>
    </section>
  );
}