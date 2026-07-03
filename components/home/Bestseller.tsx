"use client";


import { products } from "@/data/products";
import ProductCard from "@/components/menu/ProductCard";


export default function Bestseller() {
  return (
    <section className="section bg-[#0E0E0E]">

      <div className="container-custom">

        {/* Heading */}

        <div className="max-w-3xl">

          <p className="section-tag">
            Most Loved
          </p>

          <h2 className="section-title mt-4">
            Customer Favourites.
          </h2>

          <p className="section-description">
            Discover the signature favourites that our customers enjoy
            the most. Crafted with quality ingredients and served fresh,
            every item reflects the experience of The Drip.
          </p>

        </div>

        {/* Product Cards */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

         {products
         .filter((product) => product.bestseller)
           .map((product) => (

          <ProductCard
             key={product.id}
             product={product}
           />

          ))}

        </div>

      </div>

    </section>
  );
}