"use server";

import { createClient } from "~/utils/supabase/server";

export const handleSubmit = async (values: any) => {
  const supabase = await createClient()
  const { data } = await supabase.auth.signInWithPassword(values);
  return data
};
