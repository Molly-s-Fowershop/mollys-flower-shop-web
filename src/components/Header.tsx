import { cn } from "@/utils/cn";
import Navigation from "@/components/Navigation";
import Container from "./Container";
import { HTMLAttributes } from "react";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header className={cn("w-full border-b", className)} {...rest}>
      <Container className="py-8 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-medium">Molly&apos;s Flower Shop</h1>
        <Navigation />
      </Container>
    </header>
  );
}
