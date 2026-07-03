export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  description?: string;
  available?: boolean;
  bestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}