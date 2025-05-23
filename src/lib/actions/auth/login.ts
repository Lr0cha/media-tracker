"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  LoginFormData,
  LoginFormSchema,
} from "@/lib/validators/login-validators";
import { getSupabaseUser } from "@/utils/supabase/auth/getSupabaseUser";

export async function login(formData: LoginFormData) {
  const { supabase } = await getSupabaseUser();

  const parsedData = LoginFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { error: parsedData.error.message };
  }

  const { data } = parsedData;

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return { error: "Could not authenticate user." };
  }

  revalidatePath("/", "layout");
  redirect("/search");
}
