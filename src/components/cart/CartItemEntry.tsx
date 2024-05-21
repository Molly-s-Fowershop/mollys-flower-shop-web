import { CartItem } from "@/types/Cart";
import Image from "next/image";

type CartItemEntryProps = {
  item: CartItem;
};

export default function CartItemEntry({ item }: CartItemEntryProps) {
  const { productDetails, profileImage, ...product } = item.product;

  return (
    <div className="flex gap-4 p-4 border-2 border-gray-800">
      <Image
        src={profileImage.url}
        width={100}
        height={40}
        alt={product.name}
      />

      <div>
        <p>
          {product.name} x {item.quantity}
        </p>
        <p>USD {productDetails?.price}</p>
      </div>
    </div>
  );
}
