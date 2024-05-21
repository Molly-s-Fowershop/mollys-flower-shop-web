import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, LoginSchema } from "@/modules/auth/types/LoginForm";

const initialState = {
  email: "",
  password: "",
};

export function useLoginForm() {
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: initialState,
  });

  return {
    ...loginForm,
  };
}
