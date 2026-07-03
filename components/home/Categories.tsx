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
    <section className="section">

      <div className="container-custom">

        {/* Heading */}

        <div className="max-w-3xl">

          <p className="section-tag">
            Explore Our Menu
          </p>

          <h2 className="section-title mt-4">
            Crafted for Every Mood.
          </h2>

          <p className="section-description">
            Whether you're looking for a freshly brewed coffee,
            refreshing boba drink, creamy shake, delicious sandwich
            or kulfi, discover everything The Drip has to offer.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {categories.map((category, index) => (

            <div
              key={category.title}
              className={index === 4 ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto w-full" : ""}
            >
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