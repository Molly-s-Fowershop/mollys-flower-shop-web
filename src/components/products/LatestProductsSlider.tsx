import { ListResponse } from "@/types/ListResponse";
import { Product } from "@/types/Product";
import ProductEntry from "./ProductEntry";
import CarouselWrapper from "../CarouselWrapper";

async function fetchLatestProducts() {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<ListResponse<Product>>;
}

export default async function LatestProductsList() {
  const { data } = await fetchLatestProducts();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Latest Products</h1>

      <CarouselWrapper>
        {data.map((product) => (
          <div key={product.id} className="embla_slide">
            <ProductEntry product={product} />
          </div>
        ))}
      </CarouselWrapper>
    </div>
  );
}
