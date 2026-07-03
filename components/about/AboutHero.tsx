"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] pt-36 pb-28">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-220px] top-[-120px] h-[600px] w-[600px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[600px] w-[600px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

        <div className="absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />

      </div>

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="section-tag">

              ABOUT THE DRIP

            </p>

            <h1 className="hero-heading mt-8 text-5xl md:text-6xl xl:text-7xl leading-[1.05] font-bold">

              More Than
              <br />
              Just a Café.

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Crafting
              <span className="text-white font-medium">
                {" "}Nanded's Ultimate Flavor Fusion.
              </span>

              {" "}Where culinary nostalgia meets
              modern café culture and every sip,
              bite and drip is designed to create
              unforgettable experiences.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/menu"
                className="btn-primary flex items-center gap-2"
              >
                Explore Menu

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary"
              >
                Visit The Drip
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-end">

            <div className="group relative w-full max-w-[560px]">

              {/* Glow */}

              <div className="absolute -right-10 top-10 h-[340px] w-[340px] rounded-full bg-[#C8A96A]/15 blur-[120px]" />

              {/* Card */}

              <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#181818] via-[#151515] to-[#101010] p-8 transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96A]/50">

                <div className="relative h-[560px] rounded-[28px] overflow-hidden bg-[#101010]">

                  {/* Decorative Glow */}

                  <div className="absolute inset-0">

                    <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-[#C8A96A]/15 blur-[80px]" />

                    <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

                  </div>

                  {/* Placeholder */}

                  <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <img
                      src="/logo.png"
                      alt="The Drip"
                      className="w-40 h-40 object-contain transition-all duration-700 group-hover:scale-110"
                    />

                    <h2 className="mt-8 text-3xl font-bold">

                      The Drip

                    </h2>

                    <p className="mt-4 text-[#C8A96A] uppercase tracking-[0.35em] text-sm">

                      Craft • Culture • Community

                    </p>

                    <p className="mt-10 text-gray-500">

                      Premium Café Interior
                      <br />
                      Coming Soon

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}