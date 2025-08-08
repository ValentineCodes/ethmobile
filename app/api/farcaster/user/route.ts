import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fid = searchParams.get('fid');

  if (!fid) {
    return NextResponse.json({ error: 'FID is required' }, { status: 400 });
  }

  try {
    // Make the API call server-side to avoid CORS issues
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(`https://api.farcaster.xyz/v2/user?fid=${fid}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ETH Mobile/1.0',
        'Cache-Control': 'no-cache',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Farcaster API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Return the data with CORS headers and caching
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Cache for 5 minutes
      },
    });
  } catch (error) {
    console.error('Error fetching Farcaster profile:', error);
    
    // Return a structured error response
    return NextResponse.json(
      { 
        error: 'Failed to fetch profile data',
        details: error instanceof Error ? error.message : 'Unknown error',
        fid: fid 
      },
      { status: 500 }
    );
  }
}
