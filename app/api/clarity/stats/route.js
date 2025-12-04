import { NextResponse } from 'next/server';
import { getClarityStats } from '@/app/lib/clarity';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const stats = await getClarityStats();

    if (stats.error) {
      return NextResponse.json(
        { error: stats.message },
        { status: 500 }
      );
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Clarity API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
