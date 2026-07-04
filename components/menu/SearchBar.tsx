"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-8 lg:mb-10">
      <input
        type="text"
        placeholder="Search coffee, boba, kulfi..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white outline-none transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"

      />
    </div>
  );
}