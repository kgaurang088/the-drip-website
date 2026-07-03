"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types/product";
import { useCart } from "@/context/CartContext";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#151515] p-6">

      <div className="flex flex-col gap-6 md:flex-row md:items-center">

        {/* Product Image */}

        <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-[#101010]">

          <img
            src={item.image}
            alt={item.name}
            className="h-20 w-20 object-contain"
          />

        </div>

        {/* Product Details */}

        <div className="flex-1">

          <p className="text-sm uppercase tracking-[0.25em] text-[#C8A96A]">

            {item.category}

          </p>

          <h2 className="mt-2 text-2xl font-bold">

            {item.name}

          </h2>

          <p className="mt-3 text-xl font-semibold text-[#C8A96A]">

            ₹{item.price}

          </p>

        </div>

        {/* Quantity */}

        <div className="flex items-center gap-3">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101010] hover:bg-[#202020]"
          >
            <Minus size={18} />
          </button>

          <span className="w-8 text-center text-lg font-bold">

            {item.quantity}

          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101010] hover:bg-[#202020]"
          >
            <Plus size={18} />
          </button>

        </div>

        {/* Total */}

        <div className="text-right">

          <p className="text-2xl font-bold">

            ₹{item.price * item.quantity}

          </p>

          <button
            onClick={() => removeItem(item.id)}
            className="mt-4 flex items-center gap-2 text-red-400 hover:text-red-300"
          >
            <Trash2 size={16} />

            Remove

          </button>

        </div>

      </div>

    </div>
  );
}