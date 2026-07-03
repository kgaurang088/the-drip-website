"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { subtotal } = useCart();

  // Change these later if needed
  const deliveryFee = 0;
  const gst = Math.round(subtotal * 0.05);

  const total = subtotal + gst + deliveryFee;

if (subtotal === 0) {
    return (
      <div className="sticky top-28 rounded-[32px] border border-white/10 bg-[#151515] p-8">

        <h2 className="text-3xl font-bold">
          Order Summary
        </h2>

        <p className="mt-8 text-gray-400">
          Your cart is empty.
        </p>

      </div>
    );
  }



  return (
    <div className="sticky top-28 rounded-[32px] border border-white/10 bg-[#151515] p-8">

      <h2 className="text-3xl font-bold">
        Order Summary
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>GST (5%)</span>
          <span>₹{gst}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Delivery</span>
          <span>
            {deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}
          </span>
        </div>

        <hr className="border-white/10" />

        <div className="flex justify-between text-2xl font-bold">

          <span>Total</span>

          <span className="text-[#C8A96A]">
            ₹{total}
          </span>

        </div>

      </div>

      <Link
        href="/checkout"
        className="btn-primary mt-10 flex w-full items-center justify-center gap-2"
      >
        Proceed to Checkout

        <ArrowRight size={18} />
      </Link>

    </div>
  );
}