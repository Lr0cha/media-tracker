import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SelectType = () => {
  return (
    <div>
      <Select required>
        <SelectTrigger id="type">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="anime">Anime</SelectItem>
          <SelectItem value="manga">Manga</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectType;
