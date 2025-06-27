import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["de", "en", "fr", "it"],
  defaultLocale: "de",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
