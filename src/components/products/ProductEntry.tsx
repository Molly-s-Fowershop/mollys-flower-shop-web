import Image from "next/image";
import { Product } from "@/types/Product";

type ProductEntryProps = {
  product: Product;
};

export default function ProductEntry({ product }: ProductEntryProps) {
  return (
    <div>
      <div className="w-full max-w-full relative aspect-[1.5/2]">
        <Image
          src="https://placehold.co/150x200/png"
          alt="Placeholder image"
          className="object-contain"
          quality={100}
          fill
          sizes="(max-width: 300px) 300px, (max-width: 1200px) 350px"
        />
      </div>

      <div className="flex flex-col gap-2 p-2">
        <h2>{product.name}</h2>

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
