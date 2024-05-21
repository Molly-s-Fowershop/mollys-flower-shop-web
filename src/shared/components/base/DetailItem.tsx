import { cn } from "@/shared/utils/cn";

type DetailItemProps = {
  label: string;
  value: string;
  labelClassName?: string;
  valueClassName?: string;
};

export default function DetailItem({
  label,
  value,
  labelClassName,
  valueClassName,
}: DetailItemProps) {
  return (
    <div className="flex gap-4 justify-between">
      <p className={cn(labelClassName)}>{label}</p>
      <p className={cn(valueClassName)}>{value}</p>
    </div>
  );
}
