type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search coffee, boba, kulfi..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-neutral-900 text-white px-6 py-4 rounded-2xl outline-none border border-neutral-800 focus:border-amber-400 transition"
      />
    </div>
  );
}