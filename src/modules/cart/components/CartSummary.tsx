import { cn } from "@/shared/utils/cn";
import { useCartSummary } from "@/modules/cart/hooks/useCartSummary";
import DetailItem from "@/shared/components/base/DetailItem";
import Button from "@/shared/components/base/Button";
import { useNavigate } from "react-router";

type CardSummaryProps = {
  className?: string;
  showCheckoutButton?: boolean;
};

export default function CartSummary({
  showCheckoutButton = true,
  className,
}: CardSummaryProps) {
  const navigate = useNavigate();
  const { cartSummary, isLoading } = useCartSummary();

  if (!cartSummary) {
    return null;
  }

  const handleContinueToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-7 border-2 border-gray-800 h-fit",
        className
      )}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-2xl">Summary</h2>

          <div className="flex flex-col gap-2">
            <DetailItem label="Subtotal" value={`$${cartSummary.subtotal}`} />
            <DetailItem label="Service" value={`$${cartSummary.serviceFee}`} />
            <DetailItem label="Tax" value={`$${cartSummary.tax}`} />
            <DetailItem
              label="Total"
              value={`$${cartSummary.total}`}
              labelClassName="font-medium text-lg"
              valueClassName="font-medium text-lg"
            />
          </div>

          {showCheckoutButton && (
            <>
              <hr />

              <Button
                className="w-full inline-flex gap-2 items-center justify-center"
                onClick={handleContinueToCheckout}
              >
                <span className="material-symbols-outlined">
                  shopping_basket
                </span>
                Continue to Checkout
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
