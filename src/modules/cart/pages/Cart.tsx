import { Link } from "react-router-dom";
import Container from "@/shared/components/base/Container";
import CartItemList from "@/modules/cart/components/CartItemList";
import CartSummary from "@/modules/cart/components/CartSummary";
import LatestProductsSlider from "@/modules/products/components/sliders/LatestProductsSlider";
import { useCart } from "@/modules/cart/hooks/useCart";

export default function Cart() {
  const { cart } = useCart();

  return (
    <Container className="flex flex-col gap-8 my-6 px-4">
      {cart && cart.cartItems?.length > 0 ? (
        <>
          <section>
            <h1 className="text-2xl font-medium mb-4">Your cart</h1>

            <div className="flex flex-col-reverse gap-8 lg:flex-row">
              <CartItemList cart={cart} className="flex-1" />

              <CartSummary className="flex-1 lg:max-w-md" />
            </div>
          </section>

          <hr />

          <LatestProductsSlider title="Related products" />
        </>
      ) : (
        <div className="flex flex-col gap-4 border-2 border-gray-800 p-6 max-w-md w-full items-center mx-auto mt-12 text-center">
          <span className="material-symbols-outlined text-[44px]">
            shopping_basket
          </span>

          <h1 className="text-2xl font-medium">
            Your cart is currently empty!
          </h1>

          <p className="max-w-sm mx-auto">
            We recomend you to visit the home page to see our latest products.
          </p>

          <Link
            to="/"
            className="border-2 border-gray-800 w-fit mx-auto px-2 py-1"
          >
            Go to Home
          </Link>
        </div>
      )}
    </Container>
  );
}
