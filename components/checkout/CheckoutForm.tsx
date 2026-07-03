"use client";

import { useState } from "react";

export default function CheckoutForm() {

  const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("");
const [instructions, setInstructions] = useState(""); 

const isNameValid = name.trim().length > 0;

const isMobileValid = /^[6-9]\d{9}$/.test(mobile);

const isEmailValid =
  email === "" ||
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isFormValid =
  isNameValid &&
  isMobileValid &&
  isEmailValid; 

  return (
    <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">

      <h2 className="text-3xl font-bold mb-8">
        Customer Details
      </h2>

      <div className="space-y-6">

        <div>
          <label className="block mb-2 text-gray-300">
            Full Name
          </label>

          <input
           type="text"
             value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Enter your full name"
                   className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-amber-400"
          />
      
        </div>

        <div>
          <label className="block mb-2 text-gray-300">

            Mobile Number
          </label>

          <input
         type="tel"
          value={mobile}
            onChange={(e) => setMobile(e.target.value)}
             placeholder="+91 XXXXX XXXXX"
              className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-amber-400"
              />
          
        </div>
            <div>
             <label className="block mb-2 text-gray-300">
                Email (Optional)
               </label>

              <input
              type="email"
                    value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 placeholder="example@gmail.com"
                  className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-amber-400"
            />
              </div>
        
                    <div>

  <h3 className="mb-4 text-xl font-semibold">
    Order Type
  </h3>

  <div className="grid gap-4">

    {/* Dine In */}

    <label className="group cursor-pointer">

      <input
        type="radio"
        name="orderType"
        defaultChecked
        className="hidden peer"
      />

      <div className="rounded-2xl border border-white/10 bg-[#151515] p-5 transition-all duration-300 peer-checked:border-[#C8A96A] peer-checked:bg-[#C8A96A]/10 hover:border-[#C8A96A]">

        <div className="flex items-center justify-between">

          <div>

            <h4 className="text-lg font-semibold">
              🍽️ Dine In
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Enjoy your food and beverages inside our café.
            </p>

          </div>

          <div className="h-5 w-5 rounded-full border-2 border-[#C8A96A] peer-checked:bg-[#C8A96A]" />

        </div>

      </div>

    </label>

    {/* Take Away */}

    <label className="group cursor-pointer">

      <input
        type="radio"
        name="orderType"
        className="hidden peer"
      />

      <div className="rounded-2xl border border-white/10 bg-[#151515] p-5 transition-all duration-300 peer-checked:border-[#C8A96A] peer-checked:bg-[#C8A96A]/10 hover:border-[#C8A96A]">

        <div className="flex items-center justify-between">

          <div>

            <h4 className="text-lg font-semibold">
              🥡 Take Away
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Pick up your order from The Drip.
            </p>

          </div>

          <div className="h-5 w-5 rounded-full border-2 border-[#C8A96A]" />

        </div>

      </div>

    </label>

    {/* Home Delivery */}

    <div className="rounded-2xl border border-dashed border-white/10 bg-[#111111] p-5 opacity-60">

      <div className="flex items-center justify-between">

        <div>

          <h4 className="text-lg font-semibold">
            🚚 Home Delivery
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Coming Soon
          </p>

        </div>

        <span className="rounded-full bg-[#C8A96A]/20 px-4 py-2 text-xs font-semibold text-[#C8A96A]">
          Soon
        </span>

      </div>

    </div>

  </div>

</div>
      
                <div>

  <h3 className="mb-4 text-xl font-semibold">
    Payment Method
  </h3>

  <div className="grid gap-4">

    {/* Pay at Counter */}

    <label className="group cursor-pointer">

      <input
        type="radio"
        name="paymentMethod"
        defaultChecked
        className="hidden peer"
      />

      <div className="rounded-2xl border border-white/10 bg-[#151515] p-5 transition-all duration-300 peer-checked:border-[#C8A96A] peer-checked:bg-[#C8A96A]/10 hover:border-[#C8A96A]">

        <div className="flex items-center justify-between">

          <div>

            <h4 className="text-lg font-semibold">
              💵 Pay at Counter
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Pay when you collect your order.
            </p>

          </div>

          <div className="h-5 w-5 rounded-full border-2 border-[#C8A96A]" />

        </div>

      </div>

    </label>

    {/* UPI */}

    <div className="rounded-2xl border border-dashed border-white/10 bg-[#111111] p-5 opacity-60">

      <div className="flex items-center justify-between">

        <div>

          <h4 className="text-lg font-semibold">
            📱 UPI
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Coming Soon
          </p>

        </div>

        <span className="rounded-full bg-[#C8A96A]/20 px-4 py-2 text-xs font-semibold text-[#C8A96A]">
          Soon
        </span>

      </div>

    </div>

    {/* Razorpay */}

    <div className="rounded-2xl border border-dashed border-white/10 bg-[#111111] p-5 opacity-60">

      <div className="flex items-center justify-between">

        <div>

          <h4 className="text-lg font-semibold">
            💳 Razorpay
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Coming Soon
          </p>

        </div>

        <span className="rounded-full bg-[#C8A96A]/20 px-4 py-2 text-xs font-semibold text-[#C8A96A]">
          Soon
        </span>

      </div>

    </div>

  </div>

</div>
        <div>
          <label className="block mb-2 text-gray-300">
            Special Instructions
          </label>

          <textarea
  rows={4}
  value={instructions}
  onChange={(e) => setInstructions(e.target.value)}
  placeholder="Less sugar, extra ice..."
  className="w-full bg-neutral-800 rounded-xl p-4 outline-none resize-none border border-neutral-700 focus:border-amber-400"
/>
        </div>

      </div>

    </div>
  );
}