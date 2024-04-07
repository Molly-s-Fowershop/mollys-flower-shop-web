import { cn } from "@/utils/cn";
import Navigation from "@/components/Navigation";
import Container from "./Container";
import { HTMLAttributes } from "react";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={cn("border-b py-6 px-4 fixed w-full z-10 bg-white", className)}
      {...rest}
    >
      <Container className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-medium">Molly&apos;s Flower Shop</h1>
        <Navigation />
      </Container>
    </header>
  );
}
