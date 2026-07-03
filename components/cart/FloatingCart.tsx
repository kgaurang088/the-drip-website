"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { cartCount, subtotal } = useCart();

  // Don't show if cart is empty
  if (cartCount === 0) return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="group flex items-center gap-4 rounded-2xl border border-[#C8A96A]/30 bg-[#151515]/95 px-5 py-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96A]">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96A]">

          <ShoppingBag className="h-6 w-6 text-black" />

        </div>

        <div>

          <p className="text-sm text-gray-400">

            {cartCount} {cartCount === 1 ? "Item" : "Items"}

          </p>

          <h3 className="text-lg font-bold text-white">

            ₹{subtotal}

          </h3>

        </div>

      </div>
    </Link>
  );
}