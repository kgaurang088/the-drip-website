"use client";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Coffee",
    description:
      "Freshly brewed hot and cold coffee, crafted for every coffee lover.",
    href: "/menu?category=coffee",
  },
  {
    title: "Boba Drinks",
    description:
      "Refreshing bubble drinks made with exciting flavours and textures.",
    href: "/menu?category=boba",
  },
  
  {
    title: "Sandwiches",
    description:
      "Freshly prepared sandwiches made for every quick bite and meal.",
    href: "/menu?category=sandwiches",
  },
  {
    title: "Kulfi",
    description:
      "Creamy kulfi in classic and modern flavours for every occasion.",
    href: "/menu?category=kulfi",
  },
];

export default function Categories() {
  return (
    <section className="py-16 lg:py-24">

      <div className="container-custom">

        {/* Heading */}

        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">

          <p className="section-tag">
            Explore Our Menu
          </p>

          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Crafted for Every Mood.
          </h2>

          <p className="section-description">
            Whether you&apos;re looking for a freshly brewed coffee,
            refreshing boba drink, creamy shake, delicious sandwich
            or kulfi, discover everything The Drip has to offer.
          </p>

        </div>

        {/* Cards */}

          <div className="mt-12 lg:mt-20 grid gap-6 lg:gap-8 lg:grid-cols-2">
          {categories.map((category ) => (

            <div key={category.title}>
           

              <CategoryCard
                title={category.title}
                description={category.description}
                href={category.href}
              />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}