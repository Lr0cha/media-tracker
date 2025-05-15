"use server";

import { createClient } from "@/utils/supabase/server";
import {
  DialogMediaFormData,
  dialogMediaFormSchema,
} from "../validators/dialog-media-validators";
import { revalidatePath } from "next/cache";

export async function addMedia(formData: DialogMediaFormData) {
  const supabase = await createClient();

  //find authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Error finding user");
  }

  // validate form data
  const parsedData = dialogMediaFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { error: parsedData.error.message };
  }

  const { data } = parsedData;

  const { error } = await supabase.from("medias").insert({
    ...data,
    user_id: user.id,
  });

  if (error) {
    throw new Error("Error adding media" + error.message);
  }

  revalidatePath("/medias");
}
