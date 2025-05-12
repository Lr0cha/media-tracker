"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectTypeMedia from "@/components/select-type-media";

interface SearchBarProps {
  initialSearch: string;
  mediaType: "ANIME" | "MANGA";
}

export default function SearchBar({
  initialSearch,
  mediaType: initialMediaType,
}: SearchBarProps) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);
  const [mediaType, setMediaType] = useState<"ANIME" | "MANGA">(
    initialMediaType
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(search.trim());
    router.push(`/search?q=${encoded}&type=${mediaType}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <SelectTypeMedia
        value={mediaType}
        onChange={(val) => setMediaType(val as "ANIME" | "MANGA")}
      />

      <Input
        placeholder="Search for..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button type="submit" className="bg-secondary cursor-pointer">
        Buscar
      </Button>
    </form>
  );
}
