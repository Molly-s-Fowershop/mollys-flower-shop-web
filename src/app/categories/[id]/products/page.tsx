import Container from "@/components/Container";
import ProductEntry from "@/components/products/ProductEntry";
import { Category, ListResponse, Product } from "@/types";

type CategoryPageParams = {
  id: string;
};

type CategoryPageProps = {
  params: CategoryPageParams;
};

async function fetchCategoryProducts(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/categories/${id}/products`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json() as Promise<ListResponse<Product>>;
}

async function fetchCategory(id: string) {
  const response = await fetch(`http://localhost:3000/api/categories/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  return response.json() as Promise<Category>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;
  const { data: products } = await fetchCategoryProducts(id);
  const category = await fetchCategory(id);

  return (
    <Container className="flex flex-col gap-4 my-4">
      <h1 className="text-2xl font-medium">
        Products of category &quot;{category.name}&quot;
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductEntry key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
