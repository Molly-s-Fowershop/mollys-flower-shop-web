import { useParams } from "react-router";
import Container from "@/shared/components/base/Container";
import ProductEntry from "@/modules/products/components/ProductEntry";
import { useCategory } from "@/modules/categories/hooks/useCategory";

export default function CategoryProducts() {
  const { id } = useParams();
  const { category } = useCategory(id || "");

  if (!category) {
    return null;
  }

  const products = category.products || [];

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
