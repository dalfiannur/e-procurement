"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { createServerDatabase } from "~/utils/supabase/server";

export type CreateOrderInput = {
  title: string;
  category_id: string;
  description: string;
};

export const createOrderAction = async (values: CreateOrderInput) => {
  const supabase = await createServerDatabase();
  await supabase.from("orders").insert(values);
  revalidateTag("orders");
  revalidatePath("/orders");
};
