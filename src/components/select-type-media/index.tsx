"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SelectTypeMedia({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[120px] 2xl:w-[140px] h-10 2xl:h-12 text-sm xl:text-base z-30">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ANIME">Anime</SelectItem>
        <SelectItem value="MANGA">Manga</SelectItem>
      </SelectContent>
    </Select>
  );
}
