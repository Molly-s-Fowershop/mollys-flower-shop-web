import { ListResponse } from "@/types/ListResponse";
import { Product } from "@/types/Product";
import ProductsSlider from "./ProductsSlider";

async function fetchPopular() {
  const response = await fetch("http://localhost:3000/api/products/popular");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<ListResponse<Product>>;
}

export default async function PopularProductsSlider() {
  const { data } = await fetchPopular();

  return (
    <div>
      <ProductsSlider title="Popular Products" products={data} />
    </div>
  );
}
