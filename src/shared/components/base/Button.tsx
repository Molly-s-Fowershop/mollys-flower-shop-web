import { HTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "px-2 py-2 border-2 border-gray-700 rounded-lg transition-all duration-300",
        rest.className
      )}
    >
      {children}
    </button>
  );
}
