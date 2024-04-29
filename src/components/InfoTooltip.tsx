"use client";
import { Tooltip } from "react-tooltip";
import { cn } from "@/utils/cn";

type InfoTooltipProps = {
  description: string;
  tooltipId: string;
  className?: string;
};

export default function InfoTooltip({
  description,
  className,
  tooltipId,
}: InfoTooltipProps) {
  return (
    <>
      <span
        data-tooltip-id={tooltipId}
        data-tooltip-place="top"
        className={cn(
          "material-symbols-outlined text-gray-600 hover:cursor-default",
          className
        )}
      >
        info
      </span>

      <Tooltip id={tooltipId} className="z-10">
        <div className="p-2 rounded-lg max-w-sm">{description}</div>
      </Tooltip>
    </>
  );
}
