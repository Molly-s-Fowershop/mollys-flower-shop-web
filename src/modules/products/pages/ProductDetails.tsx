import Container from "@/shared/components/base/Container";
import LatestProductsSlider from "@/modules/products/components/sliders/LatestProductsSlider";
import ProductInformation from "@/modules/products/components/ProductInformation";
import ProductMedias from "@/modules/products/components/ProductMedias";
import { useProduct } from "@/modules/products/hooks/useProduct";
import { Navigate, useParams } from "react-router";
import { toast } from "sonner";

export default function ProductDetails() {
  const { id } = useParams();

  const { product, isLoading, isError } = useProduct(id || "");

  if (isLoading) {
    return (
      <Container className="my-6">Loading product information...</Container>
    );
  }

  if (!product) {
    if (isError) toast.error("Product not found!");

    return <Navigate to="/" />;
  }

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
