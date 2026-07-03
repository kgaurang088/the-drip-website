"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import EmptyCart from "@/components/cart/EmptyCart";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";


export default function CartPage() {

  const { cart } = useCart();

  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">

        {cart.length === 0 ? (

          <EmptyCart />

        ) : (

         <div className="container-custom py-24">

  <h1 className="mb-12 text-5xl font-bold">
    Shopping Cart
  </h1>

  <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

    {/* LEFT */}

              <div className="space-y-6">

      {cart.map((item) => (

               <CartItem
          key={item.id}
          item={item}
        />

            ))}

    </div>

                          {/* RIGHT */}

        <OrderSummary />

  </div>

</div>

        )}

      </main>

      <Footer />

    </>
  );
}