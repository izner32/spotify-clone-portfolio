/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import { msToTime } from '@/lib/msToTime';

import { setSongPlayer } from '@/redux/songPlayerSlice';

function PlaylistHeader({
  data,
  details,
  playlistNumber,
}: {
  data: any;
  details: any;
  playlistNumber: number;
}) {
  const dispatch = useDispatch();
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
    <>
      {/* desktop */}
      <div className='hidden items-end gap-x-6 px-8 pt-5 pb-6 md:flex'>
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
        <div className='flex  flex-col '>
          <p className='font-spotify-circular-bold text-[12px] leading-none'>
            PLAYLIST
          </p>
          <h1 className='text-[72px] leading-tight'>
            {details[playlistNumber - 1].playlist}
          </h1>
          <div className='flex font-spotify-circular-light text-sm'>
            <Link href='/profile'>
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

      {/* mobile */}
      <div className='mb-[16px] p-[16px] md:hidden'>
        <div className='mx-auto mb-[16px] w-fit'>
          <div className='flex'>
            <div className='relative h-[100px] w-[100px] flex-shrink-0 flex-grow-0'>
              <Image
                src={data.items[0].track.album.images[0].url}
                alt='Renz'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
            <div className='relative h-[100px] w-[100px] flex-shrink-0 flex-grow-0'>
              <Image
                src={data.items[1].track.album.images[0].url}
                alt='Renz'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
          </div>
          <div className='flex'>
            <div className='relative h-[100px] w-[100px] flex-shrink-0 flex-grow-0'>
              <Image
                src={data.items[2].track.album.images[0].url}
                alt='Renz'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
            <div className='relative h-[100px] w-[100px] flex-shrink-0 flex-grow-0'>
              <Image
                src={data.items[3].track.album.images[0].url}
                alt='Renz'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
          </div>
        </div>
        <p className='mb-2 font-spotify-circular-bold text-2xl'>
          {details[playlistNumber - 1].playlist}
        </p>
        <div className='mb-2 flex gap-x-1.5'>
          <div className='relative h-6 w-6 flex-shrink-0 flex-grow-0 overflow-hidden rounded-full'>
            <Image
              src='/images/renz.png'
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <p className='relative top-1.5 font-spotify-circular-light text-sm leading-none'>
            Renz Carillo
          </p>
        </div>
        <div className='flex justify-between '>
          <div className='flex flex-col gap-y-[14px]'>
            <p className='font-spotify-circular-light text-sm text-spotify-gray'>
              {!hours
                ? minutes + ' min ' + seconds + ' sec'
                : hours + ' hr ' + minutes + ' min'}{' '}
            </p>
            <div className='flex w-9 justify-center'>
              <button className='relative h-5 w-5'>
                <Image
                  src='/svg/share-mobile.svg'
                  alt='Share'
                  layout='fill'
                  objectFit='cover'
                ></Image>
              </button>
            </div>
          </div>
          <button
            className='cursor-default rounded-full bg-[#1ED760] p-[19px] hover:scale-105'
            onClick={() =>
              dispatch(
                setSongPlayer({
                  isPlaying: true,
                  index: 0,
                  track: data.items[0].track,
                })
              )
            }
          >
            <div className='relative h-[18px] w-[18px]'>
              <Image src='/svg/play.svg' alt='Play' layout='fill'></Image>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default PlaylistHeader;
