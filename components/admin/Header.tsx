export default function Header() {
  return (
    <header className="h-24 border-b border-neutral-800 bg-black flex items-center justify-between px-10">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back, Admin
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold">
          A
        </div>

      </div>

    </header>
  );
}