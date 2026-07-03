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
    <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#151515] transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A96A]">

      {/* Image */}

      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#101010]">

        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={220} 
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />

        {product.bestseller && (
          <span className="absolute left-5 top-5 rounded-full bg-[#C8A96A] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black">
            Bestseller
          </span>
        )}

      </div>

      {/* Content */}

      <div className="p-6">

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

        <h3 className="mt-4 text-2xl font-bold">
          {product.name}
        </h3>

        <p className="mt-3 h-12 text-sm leading-6 text-gray-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-3xl font-bold text-[#C8A96A]">
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