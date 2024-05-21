"use client";
import { cn } from "@/shared/utils/cn";
import { Link } from "react-router-dom";

type NavigationLinkProps = {
  to: string;
  children: React.ReactNode;
  linkClassName?: string;
};

export default function NavigationLink({
  to,
  children,
  linkClassName = "",
}: NavigationLinkProps) {
  return (
    <li className="inline-flex">
      <Link
        to={to}
        className={cn(
          "px-2 py-1 border border-transparent rounded-md text-sm transition-colors duration-300 inline-flex",
          linkClassName
        )}
      >
        {children}
      </Link>
    </li>
  );
}
