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
    <li>
      <Link
        href={href}
        className={cn(
          "px-2 py-1 border border-transparent rounded-md text-xs",
          activeClass,
          linkClassName
        )}
      >
        {children}
      </Link>
    </li>
  );
}
