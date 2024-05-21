import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { ListResponse } from "@/shared/types/ListResponse";
import { Product } from "@/modules/products/types/Product";

async function fetchLatestProducts() {
  const { data } = await mollysFloweShopApi.get<ListResponse<Product>>(
    "/products/latest"
  );

  return data;
}

export const useLatestProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: fetchLatestProducts,
  });

  return { response: data, isLoading, isError };
};
