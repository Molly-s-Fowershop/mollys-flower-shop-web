import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { ListResponse } from "@/shared/types/ListResponse";
import { Product } from "@/modules/products/types/Product";

async function fetchPopularProducts() {
  const { data } = await mollysFloweShopApi.get<ListResponse<Product>>(
    "/products/latest"
  );

  return data;
}

export const usePopularProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: fetchPopularProducts,
  });

  return { response: data, isLoading, isError };
};
