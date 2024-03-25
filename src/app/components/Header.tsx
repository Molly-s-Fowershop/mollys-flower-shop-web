import Link from "next/link";
import Navigation from "@/app/components/Navigation";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto py-6 flex items-center justify-between gap-4">
        <h1 className="text-lg font-medium">Molly&apos;s Flower Shop</h1>

        <Navigation />
      </div>
    </header>
  );
}
