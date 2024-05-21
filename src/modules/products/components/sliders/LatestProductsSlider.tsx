import { Carousel, EmblaSlide } from "@/shared/components/embla";
import ProductEntry from "@/modules/products/components/ProductEntry";
import { useLatestProducts } from "@/modules/products/hooks/useLatestProducts";

type LatestProductsSliderProps = {
  title?: string;
};

export default function LatestProductsSlider({
  title = "Latest products",
}: LatestProductsSliderProps) {
  const { response } = useLatestProducts();

  if (!response) return null;

  const { data } = response;

  return (
    <div>
      <Carousel title={title} controls={true}>
        {data.map((product) => (
          <EmblaSlide key={product.id}>
            <ProductEntry product={product} />
          </EmblaSlide>
        ))}
      </Carousel>
    </div>
  );
}
