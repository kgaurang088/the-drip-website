"use client";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Coffee",
    description: "Freshly brewed hot and cold coffee, crafted for every coffee lover.",
    href: "/menu?category=coffee",
    image: "/coffee.png",
  },
  {
    title: "Boba Drinks",
    description: "Refreshing bubble drinks made with exciting flavours and textures.",
    href: "/menu?category=boba",
    image: "/boba.png",
  },
  {
    title: "Sandwiches",
    description: "Freshly prepared sandwiches made for every quick bite and meal.",
    href: "/menu?category=sandwiches",
    image: "/sandwich.png",
  },
  {
    title: "Kulfi",
    description: "Creamy kulfi in classic and modern flavours for every occasion.",
    href: "/menu?category=kulfi",
    image: "/kulfi.png",
  },
  {
    title: "Pizza",
    description: "Wood-fired gourmet pizzas loaded with fresh toppings and flavour.",
    href: "/menu?category=pizza",
    image: "/pizza.png",
  },
  {
    title: "Burgers",
    description: "Juicy stacked burgers with premium fillings and our signature drip sauce.",
    href: "/menu?category=burger",
    image: "/burger.png",
  },
  {
    title: "Shakes",
    description: "Thick and creamy milkshakes in irresistible flavours.",
    href: "/menu?category=shakes",
    image: "/shake.png",
  },
];

export default function Categories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">

        {/* Heading */}
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <p className="section-tag">Explore Our Menu</p>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Crafted for Every Mood.
          </h2>
          <p className="section-description">
            Whether you&apos;re looking for a freshly brewed coffee, refreshing boba,
            creamy shake, pizza, burger, sandwich or kulfi — The Drip has it all.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 lg:mt-20 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              href={category.href}
              image={category.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}