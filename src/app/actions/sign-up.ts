"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  SignUpFormData,
  SignUpFormSchema,
} from "../register/sign-up-validators";

export async function signup(formData: SignUpFormData) {
  const supabase = await createClient();

  const parsedData = SignUpFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { error: parsedData.error.message };
  }

  const { data } = parsedData;

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.newPassword,
  });
  if (error) {
    redirect("/register?message=Error signing up");
  }
  revalidatePath("/", "layout");
  redirect("/login");
}
