"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function FeaturedMoment() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-16 lg:py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-180px] bottom-[-120px] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

        <div className="absolute right-[-180px] top-[-120px] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#C8A96A]/5 blur-[180px]" />

      </div>

      <div className="container-custom">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="section-tag">
              EVERY VISIT HAS A STORY
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

              More Than
              <br />

              <span className="text-[#C8A96A]">
                Just Great Food.
              </span>

            </h2>

            <p className="mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">

              Every cup of coffee, every refreshing boba,
              every handcrafted kulfi and every perfectly
              grilled sandwich is made to create moments
              you&apos;ll want to relive.

            </p>

            <p className="mt-6 text-gray-500 leading-8">

              Whether you&apos;re catching up with friends,
              working over coffee or simply treating yourself,
              The Drip is a place where every visit becomes
              a memory worth sharing.

            </p>

            <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4">

              <Link
                href="/menu"
                className="btn-primary flex items-center gap-2"
              >
                Explore Menu

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary flex items-center gap-2"
              >
                <MapPin size={18} />

                Visit The Drip
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="group relative">

            {/* Glow */}

            <div className="absolute -right-8 top-10 h-80 w-80 rounded-full bg-[#C8A96A]/15 blur-[120px]" />

            <div className="relative rounded-[24px] lg:rounded-[36px] border border-white/10 bg-[#151515] p-5 sm:p-6 lg:p-8 transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96A]/40">

              <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1B1B1B] via-[#151515] to-[#101010]">

                {/* Decorative Glow */}

                <div className="absolute top-10 left-10 h-36 w-36 rounded-full bg-[#C8A96A]/20 blur-[80px]" />

                <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

                {/* Placeholder */}

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <Image
                  src="/logo.png"
                       alt="The Drip"
                      width={160}
                    height={160}
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain transition-all duration-700 group-hover:scale-110"
                          />

                  <h3 className="mt-8 text-2xl sm:text-3xl font-bold">

                    Featured Moment

                  </h3>

                  <p className="mt-4 max-w-xs text-center text-sm sm:text-base leading-6 sm:leading-7 text-gray-500">

                    Replace this with your best café
                    interior or signature drink
                    photograph.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}