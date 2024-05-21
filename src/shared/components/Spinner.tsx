import spinner from "@/assets/svg/spinner.svg";
import { cn } from "@/shared/utils/cn";

type SpinnerProps = {
  className?: string;
};

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className={cn("flex justify-center items-center w-6", className)}>
      <img src={spinner} alt="spinner" className="animate-spin text-red-500" />
    </div>
  );
}
