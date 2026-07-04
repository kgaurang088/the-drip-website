export default function Gallery() {
  const items = [
    "Premium Coffee",
    "Signature Boba",
    "Fresh Sandwiches",
    "Indoor Seating",
    "Outdoor Seating",
    "Signature Kulfi",
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-amber-400 uppercase tracking-[6px] text-center font-semibold">
          Gallery
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Experience The Drip
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6">
          Every corner, every drink and every bite is crafted to give
          you an unforgettable café experience.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

          {items.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl border-2 border-dashed border-neutral-700 bg-neutral-900 flex flex-col items-center justify-center hover:border-amber-400 transition"
            >
              <div className="text-6xl text-neutral-600 mb-4">
                📷
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item}
              </h3>

              <p className="text-gray-500 mt-2 text-center px-4">
                Image will be added here
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}