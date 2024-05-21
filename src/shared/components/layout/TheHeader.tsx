import { cn } from "@/shared/utils/cn";
import Navigation from "./Navigation";
import Container from "@/shared/components/base/Container";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/images/small-logo.png";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={cn(
        "border-b py-3  fixed w-full z-10 bg-white shadow-sm",
        className
      )}
      {...rest}
    >
      <Container className="flex items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Company small icon" width={60} height={60} />
          <h1 className="hidden md:block text-2xl font-medium">
            Molly&apos;s Flower Shop
          </h1>
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}
