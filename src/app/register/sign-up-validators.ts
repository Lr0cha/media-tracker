import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email format" }),

    newPassword: z
      .string()
      .min(6, { message: "Must be at least 6 characters long" }),

    confirmPassword: z.string().min(6, {
      message: "Must be at least 6 characters long",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof SignUpFormSchema>;
