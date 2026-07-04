"use client";

import {
  Coffee,
  IceCreamBowl,
  GlassWater,
  Sandwich,
} from "lucide-react";

const pillars = [
  {
    icon: Coffee,
    title: "The Brew",
    subtitle: "Premium Coffee",
    description:
      "Expertly roasted coffee beans brewed to perfection. From bold espressos to velvety lattes, every cup is crafted with precision and passion.",
  },
  {
    icon: IceCreamBowl,
    title: "The Luxury Kulfi",
    subtitle: "Artisan Desserts",
    description:
      "Our signature artisan kulfis combine timeless Indian flavours with a modern presentation using rich, natural ingredients.",
  },
  {
    icon: GlassWater,
    title: "The Pop",
    subtitle: "Refreshing Boba",
    description:
      "Premium teas, vibrant flavours and perfectly chewy pearls come together to create refreshing drinks you'll want again and again.",
  },
  {
    icon: Sandwich,
    title: "The Crunch",
    subtitle: "Fusion Sandwiches",
    description:
      "Golden grilled sandwiches layered with gourmet fillings and premium cheese, prepared fresh for every order.",
  },
];

export default function FourPillars() {
  return (
    <section className="relative py-16 lg:py-28 bg-[#0B0B0B] overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[260px] w-[260px] lg:h-[420px] lg:w-[420px] -translate-x-1/2 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

      </div>

      <div className="container-custom">

        <div className="text-center">

          <p className="section-tag">

            THE FOUR PILLARS

          </p>

          <h2 className="section-title mt-5">

            Built Around
            <br />
            Four Signature Experiences.

          </h2>

          <p className="section-description mt-6 lg:mt-8 max-w-3xl mx-auto text-sm sm:text-base leading-7 sm:leading-8">

            We believe every memorable café experience begins
            with exceptional craftsmanship. These four pillars
            define everything we create at The Drip.

          </p>

        </div>

        <div className="mt-12 lg:mt-20 grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
               className="group rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96A]">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#C8A96A]/10">

                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#C8A96A]" />

                </div>

                <p className="mt-6 lg:mt-8 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C8A96A]">

                  {pillar.subtitle}

                </p>

                <h3 className="mt-3 text-xl sm:text-2xl font-bold">
                  {pillar.title}

                </h3>

                <p className="mt-4 lg:mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">

                  {pillar.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}