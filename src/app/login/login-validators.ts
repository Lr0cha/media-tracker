import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Must be at least 6 characters long" }),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
