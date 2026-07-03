import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-black border-r border-neutral-800 text-white">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-amber-400">
          THE DRIP
        </h1>

        <p className="text-gray-400 mt-2">
          Admin Dashboard
        </p>

      </div>

      <nav className="px-6 space-y-3">

        <Link
          href="/admin"
          className="block rounded-xl px-5 py-4 hover:bg-neutral-900"
        >
          📊 Dashboard
        </Link>

        <Link
          href="/admin/products"
          className="block rounded-xl px-5 py-4 hover:bg-neutral-900"
        >
          ☕ Products
        </Link>

        <Link
          href="/admin/orders"
          className="block rounded-xl px-5 py-4 hover:bg-neutral-900"
        >
          📦 Orders
        </Link>

        <Link
          href="/admin/customers"
          className="block rounded-xl px-5 py-4 hover:bg-neutral-900"
        >
          👥 Customers
        </Link>

        <Link
          href="/admin/analytics"
          className="block rounded-xl px-5 py-4 hover:bg-neutral-900"
        >
          📈 Analytics
        </Link>

      </nav>

    </aside>
  );
}