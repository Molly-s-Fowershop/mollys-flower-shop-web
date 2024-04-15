import { Category } from "./Category";
import { Media } from "./Media";

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
  profileImage: Media;
}

export interface ProductDetails {
  id: number;
  price: number;
  stock: number;
  type: string;
}
