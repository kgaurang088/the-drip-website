"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";

export default function Navbar() {
  const { cart, openCart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="container-custom">

          <div className="h-24 flex items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="The Drip"
                className="w-14 h-14 object-contain"
              />

              <div>

                <h1 className="text-xl font-bold">
                  The Drip
                </h1>

                <p className="text-sm text-gray-400">
                  by Kulfi Club
                </p>

              </div>

            </Link>

            {/* Navigation */}

            <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium">

              <Link href="/" className="hover:text-[#C8A96A] transition">
                Home
              </Link>

              <Link href="/menu" className="hover:text-[#C8A96A] transition">
                Menu
              </Link>

              <Link href="/about" className="hover:text-[#C8A96A] transition">
                About
              </Link>

              <Link href="/gallery" className="hover:text-[#C8A96A] transition">
                Gallery
              </Link>

              <Link href="/order-online" className="hover:text-[#C8A96A] transition">
               Order-Online 
              </Link>
              {/*<Link href="/offers" className="hover:text-[#C8A96A] transition">
                Offers
              </Link>*/}

              <Link href="/contact" className="hover:text-[#C8A96A] transition">
                Contact
              </Link>

            </div>

            {/* Right Side */}

            <div className="flex items-center gap-4">

              {/* Cart */}

              <button
                onClick={openCart}
                className="relative w-12 h-12 rounded-full border border-neutral-700 bg-[#1A1A1A] flex items-center justify-center hover:border-[#C8A96A] transition"
              >

                <ShoppingBag size={20} />

                {cartCount > 0 && (

                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C8A96A] text-black text-xs font-bold flex items-center justify-center">

                    {cartCount}

                  </span>

                )}

              </button>

              {/* Order */}

              <Link
                href="/menu"
                className="btn-primary hidden md:flex"
              >
                Explore Menu
              </Link>

            </div>

          </div>

        </div>

      </nav>

      <CartDrawer />
    </>
  );
}