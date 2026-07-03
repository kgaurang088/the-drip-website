const categories = [
  "All",
  "Coffee",
  "Cold Brew",
  "Boba",
  "Kulfi",
  "Sandwiches",
  "Combos",
  "Seasonal",
];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-amber-500 hover:text-black transition duration-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
}