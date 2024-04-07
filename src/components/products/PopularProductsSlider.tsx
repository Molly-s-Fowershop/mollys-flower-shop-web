import { ListResponse } from "@/types/ListResponse";
import { Product } from "@/types/Product";
import { Carousel, EmblaSlide } from "@/components/embla";
import ProductEntry from "@/components/products/ProductEntry";

async function fetchPopular() {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<ListResponse<Product>>;
}

export default async function PopularProductsSlider() {
  const { data } = await fetchPopular();

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
