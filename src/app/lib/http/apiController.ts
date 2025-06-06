import axios from 'axios';

export const apiBaseUrl = `${process.env.NEXT_PUBLIC_SPOTIFY_API_URL}`;

const TOKEN_EXPIRY_MS = 3500 * 1000;

export const apiController = axios.create({
  baseURL: apiBaseUrl,
});

let accessToken: string | null = null;
let tokenExpiry = 0;

apiController.interceptors.request.use(async (config) => {
  const configCopy = { ...config };

  const now = Date.now();

  if (!accessToken || now >= tokenExpiry) {
    try {
      const { data } = await axios.get('/api/spotify-token', {
        headers: {
          'x-internal-api-key': process.env.NEXT_PUBLIC_API_KEY || ''
        }
      });
      accessToken = data.token;

      tokenExpiry = now + TOKEN_EXPIRY_MS;
    } catch (err) {
      console.error('Failed to refresh Spotify token:', err);
    }
  }

  if (accessToken) {
    configCopy.headers.Authorization = `Bearer ${accessToken}`;
  }

  return configCopy;
});
