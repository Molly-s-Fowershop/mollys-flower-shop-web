import { useEffect, useState } from "react";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { AuthResponse } from "@/modules/auth/types/AuthResponse";
import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";
import { login, logout } from "@/modules/auth/slices/auth.slice";

async function validateAuth() {
  const { data } = await mollysFloweShopApi.get<AuthResponse>(
    "/auth/validate-token"
  );
  return data;
}

export const useValidateAuth = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<AuthResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await validateAuth();
        dispatch({ type: "auth/validate", payload: data });
        setData(data);
        dispatch(login({ user: data.name, token: data.accessToken }));
      } catch (err) {
        const errorMessage = getErrorMessage(err);
        setError(errorMessage);
        dispatch(logout());
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  return { response: data, isLoading, error };
};
