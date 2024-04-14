"use client";
import { Tooltip } from "react-tooltip";
import { cn } from "@/utils/cn";

type InfoTooltipProps = {
  description: string;
  className?: string;
};

export default function InfoTooltip({
  description,
  className,
}: InfoTooltipProps) {
  return (
    <>
      <span
        data-tooltip-id="category-description"
        data-tooltip-content={description}
        data-tooltip-place="top"
        className={cn(
          "material-symbols-outlined text-gray-600 hover:cursor-default",
          className
        )}
      >
        info
      </span>
      <Tooltip id="category-description" />
    </>
  );
}
