"use client";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/product";



type MenuCardProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  };
};

export default function MenuCard({ product }: MenuCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="bg-neutral-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <p className="text-amber-400 text-sm mb-2">
          {product.category}
        </p>

        <h3 className="text-2xl font-semibold">
          {product.name}
        </h3>

        <p className="text-amber-400 text-xl mt-3 font-bold">
          ₹{product.price}
        </p>
{/*
<button
  onClick={() => addToCart(product as Product)}
  className="mt-6 w-full bg-amber-400 text-black py-3 rounded-xl font-semibold hover:bg-amber-300 transition"
>
  Add to Cart
</button>
*/}
       
      </div>
    </div>
  );
}