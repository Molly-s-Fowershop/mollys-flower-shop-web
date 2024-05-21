import Spinner from "./Spinner";
import { cn } from "@/shared/utils/cn";

type LoadingOverlayProps = {
  className?: string;
};

export default function LoadingOverlay({ className }: LoadingOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-black bg-opacity-5 backdrop-blur-[2px] transition-all",
        className
      )}
    >
      <div className="flex items-center justify-center h-full">
        <Spinner className="w-12" />
      </div>
    </div>
  );
}
