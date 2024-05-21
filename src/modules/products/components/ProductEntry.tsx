import { Product } from "@/modules/products/types/Product";
import { Link } from "react-router-dom";

type ProductEntryProps = {
  product: Product;
};

export default function ProductEntry({ product }: ProductEntryProps) {
  return (
    <div className="flex flex-col">
      <Link to={`/products/${product.id}`}>
        <figure className="w-full max-w-full relative aspect-[1.5/2]">
          <img
            src={product.profileImage.url}
            alt="Placeholder image"
            className="object-cover w-full h-full"
          />
        </figure>
      </Link>

      <div className="flex flex-col gap-2 p-2">
        <Link to={`/products/${product.id}`}>
          <h2 className="truncate">{product.name}</h2>
        </Link>

        <hr className="border-gray-500" />

        <div className="flex items-center justify-between gap-4">
          <p>${product.productDetails?.price}</p>

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
