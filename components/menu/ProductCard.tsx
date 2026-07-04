"use client";

import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
   <div className="group overflow-hidden rounded-[24px] lg:rounded-[32px] border border-white/10 bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96A]">
      {/* Image */}

     <div className="relative flex h-56 sm:h-64 lg:h-72 items-center justify-center overflow-hidden bg-[#101010]">
        <Image
  src={product.image}
  alt={product.name}
  width={220}
  height={220}
  className="w-36 sm:w-44 lg:w-56 h-auto object-contain transition-transform duration-700 group-hover:scale-110"
/>
       
        {product.bestseller && (
          <span className="absolute left-3 top-3 sm:left-5 sm:top-5 rounded-full bg-[#C8A96A] px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-black">
            Bestseller
          </span>
        )}

      </div>

      {/* Content */}

      <div className="p-4 sm:p-5 lg:p-6">

        <div className="flex items-center justify-between">

          <span className="text-sm uppercase tracking-[0.25em] text-[#C8A96A]">
            {product.category}
          </span>

          <div className="flex items-center gap-1">

            <Star
              size={16}
              fill="#C8A96A"
              className="text-[#C8A96A]"
            />

            <span className="text-sm">
              {product.rating}
            </span>

          </div>

        </div>

        <h3 className="mt-3 text-xl sm:text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-2xl sm:text-3xl font-bold text-[#C8A96A]">
            ₹{product.price}
          </span>

         {/*} <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <ShoppingCart size={18} />

            Add

          </button> */}

        </div>

      </div>

    </div>
  );
}