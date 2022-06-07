/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { msToTime } from '@/lib/msToTime';

function PlaylistHeader({ data, details, playlistNumber }) {
  const playlistLength: number = data.items.length;
  const totalLengthOfSongs: number = data.items.reduce(
    (accumulator: any, current: { track: { duration_ms: number } }) =>
      accumulator + (current.track.duration_ms ? current.track.duration_ms : 0),
    0
  );
  const hours: number = msToTime(totalLengthOfSongs, 'hours');
  const minutes: number = msToTime(totalLengthOfSongs, 'minutes');
  const seconds: number = msToTime(totalLengthOfSongs, 'seconds');

  return (
    <div className='flex items-end gap-x-6 px-8 pt-5 pb-6'>
      <div className=''>
        <div className='flex'>
          <div className='relative h-28 w-28 flex-shrink-0 flex-grow-0'>
            <Image
              src={data.items[0].track.album.images[0].url}
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <div className='relative h-28 w-28 flex-shrink-0 flex-grow-0'>
            <Image
              src={data.items[1].track.album.images[0].url}
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
        <div className='flex'>
          <div className='relative h-28 w-28 flex-shrink-0 flex-grow-0'>
            <Image
              src={data.items[2].track.album.images[0].url}
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <div className='relative h-28 w-28 flex-shrink-0 flex-grow-0'>
            <Image
              src={data.items[3].track.album.images[0].url}
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
      </div>
      <div className='flex flex-shrink-0 flex-grow-0 flex-col '>
        <p className='font-spotify-circular-bold text-[12px] leading-none'>
          PLAYLIST
        </p>
        <h1 className='text-[96px] leading-tight'>
          {details[playlistNumber - 1].playlist}
        </h1>
        <div className='flex font-spotify-circular-light text-sm'>
          <Link href='/Profile'>
            <a className='font-spotify-circular-bold hover:underline'>
              Renz Carillo
            </a>
          </Link>
          <p>&nbsp;• {playlistLength} Songs,</p>
          <p className='text-spotify-gray'>
            &nbsp;about{' '}
            {!hours
              ? minutes + ' min ' + seconds + ' sec'
              : hours + ' hr ' + minutes + ' min'}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistHeader;
