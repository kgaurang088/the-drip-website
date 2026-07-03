"use client";

const galleryItems = [
  {
    title: "Signature Coffee",
    category: "Coffee",
    height: "h-[520px]",
  },
  {
    title: "Refreshing Boba",
    category: "Boba",
    height: "h-[520px]",
  },
  {
    title: "Cafe Interior",
    category: "Cafe",
    height: "h-[520px]",
  },
  {
    title: "Artisan Kulfi",
    category: "Kulfi",
    height: "h-[520px]",
  },
  {
    title: "Grilled Sandwich",
    category: "Sandwiches",
    height: "h-[520px]",
  },
  {
    title: "The Drip Experience",
    category: "Lifestyle",
    height: "h-[520px]",
  },
];

export default function GalleryGrid() {
  return (
    <section className="bg-[#0B0B0B] pb-32">

      <div className="container-custom">

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8">

          {galleryItems.map((item) => (

            <div
              key={item.title}
              className={`group relative mb-8 overflow-hidden rounded-[36px] border border-white/10 bg-[#151515] ${item.height} break-inside-avoid transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96A]`}
            >

              {/* Background Glow */}

              <div className="absolute inset-0">

                <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#C8A96A]/20 blur-[80px]" />

                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#C8A96A]/10 blur-[100px]" />

              </div>

             {/* Image Placeholder */}

        <div className="absolute inset-0 overflow-hidden">

                 {/* Placeholder Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#151515] to-[#101010] transition-transform duration-700 group-hover:scale-110" />

              {/* Gold Glow */}

             <div className="absolute top-10 left-10 h-36 w-36 rounded-full bg-[#C8A96A]/15 blur-[80px]" />

                 <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-[#C8A96A]/10 blur-[90px]" />

                     {/* Logo */}

             <div className="absolute inset-0 flex items-center justify-center">

              <img
                   src="/logo.png"
                    alt="The Drip"
                    className="w-24 h-24 object-contain transition-all duration-700 group-hover:scale-110 group-hover:opacity-20"
              />

            </div>

                </div>

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Content */}

            <div className="absolute bottom-8 left-8 right-8 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <span className="rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A]">

                  {item.category}

            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">

              {item.title}

            </h3>

             <p className="mt-3 text-gray-300">

              Click to view

                </p>

                </div>
  

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}