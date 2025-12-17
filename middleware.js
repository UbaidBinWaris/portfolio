import { NextResponse } from 'next/server';

export function middleware(request) {
  // Force HTTPS redirect
  const requestHeaders = request.headers;
  const proto = requestHeaders.get('x-forwarded-proto') || 'https';
  
  // Redirect HTTP to HTTPS (for production only)
  if (proto === 'http' && process.env.NODE_ENV === 'production') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  
  const response = NextResponse.next();
  
  // Block video files from being indexed
  if (request.nextUrl.pathname.endsWith('.mp4') || request.nextUrl.pathname.includes('hero-background')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, nosnippet, noarchive');
  }
  
  // Block sitemap files from being indexed as pages
  if (request.nextUrl.pathname.endsWith('.xml') && request.nextUrl.pathname.includes('sitemap')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  
  // Add security headers to all responses
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  
  // Prevent caching of API responses
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
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
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
