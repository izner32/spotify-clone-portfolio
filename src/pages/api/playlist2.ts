/*
fetch playlist 2 
curl -X "GET" "https://api.spotify.com/v1/playlists/4S9eSZXFBGFWUIK2KnbA8S/tracks?market=ES&fields=items(added_at%2Ctrack(name%2Chref%2Calbum(name%2Chref%2Cartists%2Cimages)))&limit=100&offset=0" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQA_3QNEvDU_112KkTyuxdsv_WXmrqEKgGABT8_KOsvhx4yqi_DNfv7amtwX06aEtKrsb5FDXHDjNZp73zT2dMjpDk6qMXVUDaq5kbAXfqC0CWc0z0DrCLtPCXvVcQecv4O39Jep04PybEwn88T8jzkD5Hj1oA"
*/

import { NextApiRequest, NextApiResponse } from 'next';

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'Bambang' });
}
