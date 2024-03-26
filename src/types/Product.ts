import { Category } from "./Category";

export interface Product {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  updatedAt: string;
  createdAt: string;
  category: Category;
  productDetails: ProductDetails;
  productOffers: any[];
}

export interface ProductDetails {
  id: number;
  price: number;
  stock: number;
  type: string;
}
