"use server";

import { redirect } from "next/navigation";
import { createServerDatabase } from "~/utils/supabase/server";

export const logout = async () => {
  const supabase = await createServerDatabase();
  await supabase.auth.signOut();
  redirect("/login");
};
