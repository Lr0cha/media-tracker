"use server";

import {
  DialogMediaFormData,
  dialogMediaFormSchema,
} from "../validators/dialog-media-validators";
import { revalidatePath } from "next/cache";
import { ActionMediaResult } from "@/types";
import { getSupabaseUser } from "@/utils/supabase/auth/getSupabaseUser";

async function validateSupabaseUser() {
  const { supabase, user } = await getSupabaseUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  return { supabase, user };
}

export async function addMedia(
  formData: DialogMediaFormData
): Promise<ActionMediaResult> {
  try {
    const { supabase, user } = await validateSupabaseUser();

    //validate fields
    const parsedData = dialogMediaFormSchema.safeParse(formData);
    if (!parsedData.success) {
      return {
        success: false,
        message:
          "Invalid data: " +
          parsedData.error.errors.map((e) => e.message).join(", "),
      };
    }

    const { data } = parsedData;

    const { error } = await supabase.from("medias").insert({
      ...data,
      user_id: user.id,
    });

    if (error) {
      return {
        success: false,
        message: "Error adding media",
      };
    }

    revalidatePath("/lists");

    return {
      success: true,
      message: "Media added successfully!",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Unexpected error: " + err.message,
    };
  }
}

export async function editMedia(
  id: number,
  formData: DialogMediaFormData
): Promise<ActionMediaResult> {
  try {
    const { supabase, user } = await validateSupabaseUser();

    const parsedData = dialogMediaFormSchema.safeParse(formData);
    if (!parsedData.success) {
      return {
        success: false,
        message:
          "Invalid data: " +
          parsedData.error.errors.map((e) => e.message).join(", "),
      };
    }

    const { data } = parsedData;

    const { error } = await supabase.from("medias").update(data).match({
      user_id: user.id,
      id: id,
    });

    if (error) {
      return {
        success: false,
        message: "Failed to update media: " + error.message,
      };
    }

    revalidatePath("/lists");

    return {
      success: true,
      message: "Media updated successfully.",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Unexpected error: " + err.message,
    };
  }
}

export async function deleteMedia(id: number): Promise<ActionMediaResult> {
  try {
    const { supabase, user } = await validateSupabaseUser();

    const { error } = await supabase.from("medias").delete().match({
      user_id: user.id,
      id: id,
    });

    if (error) {
      return {
        success: false,
        message: "Failed to delete media: " + error.message,
      };
    }

    revalidatePath("/lists");

    return {
      success: true,
      message: "Media deleted successfully.",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Unexpected error: " + err.message,
    };
  }
}
