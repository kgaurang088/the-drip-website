export default function OrdersTable() {
  const orders = [
    {
      id: "#1001",
      customer: "Customer 01",
      phone: "XXXXXXXXXX",
      total: "₹580",
      payment: "UPI",
      status: "Preparing",
    },
    {
      id: "#1002",
      customer: "Customer 02",
      phone: "XXXXXXXXXX",
      total: "₹220",
      payment: "Cash",
      status: "Ready",
    },
    {
      id: "#1003",
      customer: "Customer 03",
      phone: "XXXXXXXXXX",
      total: "₹760",
      payment: "UPI",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 mt-10">

      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-neutral-700 text-gray-400">
              <th className="py-3">Order</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-neutral-800 hover:bg-neutral-800"
              >
                <td className="py-4 text-white">{order.id}</td>

                <td className="text-white">
                  {order.customer}
                </td>

                <td className="text-gray-400">
                  {order.phone}
                </td>

                <td className="text-amber-400 font-semibold">
                  {order.total}
                </td>

                <td className="text-white">
                  {order.payment}
                </td>

                <td>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {order.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}