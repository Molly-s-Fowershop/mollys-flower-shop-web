import CartItemEntry from "./CartItemEntry";
import { cn } from "@/shared/utils/cn";
import { Cart } from "@/modules/cart/types/Cart";

type CartItemListProps = {
  cart: Cart;
  className?: string;
};

export default function CartItemList({ cart, className }: CartItemListProps) {
  const items = cart.cartItems;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => (
        <CartItemEntry key={item.id} item={item} />
      ))}
    </div>
  );
}
