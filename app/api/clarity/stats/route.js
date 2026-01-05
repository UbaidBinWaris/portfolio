import { NextResponse } from 'next/server';
import { getClarityStats } from '@/app/lib/clarity';
import { checkRateLimit, getClientIdentifier } from '@/app/lib/rateLimit';
import { sanitizeError } from '@/app/lib/validation';

// Prevent this API route from being crawled or indexed
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimit = checkRateLimit(clientId, 'clarity');

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    // Authentication check (optional: add API key validation here)
    const apiKey = request.headers.get('x-api-key');
    const validApiKey = process.env.INTERNAL_API_KEY;
    
    if (validApiKey && apiKey !== validApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const stats = await getClarityStats();

    if (stats.error) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
        'X-RateLimit-Remaining': String(rateLimit.remaining),
      },
    });
  } catch (error) {
    console.error('Clarity API error:', error);
    const isDev = process.env.NODE_ENV === 'development';
    return NextResponse.json(
      { error: sanitizeError(error, isDev) },
      { status: 500 }
    );
  }
}
