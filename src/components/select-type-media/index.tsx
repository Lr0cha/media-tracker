"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  defaultValue?: "ANIME" | "MANGA";
}

export default function SelectTypeClient({ defaultValue = "ANIME" }: Props) {
  return (
    <Select name="mediaType" defaultValue={defaultValue}>
      <SelectTrigger className="w-[100px] z-30">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ANIME">Anime</SelectItem>
        <SelectItem value="MANGA">Manga</SelectItem>
      </SelectContent>
    </Select>
  );
}
