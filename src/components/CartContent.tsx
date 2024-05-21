import { getUserCart } from "@/lib/services/user.services";

export default async function CartTooltipContent() {
  const { data, ok } = await getUserCart();

  if (!ok) {
    return <div>Failed to retrieve cart information.</div>;
  }

  return (
    <div>
      <h2 className="text-xl mb-2 w-full border-b pb-1 text-center">
        Your Cart
      </h2>

      <div>
        <h3 className="mb-2">Products:</h3>

        <section className="flex flex-col gap-2">
          {data.cartItems.map((item) => (
            <div key={item.id} className="border rounded-md ">
              <p>
                {item.product.name} x {item.quantity}
              </p>
              <p>USD {item.product.name}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
