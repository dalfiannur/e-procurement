import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClientDatabase } from "~/utils/supabase/client";

export const useCheckAuth = () => {
  const router = useRouter();

  useEffect(() => {
    createClientDatabase()
      .auth.getSession()
      .then((res) => {
        if (!res.data.session) {
          router.push("/login");
        }
      });
  }, []);
};
