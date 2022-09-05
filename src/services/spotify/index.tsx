import { Buffer } from 'buffer';
import { setItem } from 'services/storage';
import { KeyStorageName } from 'services/storage/constants';

const authUrl = 'https://accounts.spotify.com/api/token';
// const baseUrl = 'https://api.spotify.com/v1';

export const fetchToken = async (): Promise<boolean> => {
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      ).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'user-top-read',
    }),
  });

  const responseParse: { access_token: string } = await response.json();

  setItem(KeyStorageName.SPOTIFY_TOKEN, responseParse.access_token);

  return true;
};
