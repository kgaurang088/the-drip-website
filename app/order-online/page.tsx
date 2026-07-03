"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import OrderHero from "../../components/order-online/OrderHero";
import DeliveryPartners from "../../components/order-online/DeliveryPartners";
import SignatureCollection from "../../components/order-online/SignatureCollection";


export default function OrderOnlinePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">
        <OrderHero />
        <DeliveryPartners />
        <SignatureCollection />
      </main>

      <Footer />
    </>
  );
}