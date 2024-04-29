import { cn } from "@/utils/cn";
import Navigation from "@/components/Navigation";
import Container from "./Container";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={cn("border-b py-3  fixed w-full z-10 bg-white", className)}
      {...rest}
    >
      <Container className="flex items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/small-logo.png"
            alt="Company small icon"
            width={60}
            height={60}
          />
          <h1 className="text-2xl font-medium">Molly&apos;s Flower Shop</h1>
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}
