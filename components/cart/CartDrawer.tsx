"use client";

import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-neutral-950 border-l border-neutral-800 z-50 transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-neutral-800">
          <h2 className="text-3xl font-bold text-white">
            Your Cart
          </h2>

          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-white text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-lg">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="border-b border-neutral-800 pb-6 mb-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-amber-400 font-bold mt-2">
                  ₹{item.price}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-4">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white"
                  >
                    −
                  </button>

                  <span className="text-white font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 rounded-full bg-amber-400 text-black hover:bg-amber-300"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto text-red-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>

                <p className="text-gray-400 mt-4">
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-neutral-800 p-6">

            <div className="flex justify-between text-xl font-bold text-white mb-6">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full bg-amber-400 text-black py-4 rounded-xl font-bold hover:bg-amber-300 transition">
              Proceed to Checkout →
            </button>

          </div>
        )}
      </div>
    </>
  );
}