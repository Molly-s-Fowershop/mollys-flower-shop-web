import CartNavigationLink from "@/modules/cart/components/CartNavigationLink";
import NavigationLink from "@/shared/components/base/NavigationLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <NavigationLink to="/">Home</NavigationLink>

        <NavigationLink to="/categories">Categories</NavigationLink>
        <NavigationLink to="/profile" linkClassName="px-1">
          <span className="material-symbols-outlined">person</span>
        </NavigationLink>
        <CartNavigationLink />
      </ul>
    </nav>
  );
}
