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
    <section className="bg-[#0B0B0B] pb-10 lg:pb-16">

      <div className="container-custom">

        <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide lg:flex-wrap lg:justify-center">

          {filters.map((filter, index) => (

            <button
              key={filter}
             className={`shrink-0 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] transition-all duration-300
              ${
                index === 0
                  ? "bg-[#C8A96A] text-black font-semibold shadow-lg shadow-[#C8A96A]/30"
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