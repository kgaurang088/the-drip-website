"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white py-24">

        <div className="container-custom">

          <h1 className="text-5xl font-bold mb-12">

            Checkout

          </h1>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

            <CheckoutForm />

            <CheckoutSummary />

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}