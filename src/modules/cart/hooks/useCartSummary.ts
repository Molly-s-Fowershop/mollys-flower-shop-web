import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { CartSummary } from "@/modules/cart/types/CartSummary";

async function fetchCartSummary() {
  const { data } = await mollysFloweShopApi.get<CartSummary>("/cart/summary");

  return data;
}

export const useCartSummary = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cartSummary"],
    queryFn: fetchCartSummary,
  });

  return { cartSummary: data, isError, isLoading };
};
