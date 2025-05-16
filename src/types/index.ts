import { createClient } from "@/utils/supabase/server";
import { Database } from "./supabase";

//anilist API
export interface ApiProps {
  id: number;
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
}

export type Media = Database["public"]["Tables"]["medias"]["Row"];

export type ActionMediaResult<T = undefined> =
  | { success: true; data?: T; message: string }
  | { success: false; error?: string; message: string };
