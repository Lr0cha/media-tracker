"use server";
import { revalidatePath } from "next/cache";
import {
  SignUpFormData,
  SignUpFormSchema,
} from "@/lib/validators/sign-up-validators";
import { getSupabaseUser } from "@/utils/supabase/auth/getSupabaseUser";
import { ActionMediaResult } from "@/types";

export async function signup(
  formData: SignUpFormData
): Promise<ActionMediaResult> {
  const { supabase } = await getSupabaseUser();

  const parsedData = SignUpFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      success: false,
      message:
        "Invalid input: " +
        parsedData.error.errors.map((e) => e.message).join(", "),
    };
  }

  const { data } = parsedData;

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.newPassword,
  });

  if (error) {
    return {
      success: false,
      message: "Failed to sign up. Please try again...",
    };
  }

  revalidatePath("/", "layout");

  return {
    success: true,
    message: "Check your inbox to confirm your email.",
  };
}
