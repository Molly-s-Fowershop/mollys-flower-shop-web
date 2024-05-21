import NavigationLink from "@/shared/components/base/NavigationLink";
import { useCart } from "@/modules/cart/hooks/useCart";
import { cn } from "@/shared/utils/cn";

export default function CartNavigationLink() {
  const { cart } = useCart();

  const cartItemsCount =
    cart && cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <NavigationLink to="/cart" linkClassName="relative">
      <span className="material-symbols-outlined">shopping_cart</span>

      {!!cartItemsCount && (
        <span
          className={cn(
            "absolute -top-1.5 -right-0.5 border border-gray-800 rounded-full px-1.5 bg-black text-white",
            {
              "-right-2 py-1 -top-2.5": cartItemsCount > 9,
            }
          )}
        >
          {cartItemsCount > 9 ? "9+" : cartItemsCount}
        </span>
      )}
    </NavigationLink>
  );
}
