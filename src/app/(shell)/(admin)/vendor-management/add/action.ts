"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "~/utils/supabase/server";

export const createVendor = async (form: FormData) => {
  const { data, error } = z
    .object({
      name: z.string(),
      address: z.string(),
    })
    .safeParse(Object.fromEntries(form.entries()));

  if (error) {
    throw new Error(error.message);
  }

  const s = await createClient();

  await s.from("vendors").insert(data);
  
  redirect("/vendor-management");
};
