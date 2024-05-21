import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { Product } from "@/modules/products/types/Product";

async function fetchProduct(id: string) {
  const { data } = await mollysFloweShopApi.get<Product>(`/products/${id}`);
  return data;
}

export const useProduct = (id: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    retry: 0,
  });

  return { product: data, isError, isLoading };
};
