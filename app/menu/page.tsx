"use client";

import { useState } from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import MenuCard from "../../components/menu/MenuCard";
import SearchBar from "../../components/menu/SearchBar";
import CategoryFilter from "../../components/menu/CategoryFilter";

import { products } from "../../data/products";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

const matchesSearch =
  product.name.toLowerCase().includes(searchText) ||
  product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="bg-black text-white min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-6xl font-bold text-center mb-4">
            Our Menu
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Freshly crafted beverages & delicious treats.
          </p>

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <MenuCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}