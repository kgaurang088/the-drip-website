"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function EmptyCart() {
  return (
    <section className="min-h-[80vh] bg-[#0B0B0B] flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        {/* Icon */}

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#C8A96A]/20 bg-[#151515]">

          <ShoppingBag className="h-12 w-12 text-[#C8A96A]" />

        </div>

        {/* Heading */}

        <h1 className="mt-10 text-5xl font-bold text-white">

          Your Cart is Empty

        </h1>

        {/* Description */}

        <p className="mt-6 text-lg leading-8 text-gray-400">

          Looks like you haven&apos;t added anything yet.
          Explore our handcrafted coffee, artisan kulfi,
          refreshing boba and delicious sandwiches.

        </p>

        {/* Button */}

        <Link
          href="/menu"
          className="btn-primary mt-10 inline-flex items-center gap-3"
        >
          Explore Menu

          <ArrowRight size={18} />

        </Link>

      </div>

    </section>
  );
}