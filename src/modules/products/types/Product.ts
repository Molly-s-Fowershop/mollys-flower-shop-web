import { Category } from "@/modules/categories/types/Category";
import { Media } from "@/shared/types/Media";

export type Product = {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  updatedAt: string;
  createdAt: string;
  category: Category;
  productDetails?: ProductDetails;
  profileImage: Media;
  medias?: Media[];
};

export type ProductDetails = {
  id: number;
  price: number;
  stock: number;
  type: string;
};
