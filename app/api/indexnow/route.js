import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    const host = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
    const key = '34010ce9592af026867e6c742c168f94';
    const keyLocation = `${host}/34010ce9592af026867e6c742c168f94.txt`;

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
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to submit to IndexNow',
          details: errorText,
          statusCode: response.status,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API endpoint',
    usage: 'POST request with { "urls": ["url1", "url2"] }',
    key: '34010ce9592af026867e6c742c168f94',
  });
}
