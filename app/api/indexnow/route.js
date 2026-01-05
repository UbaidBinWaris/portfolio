import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIdentifier } from '@/app/lib/rateLimit';
import { validateUrlArray, sanitizeError, isAllowedOrigin } from '@/app/lib/validation';

// Prevent this API route from being crawled or indexed
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export async function POST(request) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimit = checkRateLimit(clientId, 'indexnow');

    if (rateLimit.limited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimit.resetTime - Date.now()) / 1000)),
          }
        }
      );
    }

    // CORS validation
    const origin = request.headers.get('origin');
    if (origin && !isAllowedOrigin(origin)) {
      return NextResponse.json(
        { error: 'CORS policy: Origin not allowed' },
        { status: 403 }
      );
    }

    // Authentication
    const apiKey = request.headers.get('x-api-key');
    const validApiKey = process.env.INTERNAL_API_KEY;
    
    if (validApiKey && apiKey !== validApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { urls } = await request.json();

    // Input validation
    const validation = validateUrlArray(urls, 100);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const host = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
    const key = process.env.INDEXNOW_API_KEY || '34010ce9592af026867e6c742c168f94';
    const keyLocation = `${host}/${key}.txt`;

    // Submit to IndexNow
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: host.replace('https://', '').replace('http://', ''),
        key: key,
        keyLocation: keyLocation,
        urlList: urls,
      }),
    });

    // 200 = OK, 202 = Accepted (both are success)
    const isSuccess = response.status === 200 || response.status === 202;

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`,
        statusCode: response.status,
        statusText: response.status === 202 ? 'Accepted' : 'OK',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to submit to IndexNow',
          statusCode: response.status,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    const isDev = process.env.NODE_ENV === 'development';
    return NextResponse.json(
      { error: sanitizeError(error, isDev) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API endpoint - POST requests only',
    usage: 'POST request with { "urls": ["url1", "url2"] }',
    authentication: 'API key required via x-api-key header',
  });
}
