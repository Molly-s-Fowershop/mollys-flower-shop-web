import CartItemEntry from "./CartItemEntry";
import { getUserCart } from "@/lib/services/user.services";

export default async function CartItemList() {
  const { data } = await getUserCart();

  const items = data.cartItems;

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <CartItemEntry key={item.id} item={item} />
      ))}
    </div>
  );
}
