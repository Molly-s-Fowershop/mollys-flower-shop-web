import { useQuery } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { ListResponse } from "@/shared/types/ListResponse";
import { Category } from "@/modules/categories/types/Category";

async function fetchCategories() {
  const { data } = await mollysFloweShopApi.get<ListResponse<Category>>(
    "/categories"
  );

  return data;
}

export function useCategories() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return { response: data, isError, isLoading };
}
