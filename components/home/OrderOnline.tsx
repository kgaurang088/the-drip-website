"use client";

import { ArrowUpRight } from "lucide-react";

export default function OrderOnline() {
  return (
    <section className="py-16 lg:py-24 bg-[#0B0B0B]">

      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto">

          <p className="section-tag">
            ORDER ONLINE
          </p>

          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Your Favourite Café,
            <br />
            Delivered to Your Door.
          </h2>

          <p className="section-description mt-6">
            Enjoy The Drip from the comfort of your home.
            Order your favourite coffee, kulfi, shakes,
            sandwiches and boba drinks through our trusted
            delivery partners.
          </p>

        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* Swiggy */}

          <a
            href="https://www.swiggy.com/city/nanded/the-drip-by-kulfi-club-harsh-nagar-rest1074309"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96A]"
          >

            <h3 className="text-2xl sm:text-3xl font-bold">
              🟠 Swiggy
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-6 sm:leading-8">
              Fast delivery with live order tracking.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[#C8A96A] font-semibold">

              Order Now

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

          </a>

          {/* Zomato */}

          <a
            href="https://www.zomato.com/nanded/the-drip-by-kulfi-club-nanded-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96A]"
          >

            <h3 className="text-2xl sm:text-3xl font-bold">
              🔴 Zomato
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-6 sm:leading-8">
              Discover our menu and order instantly.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[#C8A96A] font-semibold">

              Order Now

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

          </a>

        </div>

      </div>

    </section>
  );
}