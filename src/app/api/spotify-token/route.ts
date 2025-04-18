import { NextResponse } from 'next/server';
import axios from 'axios';

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const INTERNAL_API_KEY_PUBLIC = process.env.NEXT_PUBLIC_API_KEY;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-internal-api-key',
};

export async function GET(request: Request) {
  const internalApiKey = request.headers.get('x-internal-api-key');

  if (internalApiKey !== INTERNAL_API_KEY_PUBLIC) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: corsHeaders });
  }

  const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }).toString(),
      {
        headers: {
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return NextResponse.json({ token: response.data.access_token }, { headers: corsHeaders });
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: unknown }; message?: string };
    console.error('Error getting Spotify token:', axiosError.response?.data || axiosError.message);
    return NextResponse.json({ error: 'Failed to get token' }, { status: 500, headers: corsHeaders });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
