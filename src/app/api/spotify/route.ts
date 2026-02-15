import { NextRequest, NextResponse } from 'next/server';

let accessToken: string | null = null;
let tokenExpiry: number = 0;

async function getSpotifyAccessToken() {
  const now = Date.now();
  
  // Return cached token if still valid
  if (accessToken && tokenExpiry > now) {
    return accessToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Spotify credentials not configured');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error('Failed to get Spotify access token');
  }

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpiry = now + (data.expires_in * 1000);

  return accessToken;
}

function extractTrackId(spotifyUrl: string): string | null {
  try {
    // Handle both track and album URLs
    const trackMatch = spotifyUrl.match(/track\/([a-zA-Z0-9]+)/);
    const albumMatch = spotifyUrl.match(/album\/([a-zA-Z0-9]+)/);
    
    if (trackMatch) return trackMatch[1];
    if (albumMatch) return albumMatch[1];
    
    return null;
  } catch {
    return null;
  }
}

async function getSpotifyTrackData(spotifyUrl: string) {
  const trackId = extractTrackId(spotifyUrl);
  
  if (!trackId) {
    return null;
  }

  try {
    const token = await getSpotifyAccessToken();
    
    // Determine if it's a track or album based on URL
    const isAlbum = spotifyUrl.includes('/album/');
    const endpoint = isAlbum 
      ? `https://api.spotify.com/v1/albums/${trackId}`
      : `https://api.spotify.com/v1/tracks/${trackId}`;

    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    // Extract image URL based on response type
    let imageUrl: string | null = null;
    
    if (isAlbum && data.images && data.images.length > 0) {
      // Album response
      imageUrl = data.images[0].url;
    } else if (data.album && data.album.images && data.album.images.length > 0) {
      // Track response with album
      imageUrl = data.album.images[0].url;
    }

    return {
      imageUrl,
      externalUrl: data.external_urls?.spotify || spotifyUrl,
    };
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { spotifyUrl } = await req.json();

    if (!spotifyUrl) {
      return NextResponse.json(
        { error: 'Spotify URL required' },
        { status: 400 }
      );
    }

    const data = await getSpotifyTrackData(spotifyUrl);

    if (!data) {
      return NextResponse.json(
        { error: 'Failed to fetch track data from Spotify' },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Spotify API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
