"use server";

import { ApiProps } from "@/types/api";

export async function searchMedia(
  search: string,
  mediaType: "ANIME" | "MANGA"
): Promise<ApiProps[]> {
  const query = `
    query ($search: String, $type: MediaType) {
      Page(perPage: 12) {
        media(search: $search, type: $type, isAdult: false) {
          id
          title {
            english
          }
          coverImage {
            large
          }
        }
      }
    }
  `;

  const BASE_URL = "https://graphql.anilist.co";

  const variables = { search, type: mediaType };

  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();
    return json.data?.Page?.media || [];
  } catch (err) {
    console.error("Erro na busca:", err);
    return [];
  }
}
