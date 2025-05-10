"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  LoginFormData,
  LoginFormSchema,
} from "@/lib/validators/login-validators";

export async function login(formData: LoginFormData) {
  const supabase = await createClient();

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
    redirect("/login?message=Could not authenticate user");
  }

  revalidatePath("/", "layout");
  redirect("/search");
}
