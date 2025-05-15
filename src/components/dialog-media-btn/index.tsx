"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  dialogMediaFormSchema,
  DialogMediaFormData,
} from "@/lib/validators/dialog-media-validators";
import {
  addMedia,
  editMedia,
  deleteMedia,
} from "@/lib/actions/dialog-media-action";
import { useState } from "react";

interface DialogMediaButtonProps {
  formData?: Partial<DialogMediaFormData> & { id?: number };
  isEdit?: boolean;
  onClose?: () => void;
}

const DialogMediaButton = ({
  formData,
  isEdit = false,
  onClose,
}: DialogMediaButtonProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<DialogMediaFormData>({
    resolver: zodResolver(dialogMediaFormSchema),
    defaultValues: {
      title: formData?.title ?? "",
      cover_image: formData?.cover_image ?? "",
      type: formData?.type ?? "anime",
      status: formData?.status ?? "in progress",
      progress: formData?.progress ?? 0,
      notes: formData?.notes ?? "",
    },
  });

  const onSubmit = async (data: DialogMediaFormData) => {
    if (isEdit && formData?.id) {
      await editMedia(formData.id, data);
    } else {
      await addMedia(data);
    }

    form.reset(); //clean form fields
    setOpen(false);
    onClose?.();
  };

  const onDelete = async () => {
    if (formData?.id) {
      await deleteMedia(formData.id);
      form.reset();
      setOpen(false);
      onClose?.();
    }
  };

  return (
    <div className="absolute right-4 top-4">
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            onClose?.();
          }
        }}
      >
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="rounded-full cursor-pointer px-3 py-2 bg-secondary hover:scale-105 hover:bg-secondary-foreground duration-200"
          >
            <span className="text-xl text-white font-medium">+</span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              {isEdit ? "Update/Delete Media" : "New Media"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title*</Label>
              <Input id="title" {...form.register("title")} />
              {form.formState.errors.title && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.title.message}
                </p>
              )}

              <div className="flex justify-between gap-4">
                <div className="flex flex-col flex-1 gap-2">
                  <Label htmlFor="type">Type*</Label>
                  <Select disabled>
                    <SelectTrigger id="type">
                      <SelectValue placeholder={formData?.type} />
                    </SelectTrigger>
                  </Select>
                </div>

                <div className="flex flex-col flex-1 gap-2">
                  <Label htmlFor="status">Status*</Label>
                  <Select
                    value={form.watch("status")} //current value of the field in the form
                    onValueChange={(value) =>
                      form.setValue(
                        "status",
                        value as DialogMediaFormData["status"]
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in progress">In Progress</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.status && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.status.message}
                    </p>
                  )}
                </div>
              </div>

              <Label htmlFor="progress">Chapter/Episode*</Label>
              <Input
                type="number"
                id="progress"
                {...form.register("progress", { valueAsNumber: true })}
              />
              {form.formState.errors.progress && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.progress.message}
                </p>
              )}

              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" {...form.register("notes")} />
              {form.formState.errors.notes && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.notes.message}
                </p>
              )}
            </div>

            <DialogFooter>
              {isEdit && (
                <Button
                  onClick={onDelete}
                  className="bg-secondary cursor-pointer"
                >
                  Delete
                </Button>
              )}
              <Button
                type="submit"
                className="bg-neutral-700 cursor-pointer text-amber-50 hover:bg-neutral-600/90"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogMediaButton;
