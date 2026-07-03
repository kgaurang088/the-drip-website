"use client";

const filters = [
  "All",
  "Coffee",
  "Boba",
  "Kulfi",
  "Sandwiches",
  "Cafe",
];

export default function GalleryFilters() {
  return (
    <section className="bg-[#0B0B0B] pb-16">

      <div className="container-custom">

        <div className="flex flex-wrap justify-center gap-4">

          {filters.map((filter, index) => (

            <button
              key={filter}
              className={`rounded-full px-7 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-300
              ${
                index === 0
                  ? "bg-[#C8A96A] text-black font-semibold"
                  : "border border-white/10 bg-[#151515] text-gray-300 hover:border-[#C8A96A] hover:text-white"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}