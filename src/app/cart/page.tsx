import CartItemList from "@/components/cart/CartItemList";
import Container from "@/components/Container";

export default function CartPage() {
  return (
    <Container className="my-6 px-4">
      <h1 className="text-xl font-medium mb-4 ">Your cart</h1>

      <section className="">
        <CartItemList />

        <div></div>
      </section>
    </Container>
  );
}
