import StatsCard from "../../components/admin/StatsCard";
import OrdersTable from "../../components/admin/OrdersTable";

export default function AdminPage() {
  return (
    <div className="space-y-10">

      {/* Page Heading */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome to The Drip Admin Dashboard.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Revenue Today"
          value="₹12,540"
        />

        <StatsCard
          title="Orders"
          value="42"
          color="text-green-400"
        />

        <StatsCard
          title="Products"
          value="28"
          color="text-blue-400"
        />

        <StatsCard
          title="Customers"
          value="315"
          color="text-pink-400"
        />

      </div>

      {/* Recent Orders */}
      <OrdersTable />

    </div>
  );
}