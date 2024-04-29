import { Product } from "@/types";
import { HTMLAttributes } from "react";
import Button from "../common/Button";
import { cn } from "@/utils/cn";
import Link from "next/link";

type ProductInformationProps = HTMLAttributes<HTMLDivElement> & {
  product: Product;
};

export default function ProductInformation({
  product,
  ...rest
}: ProductInformationProps) {
  return (
    <div {...rest} className={cn("flex flex-col gap-6", rest.className)}>
      <section className="flex flex-col gap-4 ">
        <h2 className="text-3xl font-medium">{product.name}</h2>
        <Link
          className="text-sm"
          href={`/categories/${product.category.id}/products`}
        >
          <span className="text-gray-500 hover:underline">
            Category: {product.category.name}
          </span>
        </Link>
        <p className="text-xl font-light text-justify">{product.description}</p>
        <p className="text-2xl font-medium">
          USD {product.productDetails?.price}
        </p>
        <p>We have {product.productDetails?.stock} remaining!</p>
      </section>

      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-medium">
          <p>Subtotal:</p>

          <p>USD {product.productDetails?.price}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-full border-gray-500 bg-gray-700 hover:bg-gray-900 text-white text-lg">
            Add to wishlist
          </Button>
          <Button className="w-full hover:bg-gray-200 text-lg">
            Add to cart
          </Button>
        </div>
      </section>
    </div>
  );
}
