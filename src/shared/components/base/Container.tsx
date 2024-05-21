import { cn } from "@/shared/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={cn("container w-full mx-auto px-4", className)}>
      {children}
    </div>
  );
}
