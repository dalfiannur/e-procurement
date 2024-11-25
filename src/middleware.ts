import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "~/utils/supabase/middleware";
import { createServerDatabase } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = await createServerDatabase();
  const session = await supabase.auth.getSession();

  const url = new URL(request.url);

  if (url.pathname !== "/login" && !session.data.session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
