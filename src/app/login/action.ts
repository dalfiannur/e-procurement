"use server";

import { createServerDatabase } from "~/utils/supabase/server";

export const handleSubmit = async (values: any) => {
  const supabase = await createServerDatabase();
  const { data } = await supabase.auth.signInWithPassword(values);
  return data;
};
