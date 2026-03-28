import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";
import { NextResponse, type NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  // Always serve Indonesian as the default without /id prefix
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip i18n for dashboard, api, and static assets
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
