import { cn } from "@/utils/cn";
import Container from "./Container";
import React, { HTMLAttributes } from "react";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Image from "next/image";

type FooterProps = HTMLAttributes<HTMLDivElement>;

export default function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer className={cn("border-t py-6", className)} {...rest}>
      <Container className=" grid grid-cols-3">
        <div className="flex flex-col justify-between items-start h-full">
          <Image
            src="/images/short-logo.png"
            alt="Molly's Flower Shop"
            width={100}
            height={100}
            className="h-auto w-auto"
            priority
          />

          <p className="text-center text-sm text-gray-700 mt-auto">
            &copy; {new Date().getFullYear()} Molly&apos;s Flower Shop
          </p>
        </div>

        <ContactUs />

        <AboutUs />
      </Container>
    </footer>
  );
}
