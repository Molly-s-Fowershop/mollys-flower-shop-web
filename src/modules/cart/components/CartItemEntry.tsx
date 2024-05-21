import { CartItem } from "@/modules/cart/types/Cart";
import QuantitySelector from "@/shared/components/QuantitySelector";
import { useCartMutation } from "@/modules/cart/hooks/useCartMutation";
import { toast } from "sonner";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";

type CartItemEntryProps = {
  item: CartItem;
};

export default function CartItemEntry({ item }: CartItemEntryProps) {
  const { productDetails, profileImage, ...product } = item.product;
  const { removeProductAsync } = useCartMutation();

  async function handleRemove() {
    try {
      await removeProductAsync(item.id);

      toast.success("Product removed successfully");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  }

  return (
    <div className="flex gap-4 p-4 border-2 border-gray-800 relative">
      <img
        className="border border-gray-500"
        src={profileImage.url}
        alt={product.name}
        width={80}
        height={50}
      />
      <div className="flex flex-col gap-2 justify-around">
        <h3 className="font-medium">{product.name}</h3>
        <p>Price: ${productDetails?.price}</p>

        <div className="flex items-center gap-2">
          Quantity:
          <QuantitySelector initialQuantity={item.quantity} />
        </div>
      </div>
      <button className="absolute right-4 top-4" onClick={handleRemove}>
        <span className="material-symbols-outlined text-[18px] px-1 py-1 border-2 border-gray-800 rounded-md">
          close
        </span>
      </button>
    </div>
  );
}
