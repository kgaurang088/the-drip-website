import Link from "next/link";

export default function GalleryPreview() {
  const placeholders = [1, 2, 3, 4];

  return (
    <section className="bg-[#050505] py-16 lg:py-28">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-amber-400 font-semibold">
            GALLERY
          </p>

         <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold">
            Moments at The Drip
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-400">
            Every visit tells a story. Soon you&apos;ll discover our café,
            signature beverages, interiors and unforgettable moments
            captured here.
          </p>

        </div>

        <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {placeholders.map((item) => (
            <div
              key={item}
              className="aspect-[4/5] rounded-2xl lg:rounded-3xl border border-neutral-800 bg-neutral-900 hover:border-amber-400 transition-all duration-300 overflow-hidden group"
            >

              <div className="w-full h-full flex flex-col items-center justify-center">

                <div className=" w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-neutral-700 flex items-center justify-center text-4xl">
                  📷
                </div>

                <h3 className="mt-6 text-lg sm:text-xl font-semibold">
                  Image Coming Soon
                </h3>

                <p className="mt-3 px-5 text-center text-sm text-gray-500">
                  Professional café photography will be added soon.
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-16">

         

        </div>

      </div>

    </section>
  );
}