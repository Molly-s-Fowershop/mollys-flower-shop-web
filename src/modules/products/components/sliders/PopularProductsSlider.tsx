import { Carousel, EmblaSlide } from "@/shared/components/embla";
import ProductEntry from "@/modules/products/components/ProductEntry";
import { usePopularProducts } from "@/modules/products/hooks/usePopularProducts";

export default function PopularProductsSlider() {
  const { response } = usePopularProducts();

  if (!response) return null;

  const { data } = response;

  return (
    <div>
      <Carousel title="Popular Products">
        {data.map((product) => (
          <EmblaSlide key={product.id}>
            <ProductEntry product={product} />
          </EmblaSlide>
        ))}
      </Carousel>
    </div>
  );
}
