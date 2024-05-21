import Container from "@/shared/components/base/Container";
import CartSummary from "@/modules/cart/components/CartSummary";
import CheckoutProvider from "@/modules/checkout/components/CheckoutProvider";

export default function Checkout() {
  return (
    <Container className="my-6 mt-10 flex flex-col gap-4 max-w-7xl">
      <h1 className="text-2xl font-medium">Finalize purchaze</h1>
      <hr className="border-gray-800" />

      <CartSummary showCheckoutButton={false} className="p-0 border-none" />
      <hr className="border-gray-600" />

      <CheckoutProvider amount={1099} />
    </Container>
  );
}
