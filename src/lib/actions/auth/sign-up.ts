"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  SignUpFormData,
  SignUpFormSchema,
} from "@/lib/validators/sign-up-validators";
import { getSupabaseUser } from "@/utils/supabase/auth/getSupabaseUser";

export async function signup(formData: SignUpFormData) {
  const { supabase } = await getSupabaseUser();

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
    return { error: "Error signing up." };
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
