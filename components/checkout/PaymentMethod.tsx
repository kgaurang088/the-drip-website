"use client";

import { useState } from "react";

export default function PaymentMethod() {
  const [payment, setPayment] = useState("UPI");

  return (
    <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">

      <h2 className="text-3xl font-bold mb-8">
        Payment Method
      </h2>

      <div className="space-y-5">

        {/* UPI */}

        <div
          onClick={() => setPayment("UPI")}
          className={`cursor-pointer rounded-2xl border p-5 transition ${
            payment === "UPI"
              ? "border-amber-400 bg-amber-400/10"
              : "border-neutral-700"
          }`}
        >
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-xl font-semibold">
                📱 UPI
              </h3>

              <p className="text-gray-400 mt-1">
                Google Pay • PhonePe • Paytm • BHIM
              </p>
            </div>

            <div className="text-2xl">
              {payment === "UPI" ? "✅" : ""}
            </div>

          </div>
        </div>

        {/* Cash */}

        <div
          onClick={() => setPayment("Cash")}
          className={`cursor-pointer rounded-2xl border p-5 transition ${
            payment === "Cash"
              ? "border-amber-400 bg-amber-400/10"
              : "border-neutral-700"
          }`}
        >
          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-xl font-semibold">
                💵 Cash
              </h3>

              <p className="text-gray-400 mt-1">
                Pay at the café counter.
              </p>
            </div>

            <div className="text-2xl">
              {payment === "Cash" ? "✅" : ""}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}