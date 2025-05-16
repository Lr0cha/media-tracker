"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseUser } from "@/utils/supabase/auth/getSupabaseUser";

export async function signOut() {
  const { supabase } = await getSupabaseUser();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: "Logout error. Try again..." };
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
