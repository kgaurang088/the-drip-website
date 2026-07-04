"use client";

import Image from "next/image";

const signatureItems = [
  {
    name: "Classic Cold Brew",
    description: "Slow brewed coffee with a smooth and refreshing taste.",
    image: "/coffee.png",
  },
  {
    name: "Chocolate Kulfi",
    description: "Rich and creamy kulfi crafted with premium ingredients.",
    image: "/kulfi.png",
  },
  {
    name: "Brown Sugar Boba",
    description: "Refreshing bubble tea with chewy pearls and bold flavour.",
    image: "/boba.png",
  },
  {
    name: "Veg Sandwich",
    description: "Freshly grilled sandwich prepared with quality ingredients.",
    image: "/sandwich.png",
  },
  {
    name: "Oreo Shake",
    description: "A creamy Oreo delight blended to perfection.",
    image: "/shake.png",
  },

   {
    name: "xxxxxxxxx",
    description: "Freshly grilled sandwich prepared with quality ingredients.",
    image: "/sandwich.png",
  },
  {
    name: "xxxxxxxx",
    description: "A creamy Oreo delight blended to perfection.",
    image: "/shake.png",
  },
 
{
    name: "Cheese Corn Sandwich",
    description: "Loaded with cheese and sweet corn, grilled fresh.",
    image: "/cheese-sandwich.png",
  },
];

export default function SignatureCollection() {
  return (
    <section className="bg-[#0B0B0B] py-16 lg:py-24">

      <div className="container-custom">
        <div className="mx-auto mb-12 lg:mb-20 h-px w-32 lg:w-48 bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent" />

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="section-tag">
            SIGNATURE COLLECTION
          </p>

          <h2 className="section-title mt-5">
            Crafted With Passion.
            <br />
            Served With Love.
          </h2>

          <p className="section-description mt-6 text-sm sm:text-base leading-7 sm:leading-8">
            A curated selection of our most loved creations.
            Every item is freshly prepared to deliver an unforgettable café experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

          {signatureItems.map((item) => (

            <div
              key={item.name}
             className="group overflow-hidden rounded-[24px]  lg:rounded-[36px] border border-white/10 bg-gradient-to-br from-[#181818] via-[#151515] to-[#101010] transition-all duration-500 hover:-translate-y-3 hover:border-[#C8A96A] hover:shadow-[0_20px_60px_rgba(200,169,106,0.15)]"
            >

              <div  className="relative flex h-64 items-center justify-center overflow-hidden bg-[#101010]">
                    {/* Golden Glow */}
  <div className="absolute h-44 w-44 rounded-full bg-[#C8A96A]/10 blur-[70px]" />

  
              {/*}  <Image
                  src={item.image}
                  alt={item.name}
                  width={220}
                  height={220}
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />*/}
                                <div className="text-white text-xl">
  {item.name}
</div>
              </div>

              <div className="p-5 sm:p-6">

                <h3 className="text-xl sm:text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400" >
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>
            <div className="mt-16 lg:mt-24 text-center">

  <p className="text-xl sm:text-2xl font-semibold text-white">
    Crafted with Passion.
  </p>

  <p className="mt-2 text-gray-400">
    Served with Love. Delivered Fresh.
  </p>

  <p className="mt-6 text-[#C8A96A] tracking-[0.35em] uppercase text-sm">
    The Drip by Kulfi Club
  </p>

</div>
      </div>

    </section>
  );
}