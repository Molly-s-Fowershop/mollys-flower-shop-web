import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { Cart } from "@/modules/cart/types/Cart";

async function fetchCart() {
  const { data } = await mollysFloweShopApi.get<Cart>("/cart");

  return data;
}

export function useCart() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  return { cart: data, isError, isLoading };
}
