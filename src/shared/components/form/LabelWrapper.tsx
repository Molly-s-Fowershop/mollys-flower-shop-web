import { HTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";

type LabelWrapperProps = HTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
  label?: string;
  labelClassName?: string;
  error?: string;
  errorClassName?: string;
  isRequired?: boolean;
};

export default function LabelWrapper({
  children,
  label,
  labelClassName,
  error,
  errorClassName,
  isRequired,
  ...rest
}: LabelWrapperProps) {
  return (
    <label className="inline-flex flex-col gap-2" {...rest}>
      {label && (
        <p className={cn(labelClassName)}>
          {label} {isRequired && <span className="text-red-500">*</span>}
        </p>
      )}
      {children}
      {error && (
        <span className={cn("text-sm text-red-400", errorClassName)}>
          {error}
        </span>
      )}
    </label>
  );
}
