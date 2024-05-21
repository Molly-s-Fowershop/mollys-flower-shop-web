import Button from "@/shared/components/base/Button";
import { useCartMutation } from "@/modules/cart/hooks/useCartMutation";
import { toast } from "sonner";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";

type AddProductToCartButtonProps = {
  productId: string | number;
  quantity: number;
};

export default function AddProductToCartButton({
  productId,
  quantity,
}: AddProductToCartButtonProps) {
  const { addProductAsync } = useCartMutation();

  const handleAddToCart = async () => {
    try {
      await addProductAsync({
        productId,
        quantity,
      });

      toast.success("Product added to cart!");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  };

  return (
    <Button
      className="w-full hover:bg-gray-200 text-lg"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
}
