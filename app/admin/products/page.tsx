"use client";

import { useState } from "react";

import ProductTable from "../../../components/admin/ProductTable";
import AddProductModal from "../../../components/admin/AddProductModal";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Products
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all products available in The Drip.
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-amber-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-amber-300"
        >
          + Add Product
        </button>

      </div>

      <ProductTable />

      <AddProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}