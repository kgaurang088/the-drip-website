"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function OrderSummary() {
  const router = useRouter();

  const { cart, clearCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const gst = Math.round(subtotal * 0.05);

  const grandTotal = subtotal + gst;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart();

    router.push("/order-success");
  };

  return (
    <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg sticky top-32">

      <h2 className="text-3xl font-bold mb-8">
        Order Summary
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-neutral-800 pb-4"
              >
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold text-amber-400">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>

            <div className="border-t border-neutral-700 pt-4 flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span className="text-amber-400">
                ₹{grandTotal}
              </span>

            </div>

              <div className="mt-8 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 p-5">

  <h3 className="text-lg font-semibold">
    ☕ Freshly Prepared
  </h3>

  <p className="mt-2 text-sm leading-6 text-gray-400">
    Every order is freshly prepared after confirmation to ensure the best quality and taste.
  </p>

  <div className="mt-4 flex items-center justify-between">
    <span className="text-gray-400">
      Estimated Time
    </span>

    <span className="font-semibold text-[#C8A96A]">
      15–20 mins
    </span>
  </div>

</div>

<div className="mt-6 space-y-3 text-sm text-gray-400">

  <div className="flex items-center gap-3">
    ✅ Fresh ingredients used daily
  </div>

  <div className="flex items-center gap-3">
    ☕ Made fresh after your order
  </div>

  <div className="flex items-center gap-3">
    ❤️ Crafted with care by The Drip Team
  </div>

</div>

          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-amber-400 text-black py-4 rounded-2xl font-bold text-lg hover:bg-amber-300 transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}