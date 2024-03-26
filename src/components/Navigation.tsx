import NavigationLink from "./NavigationLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/featured">Featured</NavigationLink>
        <NavigationLink href="/categories">Categories</NavigationLink>
        <NavigationLink href="/profile" linkClassName="px-1">
          <span className="material-symbols-outlined">person</span>
        </NavigationLink>
        <NavigationLink href="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
        </NavigationLink>
      </ul>
    </nav>
  );
}
