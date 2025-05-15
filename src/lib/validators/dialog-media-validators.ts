import { z } from "zod";

export const dialogMediaFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),

  cover_image: z.string().url(),

  type: z.enum(["anime", "manga"]),

  status: z.enum(["in progress", "planning", "completed", "paused"], {
    errorMap: () => ({ message: "Please select a status." }),
  }),

  progress: z
    .number({ invalid_type_error: "Progress must be a number." })
    .min(0, { message: "Progress must be at least 0." }),

  notes: z
    .string()
    .max(100, { message: "Notes must be 100 characters or fewer." })
    .optional()
    .or(z.literal("")),
});

export type DialogMediaFormData = z.infer<typeof dialogMediaFormSchema>;
