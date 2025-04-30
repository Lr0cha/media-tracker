import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import SelectType from "../selectTypeMedia";

const AddMediaButton = () => {
  return (
    <div className="absolute right-4 top-4 border-pink-300">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full cursor-pointer px-3 py-2 bg-secondary hover:scale-105 hover:bg-secondary-foreground duration-200">
            <span className="text-xl text-white font-medium ">+</span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle className="text-center">New Media</DialogTitle>

          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Title*</Label>
              <Input id="name" required />

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <Label htmlFor="type">Type*</Label>
                  <SelectType />
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="status">Status*</Label>
                  <Select required>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Label htmlFor="progress">Chapter/Episode</Label>
              <Input id="progress" type="number" min={0} defaultValue={0} />
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className="bg-secondary">
                  Salvar
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMediaButton;
