"use client";

import { ShoppingCart, ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
}

export default function ProductCard({
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#151515] transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96A] hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

      {/* Premium Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -top-12 right-0 h-48 w-48 rounded-full bg-[#C8A96A]/15 blur-[90px]" />
      </div>

      {/* Image Placeholder */}

      <div className="relative h-64 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1E1E1E] via-[#171717] to-[#111111]">

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <div className="h-20 w-20 rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 flex items-center justify-center">

            <span className="text-2xl font-bold text-[#C8A96A]">
              {name.charAt(0)}
            </span>

          </div>

          <p className="mt-5 uppercase tracking-[0.3em] text-xs text-gray-500">
            Image Coming Soon
          </p>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-2xl font-semibold text-white">
              {name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              {description}
            </p>

          </div>

          <span className="text-[#C8A96A] font-semibold">
            {price}
          </span>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-3">

          <button className="flex-1 rounded-full bg-[#C8A96A] px-5 py-3 text-black font-semibold transition hover:brightness-110 flex items-center justify-center gap-2">

            <ShoppingCart size={18} />

            Add

          </button>

          <button className="rounded-full border border-white/10 px-4 transition hover:border-[#C8A96A]">

            <ArrowRight
              size={18}
              className="text-white"
            />

          </button>

        </div>

      </div>

    </div>
  );
}