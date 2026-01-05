import { NextResponse } from "next/server";

export function middleware(request) {
  // Force HTTPS redirect
  const requestHeaders = request.headers;
  const proto = requestHeaders.get("x-forwarded-proto") || "https";

  // Redirect HTTP to HTTPS (for production only)
  if (proto === "http" && process.env.NODE_ENV === "production") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Strip query parameters from homepage and redirect to canonical URL
  // This prevents duplicate indexing of URLs like /?q={search_term_string}
  if (request.nextUrl.pathname === "/" && request.nextUrl.search !== "") {
    const url = request.nextUrl.clone();
    url.search = ""; // Remove all query parameters
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  // Block video files from being indexed - comprehensive blocking for background videos
  if (
    request.nextUrl.pathname.endsWith(".mp4") ||
    request.nextUrl.pathname.includes("hero-background")
  ) {
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, nosnippet, noarchive, noimageindex, max-video-preview:0"
    );
  }

  // Set proper Content-Type for sitemap.xml so Google can read it
  if (request.nextUrl.pathname === "/sitemap.xml") {
    response.headers.set("Content-Type", "application/xml; charset=utf-8");
    // Don't add X-Robots-Tag here - Google needs to READ the sitemap file
    // (Sitemaps are not indexed as pages anyway)
  }

  // Add security headers to all responses
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set(
    "Cross-Origin-Opener-Policy",
    "same-origin-allow-popups"
  );

  // Prevent caching of API responses and block from search engines
  if (request.nextUrl.pathname.startsWith("/api/")) {
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, nosnippet, noarchive"
    );
  }

  // Block robots.txt from being indexed (it's a file, not a page)
  if (request.nextUrl.pathname === "/robots.txt") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Some image formats (but not all to catch .mp4 and .xml)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
