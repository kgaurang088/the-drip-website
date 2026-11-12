"use client";

import { useState, useCallback } from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import SuccessModal from "./SuccessModal";

const VALID_CODES: Record<string, number> = {
  DRIP10: 10,
  KULFI20: 20,
  WELCOME15: 15,
};

export default function OrderSummary() {
  const router = useRouter();
  const { cart, clearCart, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const [discountCode, setDiscountCode] = useState("");
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [discountPct, setDiscountPct] = useState(0);
  const [codeError, setCodeError] = useState("");
  const [codeSuccess, setCodeSuccess] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmt = Math.round(subtotal * discountPct / 100);
  const afterDiscount = subtotal - discountAmt;
  const gst = Math.round(afterDiscount * 0.05);
  const grandTotal = afterDiscount + gst;

  const applyCode = () => {
    const code = discountCode.trim().toUpperCase();
    if (VALID_CODES[code]) {
      setAppliedCode(code);
      setDiscountPct(VALID_CODES[code]);
      setCodeSuccess(`🎉 "${code}" applied — ${VALID_CODES[code]}% off!`);
      setCodeError("");
    } else {
      setCodeError("Invalid discount code. Try DRIP10, KULFI20 or WELCOME15.");
      setCodeSuccess("");
    }
  };

  const removeCode = () => {
    setAppliedCode(null);
    setDiscountPct(0);
    setDiscountCode("");
    setCodeSuccess("");
    setCodeError("");
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    clearCart();
    setOrderPlaced(true);
  };

  const handleRedirectToMenu = useCallback(() => {
    setOrderPlaced(false);
    router.push("/menu");
  }, [router]);

  return (
    <>
      <SuccessModal isOpen={orderPlaced} onComplete={handleRedirectToMenu} />

      <div className="bg-neutral-900 rounded-3xl p-6 shadow-lg sticky top-32 space-y-6">

      <h2 className="text-2xl font-bold">Order Summary</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items with images + qty controls */}
          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 items-center border-b border-neutral-800 pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm leading-tight truncate">{item.name}</p>
                  <p className="text-amber-400 text-sm font-bold mt-0.5">₹{item.price * item.quantity}</p>
                  {/* Qty controls */}
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-6 h-6 rounded-full bg-neutral-700 hover:bg-amber-400 hover:text-black text-white text-sm flex items-center justify-center transition"
                    >−</button>
                    <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-6 h-6 rounded-full bg-neutral-700 hover:bg-amber-400 hover:text-black text-white text-sm flex items-center justify-center transition"
                    >+</button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-xs text-red-400 hover:text-red-300 transition"
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Discount Code */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">Discount Code</label>
            {appliedCode ? (
              <div className="flex items-center justify-between bg-amber-400/10 border border-amber-400/30 rounded-xl px-4 py-3">
                <span className="text-amber-400 text-sm font-semibold">{codeSuccess}</span>
                <button onClick={removeCode} className="text-xs text-red-400 hover:text-red-300 ml-2">Remove</button>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => { setDiscountCode(e.target.value); setCodeError(""); }}
                    placeholder="Enter code (e.g. DRIP10)"
                    className="flex-1 bg-neutral-800 rounded-xl px-4 py-3 text-sm outline-none border border-neutral-700 focus:border-amber-400 transition"
                    onKeyDown={(e) => e.key === "Enter" && applyCode()}
                  />
                  <button
                    onClick={applyCode}
                    className="bg-amber-400 text-black font-bold px-4 py-3 rounded-xl text-sm hover:bg-amber-300 transition"
                  >Apply</button>
                </div>
                {codeError && <p className="text-red-400 text-xs">{codeError}</p>}
              </>
            )}
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            {discountAmt > 0 && (
              <div className="flex justify-between text-green-400">
                <span>Discount ({discountPct}%)</span>
                <span>−₹{discountAmt}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-300">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>
            <div className="border-t border-neutral-700 pt-3 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-amber-400">₹{grandTotal}</span>
            </div>
          </div>

          {/* Freshly Prepared Note */}
          <div className="rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/5 p-4">
            <h3 className="text-sm font-semibold">☕ Freshly Prepared</h3>
            <p className="mt-1 text-xs leading-5 text-gray-400">
              Every order is freshly prepared after confirmation.
            </p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-gray-400">Estimated Time</span>
              <span className="font-semibold text-[#C8A96A]">15–20 mins</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="space-y-2 text-xs text-gray-400">
            <div>✅ Fresh ingredients used daily</div>
            <div>☕ Made fresh after your order</div>
            <div>❤️ Crafted with care by The Drip Team</div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-amber-400 text-black py-4 rounded-2xl font-bold text-lg hover:bg-amber-300 active:scale-95 transition"
          >
            Place Order →
          </button>
        </>
      )}
    </div>
    </>
  );
}