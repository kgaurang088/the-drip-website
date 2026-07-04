"use client";
import { useState , useEffect  } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


import {
  ShoppingBag,
  Menu,
  X,
 MapPin,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";

export default function Navbar() {
  const { cart, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
        const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Order Online", href: "/order-online" },
  { name: "Contact", href: "/contact" },
];
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
              <motion.img
                     initial={{ scale: 0.8, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                 transition={{
               delay: 0.5,
                 duration: 0.4,
                      }}
                   src="/logo.png"
               alt="The Drip"
          className="w-16 h-16 object-contain"
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
                  {/* Mobile Menu Button */}

               <button
                 onClick={() => setMenuOpen(true)}
                 className="lg:hidden w-12 h-12 rounded-full border border-neutral-700 bg-[#1A1A1A] flex items-center justify-center hover:border-[#C8A96A] transition"
                        >
                 <Menu size={22} />
               </button>
            </div>

          </div>

        </div>

      </nav>
{menuOpen && (
  <div className="fixed inset-0 z-[100] lg:hidden">

    {/* Dark Background */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 1 }}
  transition={{ duration: 0.25 }}
  className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
  onClick={() => setMenuOpen(false)}
/>

    {/* Menu Panel */}
     <motion.div
  initial={{ x: -300 }}
  animate={{ x: 0 }}
  exit={{ x: -300 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="absolute left-0 top-0 w-[60%] max-w-[280px] rounded-br-3xl bg-[#111111]/95 border-r border-b border-white/10 p-8 shadow-2xl"
>

      {/* Close Button */}
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Menu
        </h2>

        <button onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>

      </div>

      {/* Navigation */}
<div className="mt-10 flex flex-col gap-6 text-lg">

  {navItems.map((item, index) => (

    <motion.div
      key={item.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.12 * index,
        duration: 0.35,
      }}
    >
      <Link
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="block hover:text-[#C8A96A] transition"
      >
        {item.name}
      </Link>
    </motion.div>

  ))}

</div>

      {/* Button */}
                <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    delay: 0.45,
    duration: 0.4,
  }}
>
  <Link
    href="/menu"
    onClick={() => setMenuOpen(false)}
    className="btn-primary mt-12 w-full justify-center"
  >
    Explore Menu
  </Link>
</motion.div>
        <div className="mt-10 border-t border-white/10 pt-8">
        
        {/* Location */}

<div className="flex items-center gap-2 text-gray-400 text-sm">

  <MapPin size={16} className="text-[#C8A96A]" />

  <span>Nanded, Maharashtra</span>

</div>

{/* Brand */}

<div className="mt-6">

  <img
    src="/logo.png"
    alt="The Drip"
    className="w-16 h-16 object-contain"
  />

  <h3 className="mt-3 text-xl font-bold">
    The Drip
  </h3>

  <p className="text-sm text-gray-400">
    by Kulfi Club
  </p>

</div>
      
{/* Tagline */}

<p className="mt-6 text-sm leading-6 text-gray-500">
  Crafted with Passion.
  <br />
  Served with Love.
</p>

{/* Copyright */}

<p className="mt-8 text-xs tracking-[0.25em] uppercase text-[#C8A96A]">
  © 2026 The Drip
</p>


        
        </div>
        </motion.div> 
    </div>

  
)}
      <CartDrawer />
    </>
  );
}