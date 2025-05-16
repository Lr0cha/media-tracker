import { createClient } from "../server";

export async function getSupabaseUser() {
  const supabase = await createClient();

  //find authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { supabase, user };
}
