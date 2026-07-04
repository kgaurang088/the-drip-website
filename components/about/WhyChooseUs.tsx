"use client";

import Link from "next/link";
import {
  Coffee,
  Heart,
  Award,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Ingredients",
    text: "Only carefully selected ingredients make it into every cup, sandwich and dessert.",
  },
  {
    icon: Award,
    title: "Freshly Crafted",
    text: "Every order is prepared fresh to ensure the perfect balance of flavour and quality.",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    text: "We believe great service is just as important as great food.",
  },
  {
    icon: CheckCircle,
    title: "Unique Experience",
    text: "A modern café where coffee, kulfi and boba come together beautifully.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-16 lg:py-32">

      <div className="absolute inset-0 -z-10">

        <div className="absolute right-[-180px] top-0 h-[280px] w-[280px] lg:h-[420px] lg:w-[420px] rounded-full bg-[#C8A96A]/10 blur-[180px]" />

      </div>

      <div className="container-custom">

        {/* Heading */}

        <div className="text-center">

          <p className="section-tag">

            WHY THE DRIP

          </p>

          <h2 className="section-title mt-5">

            Crafted For People
            <br />
            Who Love Great Food.

          </h2>

          <p className="section-description mt-6 lg:mt-8 max-w-3xl mx-auto text-sm sm:text-base leading-7 sm:leading-8">

            Every detail at The Drip has been thoughtfully
            designed to deliver unforgettable moments.

          </p>

        </div>

        {/* Feature Cards */}

       <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
               className="group rounded-[24px] lg:rounded-[30px] border border-white/10 bg-[#151515] p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96A]"
              >

                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#C8A96A]/10">

                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#C8A96A]" />

                </div>

                <h3 className="mt-6 lg:mt-8 text-xl sm:text-2xl font-semibold">

                  {feature.title}

                </h3>

                <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">

                  {feature.text}

                </p>

              </div>

            );

          })}

        </div>

        {/* Statistics */}
            <div className="mt-16 lg:mt-28 rounded-[24px] lg:rounded-[36px] border border-[#C8A96A]/20 bg-[#151515] p-6 sm:p-8 lg:p-12">

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 text-center">

            <div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8A96A]">

                25+

              </h3>

              <p className="mt-3 text-gray-400">

                Signature Drinks

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-[#C8A96A]">

                50+

              </h3>

              <p className="mt-3 text-gray-400">

                Menu Items

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-[#C8A96A]">

                100%

              </h3>

              <p className="mt-3 text-gray-400">

                Freshly Prepared

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-[#C8A96A]">

                ♡

              </h3>

              <p className="mt-3 text-gray-400">

                Made With Passion

              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 lg:mt-28 text-center">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">

            Ready To Experience
            <br />
            <span className="text-[#C8A96A]">

              The Drip?

            </span>

          </h2>

          <p className="mx-auto mt-6 lg:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">

            Join us for handcrafted coffee,
            artisan kulfi, refreshing boba
            and unforgettable moments.

          </p>

          <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center gap-4">

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

              Visit Us

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}