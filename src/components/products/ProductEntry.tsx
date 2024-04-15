import Image from "next/image";
import { Product } from "@/types/Product";
import Link from "next/link";

type ProductEntryProps = {
  product: Product;
};

export default function ProductEntry({ product }: ProductEntryProps) {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <figure className="w-full max-w-full relative aspect-[1.5/2]">
          <Image
            src={product.profileImage.url}
            alt="Placeholder image"
            className="object-cover"
            quality={100}
            fill
            sizes="(max-width: 300px) 300px, (max-width: 1200px) 350px"
          />
        </figure>
      </Link>

      <div className="flex flex-col gap-2 p-2">
        <Link href={`/products/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>

        <hr className="border-gray-500" />

        <div className="flex items-center justify-between gap-4">
          <p>${product.productDetails.price}</p>

          <nav>
            <ul className="flex gap-4">
              <li>
                <button>
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button>
              </li>
              <li>
                <button>
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
