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
    description?: string;
    rating?: number;
    bestseller?: boolean;
  };
};

export default function MenuCard({ product }: MenuCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="bg-neutral-900 rounded-3xl overflow-hidden hover:scale-[1.03] transition duration-300 flex flex-col group shadow-lg hover:shadow-amber-900/20">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            BESTSELLER
          </span>
        )}
        {product.rating && (
          <span className="absolute top-3 right-3 bg-black/70 text-amber-400 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            ★ {product.rating}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold text-white leading-snug">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-neutral-400 text-sm mt-1 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <p className="text-amber-400 text-xl font-bold">
            ₹{product.price}
          </p>
          <button
            onClick={() => addToCart(product as Product)}
            className="bg-amber-400 text-black text-sm font-bold px-4 py-2 rounded-xl hover:bg-amber-300 active:scale-95 transition"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}