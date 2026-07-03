"use client";

const categories = [
  "All",
  "Coffee",
  "Cold Brew",
  "Boba",
  "Kulfi",
  "Food",
];

type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-full transition ${
            selected === category
              ? "bg-amber-400 text-black"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}