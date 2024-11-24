import { Button } from "@mantine/core";
import { logout } from "./action";
import { createClient } from "~/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient()
  const { data } = await supabase.from("roles").select();
  return (
    <div>
      Dashboard
      <ul className="text-white">
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
