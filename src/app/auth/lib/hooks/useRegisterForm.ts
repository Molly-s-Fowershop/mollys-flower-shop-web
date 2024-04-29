import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const initialState = {
  email: "",
  password: "",
};

const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(40),
  lastname: z.string().min(3).max(40),
  phone: z.string().min(10).max(10),
  password: z.string().min(8).max(100),
});

export type RegisterForm = z.infer<typeof registerSchema>;

export const useRegisterForm = () => {
  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialState,
  });

  return {
    ...registerForm,
  };
};
