import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  RegisterForm,
} from "@/modules/auth/types/RegisterForm";

const initialState = {
  email: "",
  password: "",
};

export const useRegisterForm = () => {
  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: initialState,
  });

  return {
    ...registerForm,
  };
};
