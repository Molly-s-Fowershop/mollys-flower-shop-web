import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { Category } from "@/modules/categories/types/Category";

async function fetchCategory(id: string) {
  const { data } = await mollysFloweShopApi.get<Category>(`/categories/${id}`);

  return data;
}

export function useCategory(id: string) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories", id],
    queryFn: () => fetchCategory(id),
  });

  return { category: data, isError, isLoading };
}
