import * as z from "zod"

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirm_password: z.string().min(8)
});