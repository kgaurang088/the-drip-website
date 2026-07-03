"use client";

import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center py-24">

        <div className="max-w-2xl w-full rounded-[36px] border border-white/10 bg-[#151515] p-10 text-center">

          <CheckCircle2
            className="mx-auto text-green-500"
            size={90}
          />

          <h1 className="mt-8 text-5xl font-bold">
            Order Confirmed!
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Thank you for choosing
            <span className="text-[#C8A96A] font-semibold">
              {" "}The Drip by Kulfi Club
            </span>.
            Your order has been received successfully.
          </p>

          <div className="mt-10 rounded-3xl bg-[#101010] p-8">

            <p className="text-gray-400">
              Order Number
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#C8A96A]">
              #DRIP1025
            </h2>

            <div className="mt-8 flex items-center justify-center gap-3">

              <Clock />

              <span>
                Estimated Preparation Time:
              </span>

              <span className="font-semibold text-[#C8A96A]">
                15–20 mins
              </span>

            </div>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/"
              className="btn-secondary"
            >
              Back to Home
            </Link>

            <Link
              href="/menu"
              className="btn-primary"
            >
              Order Again
            </Link>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}