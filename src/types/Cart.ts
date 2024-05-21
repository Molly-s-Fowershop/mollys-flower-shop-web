import { Product, ProductDetails } from "./Product";
import { ProfileImage } from "./Media";

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
