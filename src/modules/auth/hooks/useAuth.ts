import { useMutation } from "@tanstack/react-query";
import { mollysFloweShopApi } from "@/api/mollysFloweShopApi";
import { AuthResponse } from "@/modules/auth/types/AuthResponse";
import { useAppDispatch } from "@/shared/hooks/storeHooks";
import {
  login as loginAction,
  logout as logoutAction,
} from "@/modules/auth/slices/auth.slice";
import { AppDispatch } from "@/plugins/store";
import type { LoginForm } from "@/modules/auth/types/LoginForm";
import type { RegisterForm } from "@/modules/auth/types/RegisterForm";

async function login(payload: LoginForm) {
  return mollysFloweShopApi.post<AuthResponse>("/auth/login", payload);
}

async function register(payload: RegisterForm) {
  return mollysFloweShopApi.post<AuthResponse>("/auth/register", payload);
}

export function onAuthSuccess(data: AuthResponse, dispatch: AppDispatch) {
  dispatch(loginAction({ user: data.name, token: data.accessToken }));
}

export function onAuthRejected(dispatch: ReturnType<typeof useAppDispatch>) {
  dispatch(logoutAction());
}

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => onAuthSuccess(response.data, dispatch),
    onError: () => onAuthRejected(dispatch),
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => onAuthSuccess(response.data, dispatch),
    onError: () => onAuthRejected(dispatch),
  });

  return {
    loginMutation,
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,

    registerMutation,
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
  };
};
