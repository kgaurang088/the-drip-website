type StatsCardProps = {
  title: string;
  value: string;
  color?: string;
};

export default function StatsCard({
  title,
  value,
  color = "text-amber-400",
}: StatsCardProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-400 transition">
      <h3 className="text-gray-400 text-sm uppercase tracking-wider">
        {title}
      </h3>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>
    </div>
  );
}