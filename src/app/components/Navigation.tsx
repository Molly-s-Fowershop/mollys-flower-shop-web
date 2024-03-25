import NavigationLink from "./NavigationLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/featured">Featured</NavigationLink>
        <NavigationLink href="/categories">Categories</NavigationLink>
      </ul>
    </nav>
  );
}
