"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { createServerDatabase } from "~/utils/supabase/server";

export type CreateCategoryInput = {
  name: string;
};

export const createCategoryAction = async (values: CreateCategoryInput) => {
  const supabase = await createServerDatabase();
  await supabase.from("categories").insert(values);
  revalidateTag("categories");
  revalidatePath("/categories");
};
