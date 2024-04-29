import Container from "@/components/Container";
import LatestProductsSlider from "@/components/products/LatestProductsSlider";
import ProductInformation from "@/components/products/ProductInformation";
import ProductMedias from "@/components/products/ProductMedias";
import { Product } from "@/types";

async function fetchProductDetails(id: string): Promise<Product> {
  return fetch(`http://localhost:3000/api/products/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }

    return response.json();
  });
}

type CategoryPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailsPage({
  params,
}: CategoryPageProps) {
  const product = await fetchProductDetails(params.id);

  return (
    <Container className="my-6 flex flex-col gap-6">
      <div className="flex gap-10">
        {product.medias && (
          <ProductMedias className="flex-[2]" medias={product.medias} />
        )}

        <div className="border-r"></div>

        <ProductInformation className="py-10 flex-1" product={product} />
      </div>

      <hr />

      <LatestProductsSlider title="Related products" />
    </Container>
  );
}
