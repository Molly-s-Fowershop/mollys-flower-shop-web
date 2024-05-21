import { cn } from "@/shared/utils/cn";
import Container from "@/shared/components/base/Container";
import { HTMLAttributes } from "react";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

import logo from "@/assets/images/short-logo.png";

type FooterProps = HTMLAttributes<HTMLDivElement>;

export default function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer className={cn("border-t py-6", className)} {...rest}>
      <Container className=" grid grid-cols-3 px-4">
        <div className="flex flex-col justify-between items-start h-full max-w-32">
          <img src={logo} alt="Molly's Flower Shop" className="w-full" />

          <p className="text-center text-sm text-gray-700 mt-auto whitespace-nowrap">
            &copy; {new Date().getFullYear()} Molly&apos;s Flower Shop
          </p>
        </div>

        <ContactUs />

        <AboutUs />
      </Container>
    </footer>
  );
}
