"use client";

import { ArrowUpRight } from "lucide-react";

export default function DeliveryPartners() {
  return (
    <section className="bg-[#0B0B0B] py-16 lg:py-24">

      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="section-tag">
            DELIVERY PARTNERS
          </p>

          <h2 className="section-title mt-5">
            Choose Your
            <br />
            Favourite Platform
          </h2>

          <p className="section-description mt-6">
            Order from your preferred delivery partner and enjoy
            The Drip&apos;s signature flavours delivered fresh to your doorstep.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Swiggy */}

          <a
            href="https://www.swiggy.com/city/nanded/the-drip-by-kulfi-club-harsh-nagar-rest1074309"
            target="_blank"
            rel="noopener noreferrer"
           className="group rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FC8019]"
          >

            <div className="text-4xl sm:text-5xl">
              🟠
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-bold">
              Swiggy
            </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
  Enjoy The Drip&apos;s signature coffee, kulfi, sandwiches,
  shakes and boba with a seamless ordering experience.
</p>

<div className="mt-5 flex flex-wrap gap-2 sm:gap-3">

  <span className="rounded-full bg-[#FC8019]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FC8019]">
    Fast
  </span>

  <span className="rounded-full bg-[#FC8019]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FC8019]">
    Convenient
  </span>

  <span className="rounded-full bg-[#FC8019]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FC8019]">
    Reliable
  </span>

</div>
            <div className="mt-8 lg:mt-10 flex items-center gap-2 font-semibold text-[#FC8019]">

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
            className="group rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FC8019]"
          >

            <div className="text-4xl sm:text-5xl">
              🔴
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-bold">
              Zomato
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
  Experience The Drip through Zomato and enjoy
  premium café favourites delivered fresh.
</p>

<div className="mt-5 flex flex-wrap gap-2 sm:gap-3">

  <span className="rounded-full bg-[#FC8019]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FC8019]">
    Fresh
  </span>

  <span className="rounded-full bg-[#FC8019]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FC8019]">
    Trusted
  </span>

  <span className="rounded-full bg-[#FC8019]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#FC8019]">
    Quick
  </span>

</div>

            <div className="mt-8 lg:mt-10 flex items-center gap-2 font-semibold text-[#FC8019]">

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