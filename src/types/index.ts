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
