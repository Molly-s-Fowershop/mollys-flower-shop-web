import Image from "next/image";
import { Product } from "@/types/Product";
import { CartPlus, Heart } from "iconoir-react";

type ProductEntryProps = {
  product: Product;
};

export default function ProductEntry({ product }: ProductEntryProps) {
  return (
    <div>
      <div className="w-full relative aspect-[1.5/2]">
        <Image
          src="https://placehold.co/150x200/png"
          alt="Placeholder image"
          fill
          quality={100}
          className="object-contain"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
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
                  <CartPlus width={24} height={24} />
                </button>
              </li>
              <li>
                <button>
                  <Heart width={24} height={24} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
