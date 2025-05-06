// validate mediaType param url
export function sanitizeMediaType(
  value: string | undefined
): "ANIME" | "MANGA" {
  const allowedTypes = ["ANIME", "MANGA"] as const;

  if (value && allowedTypes.includes(value as any)) {
    return value as "ANIME" | "MANGA";
  }

  return "ANIME"; // fallback
}
