"use client";

import { Tooltip } from "react-tooltip";

type CartTooltipProps = {
  children: React.ReactNode;
};

export default function CartTooltip({ children }: CartTooltipProps) {
  const tooltipId = "cart-tooltip";

  return (
    <>
      <button data-tooltip-id={tooltipId} className="inline-flex">
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>
      <Tooltip
        id={tooltipId}
        className="z-10"
        place="bottom"
        clickable
        openOnClick
        closeEvents={{
          click: true,
          dblclick: true,
          blur: true,
        }}
        globalCloseEvents={{
          escape: true,
        }}
      >
        {children}
      </Tooltip>
    </>
  );
}
