import Link from "next/link";

export default function GalleryPreview() {
  const placeholders = [1, 2, 3, 4];

  return (
    <section className="bg-[#050505] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-amber-400 font-semibold">
            GALLERY
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            Moments at The Drip
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            Every visit tells a story. Soon you'll discover our café,
            signature beverages, interiors and unforgettable moments
            captured here.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {placeholders.map((item) => (
            <div
              key={item}
              className="aspect-[4/5] rounded-3xl border border-neutral-800 bg-neutral-900 hover:border-amber-400 transition-all duration-300 overflow-hidden group"
            >

              <div className="w-full h-full flex flex-col items-center justify-center">

                <div className="w-20 h-20 rounded-full border border-neutral-700 flex items-center justify-center text-4xl">
                  📷
                </div>

                <h3 className="text-xl font-semibold mt-8">
                  Image Coming Soon
                </h3>

                <p className="text-gray-500 text-center px-6 mt-3">
                  Professional café photography will be added soon.
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-300 transition"
          >
            Explore Gallery →
          </Link>

        </div>

      </div>

    </section>
  );
}