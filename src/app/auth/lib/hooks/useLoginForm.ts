import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const initialState = {
  email: "",
  password: "",
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export type LoginForm = z.infer<typeof LoginSchema>;

export const useLoginForm = () => {
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: initialState,
  });

  return {
    ...loginForm,
  };
};
