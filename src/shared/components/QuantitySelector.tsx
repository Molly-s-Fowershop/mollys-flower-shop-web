import { useEffect, useState } from "react";

type QuantitySelectorProps = {
  initialQuantity?: number;
  limit?: number;
  onQuantityChange?: (quantity: number) => void;
};

export default function QuantitySelector({
  initialQuantity = 0,
  limit,
  onQuantityChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (type: "add" | "remove") => {
    switch (type) {
      case "add":
        setQuantity((prev) => {
          if (limit && prev >= limit) return prev;
          return prev + 1;
        });
        break;
      case "remove":
        setQuantity((prev) => Math.max(prev - 1, 0));
        break;
    }
  };

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity);
    }
  }, [quantity, onQuantityChange]);

  return (
    <div className="flex gap-2 items-center border-2 border-gray-800 rounded-md w-fit select-none text-sm">
      <button
        className=" bg-gray-800 text-white px-1.5 py-1 flex-1 inline-flex items-center"
        onClick={() => handleChange("remove")}
      >
        <span className="material-symbols-outlined text-[18px]">remove</span>
      </button>
      <span className="min-w-[1.5rem] text-center">{quantity}</span>
      <button
        className="bg-gray-800 text-white px-1.5 py-1 flex-1 inline-flex items-center"
        onClick={() => handleChange("add")}
      >
        <span className="material-symbols-outlined text-[18px]">add</span>
      </button>
    </div>
  );
}
