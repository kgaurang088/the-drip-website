"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function OurStory() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28 bg-[#0B0B0B]">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-200px] bottom-[-120px] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px]h-[320px] w-[320px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

      </div>

      <div className="container-custom">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-center">

          {/* ===========================
              LEFT IMAGE
          =========================== */}

          <div className="group relative">

            {/* Glow */}
            

            <div className="absolute -left-10 top-16 h-72 w-72 rounded-full bg-[#C8A96A]/15 blur-[120px]" />

            <div className="relative  rounded-[24px] lg:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#181818] via-[#151515] to-[#101010] p-5 sm:p-6 lg:p-8 transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96A]/40">

              <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] overflow-hidden rounded-[28px] bg-[#101010]">

                {/* Decorative Glow */}

                <div className="absolute top-12 left-12 h-40 w-40 rounded-full bg-[#C8A96A]/20 blur-[90px]" />

                <div className="absolute bottom-12 right-12 h-52 w-52 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

                {/* Placeholder */}

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                 <Image
  src="/logo.png"
  alt="The Drip"
  width={144}
  height={144}
  className="h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 object-contain transition-all duration-700 group-hover:scale-110"
/>

                  <h3 className="mt-8 text-3xl font-bold">

                    Our Story

                  </h3>

                  <p className="mt-4 max-w-xs text-gray-500 leading-7">

                    Replace this section with
                    a premium interior photograph
                    of The Drip.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ===========================
              RIGHT CONTENT
          =========================== */}

          <div>

            <p className="section-tag">

              OUR STORY

            </p>

            <h2 className="section-title mt-5">

              Crafting Nanded&apos;s
              <br />
              Ultimate Flavor Fusion.

            </h2>

            <p className="mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-gray-400">

              Welcome to
              <span className="text-white font-medium">
                {" "}The Drip by Kulfi Club
              </span>,
              where culinary nostalgia meets
              modern café culture.

            </p>

            <p className="mt-6 lg:mt-8 text-sm sm:text-base text-gray-400 leading-7 sm:leading-8">

              Born out of a passion for redefining
              everyday indulgence, we created a space
              where people can slow down, connect and
              experience something truly different.

            </p>

            <p className="mt-8 text-gray-400 leading-8">

              By blending the timeless richness of
              artisan kulfi with premium coffee,
              handcrafted sandwiches and refreshing
              boba drinks, we&apos;ve built a destination
              that celebrates flavour, creativity
              and togetherness.

            </p>

            <div className="mt-10 lg:mt-12 rounded-[24px] lg:rounded-[28px] border border-[#C8A96A]/20 bg-[#151515] p-5 sm:p-6 lg:p-8">

              <p className="text-[#C8A96A] uppercase tracking-[0.35em] text-sm">

                OUR PROMISE

              </p>

              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">

                Every sip, every bite and every dessert
                served at The Drip reflects our commitment
                to premium quality, authentic flavours and
                unforgettable experiences.

              </p>

            </div>

            <Link
              href="/menu"
              className="btn-primary mt-8 lg:mt-10 inline-flex items-center gap-3"
            >

              Explore Our Menu

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}