"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
}

export default function CategoryCard({
  title,
  description,
  href,
}: CategoryCardProps) {
  return (
   <Link
  href={href}
      className="group relative overflow-hidden rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.01] hover:border-[#C8A96A] hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
>
      {/* Background Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#C8A96A]/15 blur-[80px]" />

      </div>

    {/* Premium Placeholder */}

        <div className="relative h-56 sm:h-64 lg:h-80 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1D1D1D] via-[#171717] to-[#111111]">

  {/* Gold Glow */}

  <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-[#C8A96A]/15 blur-[100px]" />

  {/* Decorative Ring */}

  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8A96A]/20" />

  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

  {/* Center Content */}

  <div className="absolute inset-0 flex flex-col items-center justify-center">

   <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#C8A96A]/10 border border-[#C8A96A]/30 flex items-center justify-center backdrop-blur-sm">

      <span className="text-[#C8A96A] text-xl sm:text-2xl font-bold">
        {title.charAt(0)}
      </span>

    </div>

    <h4 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
      {title}
    </h4>

    <p className="mt-2 text-sm tracking-[0.25em] uppercase text-gray-500">
      Image Coming Soon
    </p>

  </div>

</div>

      {/* Content */}

      <div className="p-5 sm:p-6 lg:p-8">
   
     
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm sm:text-[15px] leading-6 sm:leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-[#C8A96A] font-medium transition-all duration-300 group-hover:gap-4">

          <span>Explore</span>

          <ArrowRight size={18} />

        </div>

      </div>

    </Link>
  );
}