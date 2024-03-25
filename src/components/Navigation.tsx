import NavigationLink from "./NavigationLink";
import { ProfileCircle, Cart } from "iconoir-react";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/featured">Featured</NavigationLink>
        <NavigationLink href="/categories">Categories</NavigationLink>
        <NavigationLink href="/profile" linkClassName="px-1">
          <ProfileCircle width={24} height={24} />
        </NavigationLink>
        <NavigationLink href="/cart">
          <Cart width={24} height={24} />
        </NavigationLink>
      </ul>
    </nav>
  );
}
