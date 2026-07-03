export default function ProductTable() {
  const products = [
    {
      id: 1,
      name: "Classic Cold Brew",
      category: "Coffee",
      price: 180,
      stock: "Available",
    },
    {
      id: 2,
      name: "Brown Sugar Boba",
      category: "Boba",
      price: 220,
      stock: "Available",
    },
    {
      id: 3,
      name: "Chocolate Kulfi",
      category: "Kulfi",
      price: 120,
      stock: "Available",
    },
    {
      id: 4,
      name: "Veg Sandwich",
      category: "Food",
      price: 160,
      stock: "Out of Stock",
    },
  ];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">

      <table className="w-full">

        <thead>
          <tr className="border-b border-neutral-700 text-gray-400">

            <th className="text-left py-4">Product</th>
            <th className="text-left">Category</th>
            <th className="text-left">Price</th>
            <th className="text-left">Stock</th>
            <th className="text-center">Actions</th>

          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-neutral-800 hover:bg-neutral-800"
            >

              <td className="py-5 text-white">
                {product.name}
              </td>

              <td className="text-gray-300">
                {product.category}
              </td>

              <td className="text-amber-400 font-semibold">
                ₹{product.price}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.stock === "Available"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {product.stock}
                </span>
              </td>

              <td className="text-center space-x-3">

                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
                  Edit
                </button>

                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white">
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}