import { cn } from "@/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={cn("container w-full mx-auto", className)}>{children}</div>
  );
}
