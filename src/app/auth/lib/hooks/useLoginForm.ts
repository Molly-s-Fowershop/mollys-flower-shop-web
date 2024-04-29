import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const initialState = {
  email: "",
  password: "",
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialState,
  });

  return {
    ...loginForm,
  };
};
