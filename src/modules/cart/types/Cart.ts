import { Product, ProductDetails } from "@/modules/products/types/Product";
import { ProfileImage } from "@/modules/products/types/ProfileImage";

export type Cart = {
  id: number;
  userId: number;
  cartItems: CartItem[];
};

export type CartItem = {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  product: Product;
  productDetails: ProductDetails;
  profileImage: ProfileImage;
};
