import { Product } from "@/types/product";
import { number } from "framer-motion";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cold Brew",
    category: "Coffee",
    price: 180,
    image: "/coffee.png",
     bestseller: true,
    available: true,
    rating :4.9,
    description: "Rich cold brew coffee with a smooth finish.",
  },
  {
    id: 2,
    name: "Chocolate Kulfi",
    category: "Kulfi",
    price: 120,
    image: "/kulfi.png",
     bestseller: true,
    available: true,
    rating : 4.9,
    description: "Creamy artisan kulfi with premium chocolate.",
  
  },
  {
    id: 3,
    name: "Brown Sugar Boba",
    category: "Boba",
    price: 220,
    image: "/boba.png",
     bestseller: true,
    available: true,
    rating : 4.9,
    description:"Brown sugar milk tea with chewy tapioca pearls.",
  },
  {
    id: 4,
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 160,
    image: "/sandwich.png",
     bestseller: true,
    available: true,
    rating : 4.9,
    description: "Freshly grilled sandwich with premium fillings.",
  },
];