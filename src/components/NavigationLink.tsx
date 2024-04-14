"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  linkClassName?: string;
};

export default function NavigationLink({
  href,
  children,
  linkClassName = "",
}: NavigationLinkProps) {
  const path = usePathname();
  const activeClass = path === href ? "border-black" : "";

  return (
    <li className="inline-flex">
      <Link
        href={href}
        className={cn(
          "px-2 py-1 border border-transparent rounded-md text-sm transition-colors duration-300 inline-flex",
          activeClass,
          linkClassName
        )}
      >
        {children}
      </Link>
    </li>
  );
}
