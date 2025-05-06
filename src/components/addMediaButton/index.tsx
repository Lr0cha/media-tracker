"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface AddMediaButtonProps {
  mediaTitle: string;
  mediaType: "ANIME" | "MANGA";
}

const AddMediaButton = ({ mediaTitle, mediaType }: AddMediaButtonProps) => {
  const [title, setTitle] = useState(mediaTitle);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [notes, setNotes] = useState("");

  // State de erros para validação
  const [errors, setErrors] = useState({
    title: "",
    status: "",
    progress: "",
  });

  const validateForm = () => {
    const newErrors = { title: "", status: "", progress: "" };

    if (!title) newErrors.title = "Title is required.";
    if (!status) newErrors.status = "Status is required.";
    if (progress < 0) newErrors.progress = "Progress cannot be negative.";

    setErrors(newErrors);

    // Todos os campos estão válidos?
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted successfully!");
  };

  return (
    <div className="absolute right-4 top-4 border-pink-300">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full cursor-pointer px-3 py-2 bg-secondary hover:scale-105 hover:bg-secondary-foreground duration-200">
            <span className="text-xl text-white font-medium">+</span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">New Media</DialogTitle>
            <DialogDescription>{undefined}</DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSave}>
            <div className="grid gap-2">
              <Label htmlFor="name">Title*</Label>
              <Input
                type="text"
                id="name"
                defaultValue={mediaTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && (
                <span className="text-red-500 text-sm">{errors.title}</span>
              )}

              <div className="flex justify-between gap-4">
                <div className="flex flex-col flex-1">
                  <Label htmlFor="type">Type*</Label>
                  <Select disabled>
                    <SelectTrigger id="type">
                      <SelectValue placeholder={mediaType} />
                    </SelectTrigger>
                  </Select>
                </div>

                <div className="flex flex-col flex-1">
                  <Label htmlFor="status">Status*</Label>
                  <Select
                    value={status}
                    onValueChange={(val) => setStatus(val)}
                    required
                  >
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
                  {errors.status && (
                    <span className="text-red-500 text-sm">
                      {errors.status}
                    </span>
                  )}
                </div>
              </div>

              <Label htmlFor="progress">Chapter/Episode*</Label>
              <Input
                id="progress"
                type="number"
                min={0}
                defaultValue={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
              />
              {errors.progress && (
                <span className="text-red-500 text-sm">{errors.progress}</span>
              )}

              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-neutral-500 cursor-pointer hover:bg-neutral-600/90">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-secondary cursor-pointer">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMediaButton;
