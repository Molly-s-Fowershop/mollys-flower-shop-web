import { NextRequest } from "next/server";
import { validateAuth } from "./lib/services/auth.services";

export async function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname);

  const isAuthRoute = req.nextUrl.pathname.startsWith("/auth");

  return await validateAuth(req, isAuthRoute ? false : true);
}

export const config = {
  // matcher solution for public, api, assets and _next exclusion
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
