"use client";

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddProductModal({
  isOpen,
  onClose,
}: AddProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-neutral-900 w-full max-w-2xl rounded-2xl p-8 border border-neutral-800">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-white">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-white"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Product Name"
            className="bg-neutral-800 text-white p-4 rounded-xl"
          />

          <select className="bg-neutral-800 text-white p-4 rounded-xl">
            <option>Coffee</option>
            <option>Boba</option>
            <option>Kulfi</option>
            <option>Sandwich</option>
          </select>

          <input
            type="number"
            placeholder="Price"
            className="bg-neutral-800 text-white p-4 rounded-xl"
          />

          <select className="bg-neutral-800 text-white p-4 rounded-xl">
            <option>Available</option>
            <option>Out of Stock</option>
          </select>

        </div>

        <textarea
          placeholder="Description..."
          rows={5}
          className="bg-neutral-800 text-white p-4 rounded-xl w-full mt-6"
        />

        <div className="mt-6">

          <input
            type="file"
            className="text-white"
          />

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-neutral-700 text-white"
          >
            Cancel
          </button>

          <button className="px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold">
            Save Product
          </button>

        </div>

      </div>

    </div>
  );
}