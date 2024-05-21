import { useMutation } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { queryClient } from "@/plugins/QueryClient";

type AddProductToCart = {
  productId: string | number;
  quantity: number;
};

async function addProductToCart(payload: AddProductToCart) {
  const { data } = await mollysFloweShopApi.post("/cart/cart-items", payload);

  return data;
}

async function removeProductFromCart(itemId: string | number) {
  const { data } = await mollysFloweShopApi.delete(
    `/cart/cart-items/${itemId}`
  );

  return data;
}

export const useCartMutation = () => {
  const addProductMutation = useMutation({
    mutationFn: addProductToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });

      queryClient.invalidateQueries({
        queryKey: ["cartSummary"],
      });
    },
  });

  const removeProductMutation = useMutation({
    mutationFn: removeProductFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });

      queryClient.invalidateQueries({
        queryKey: ["cartSummary"],
      });
    },
  });

  return {
    addProductMutation,
    addProduct: addProductMutation.mutate,
    addProductAsync: addProductMutation.mutateAsync,

    removeProductMutation,
    removeProduct: removeProductMutation.mutate,
    removeProductAsync: removeProductMutation.mutateAsync,
  };
};
