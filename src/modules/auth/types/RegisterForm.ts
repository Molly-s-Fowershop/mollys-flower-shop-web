import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(40),
  lastname: z.string().min(3).max(40),
  phone: z.string().min(10).max(10),
  password: z.string().min(8).max(100),
});

export type RegisterForm = z.infer<typeof RegisterSchema>;
