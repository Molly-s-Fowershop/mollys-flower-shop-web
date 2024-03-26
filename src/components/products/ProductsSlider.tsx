"use client";
import { Product } from "@/types/Product";
import ProductEntry from "./ProductEntry";
import SliderWrapper from "../SliderWrapper";

type ProductsSliderProps = {
  products: Product[];
  title?: string;
};

export default function ProductsSlider({
  products,
  title,
}: ProductsSliderProps) {
  return (
    <div className="flex flex-col gap-4">
      {title && <h1 className="text-xl">{title}</h1>}

      <SliderWrapper>
        {products.map((product) => (
          <ProductEntry key={product.id} product={product} />
        ))}
      </SliderWrapper>
    </div>
  );
}
