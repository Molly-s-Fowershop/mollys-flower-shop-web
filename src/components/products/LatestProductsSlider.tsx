import { ListResponse } from "@/types/ListResponse";
import { Product } from "@/types/Product";
import ProductsSlider from "./ProductsSlider";

async function fetchLatestProducts() {
  const response = await fetch("http://localhost:3000/api/products/latest");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<ListResponse<Product>>;
}

export default async function LatestProductsSlider() {
  const { data } = await fetchLatestProducts();

  return (
    <div>
      <ProductsSlider title="Latest Products" products={data} />
    </div>
  );
}
