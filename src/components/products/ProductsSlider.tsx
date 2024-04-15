import { Product } from "@/types/Product";
import ProductEntry from "./ProductEntry";
import { EmblaCarousel, EmblaSlide } from "@/components/embla";
import { EmblaOptionsType } from "embla-carousel";

const emblaOptions: EmblaOptionsType = {
  align: "start",
  loop: true,
};

type ProductsSliderProps = {
  products: Product[];
  title?: string;
};

export default function ProductsSlider({
  products,
  title,
}: ProductsSliderProps) {
  return (
    <div className="flex flex-col gap-4 max-w-full px-4">
      {title && <h1 className="text-xl">{title}</h1>}

      <EmblaCarousel options={emblaOptions}>
        {products.map((product) => (
          <EmblaSlide key={product.id}>
            <ProductEntry key={product.id} product={product} />
          </EmblaSlide>
        ))}
      </EmblaCarousel>
    </div>
  );
}
