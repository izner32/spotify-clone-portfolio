/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { millisToMinutesAndSeconds } from '@/lib/msToTime';

import { setIsPlaying, setSongPlayer } from '@/redux/songPlayerSlice';
import { RootState } from '@/redux/store';

function Playlist({ data }: any) {
  const dispatch = useDispatch();
  const [isMusicHovering, setIsMusicHovering] = useState(
    data.items.map(() => ({ isMusicHovering: false }))
  );
  const currentSelectedSong = useSelector(
    (state: RootState) => state.songPlayer.setSong
  );

  return (
    <div className='mb-[30px] px-8'>
      <div className='flex items-center gap-x-9  py-6'>
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
        <button className='relative h-8 w-8 cursor-not-allowed overflow-hidden'>
          <Image
            src='/svg/more-options.svg'
            alt='More Options'
            layout='fill'
          ></Image>
        </button>
      </div>
      <div className='text-spotify-gray '>
        <div className='mb-3.5 flex items-center gap-x-3.5 px-4 text-xs'>
          <div className='flex w-4 flex-shrink-0 justify-center text-base'>
            <span className=''>#</span>
          </div>
          <p className='w-10 flex-shrink-0 text-xs'>TITLE</p>
          <div className='grid w-full grid-cols-2 gap-x-3.5 lg:grid-cols-[2fr,1.5fr,1fr]'>
            <div className=''></div>
            <p className=''>ALBUM</p>
            <p className='hidden whitespace-nowrap lg:block'>DATE ADDED</p>
          </div>
          <div className='flex w-28 justify-center '>
            <div className=' relative h-[18px] w-[18px]'>
              <Image
                src='/svg/clock.svg'
                alt='Renz'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
          </div>
        </div>
        <ul>
          {data.items.map((x: any, key: number) => {
            return (
              <li
                key={key}
                className='flex h-[50px] cursor-default items-center gap-x-3.5 whitespace-nowrap rounded-md px-4 text-sm hover:bg-[#2A2A2A] focus:bg-[#5A5A5A] active:bg-[#5A5A5A]'
                onDoubleClick={() => {
                  dispatch(
                    setSongPlayer({
                      isPlaying: true,
                      index: key,
                      track: x.track,
                    })
                  );
                }}
                onMouseEnter={() => {
                  setIsMusicHovering(
                    [...isMusicHovering].map((object) => {
                      if (object == isMusicHovering[key]) {
                        return { isMusicHovering: true };
                      } else return { isMusicHovering: false };
                    })
                  );
                }}
                onMouseLeave={() => {
                  setIsMusicHovering(
                    [...isMusicHovering].map((object) => {
                      if (object == isMusicHovering[key]) {
                        return { isMusicHovering: false };
                      } else return { isMusicHovering: false };
                    })
                  );
                }}
              >
                <div className='flex w-4 flex-shrink-0 justify-center text-base'>
                  {isMusicHovering[key].isMusicHovering &&
                  currentSelectedSong.isPlaying &&
                  currentSelectedSong.track.name == x.track.name ? (
                    <button
                      className='relative h-4 w-4 cursor-default'
                      onClick={() => {
                        dispatch(
                          setSongPlayer({
                            isPlaying: true,
                            index: key,
                            track: x.track,
                          })
                        );
                        dispatch(setIsPlaying());
                      }}
                    >
                      <Image
                        src='/svg/pause-white.svg'
                        alt='Play'
                        layout='fill'
                      ></Image>
                    </button>
                  ) : isMusicHovering[key].isMusicHovering ? (
                    <button
                      className='relative h-4 w-4 cursor-default'
                      onClick={() => {
                        dispatch(
                          setSongPlayer({
                            isPlaying: true,
                            index: key,
                            track: x.track,
                          })
                        );
                      }}
                    >
                      <Image
                        src='/svg/play-white.svg'
                        alt='Play'
                        layout='fill'
                      ></Image>
                    </button>
                  ) : (
                    <span className=''>{key + 1}</span>
                  )}
                </div>
                <div className='flex flex-shrink-0 flex-grow-0 items-center'>
                  <Image
                    src={x.track.album.images[2].url}
                    alt='Renz'
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div className='grid w-full grid-cols-2 items-center gap-x-3.5  lg:grid-cols-[2fr,1.5fr,1fr]'>
                  <div className=' overflow-hidden'>
                    <p
                      className={`${
                        currentSelectedSong.track.name == x.track.name
                          ? 'text-[#1ED760]'
                          : 'text-white'
                      } overflow-hidden text-ellipsis whitespace-nowrap font-spotify-circular-light text-base text-white`}
                    >
                      {x.track.name}
                    </p>
                    <button className='flex cursor-not-allowed justify-start'>
                      <p
                        className={`overflow-hidden text-ellipsis whitespace-nowrap hover:underline ${
                          isMusicHovering[key].isMusicHovering
                            ? 'text-white'
                            : ''
                        }`}
                      >
                        {x.track.artists[0].name}
                      </p>
                    </button>
                  </div>
                  <button className='flex cursor-not-allowed  justify-start overflow-hidden'>
                    <p
                      className={`overflow-hidden text-ellipsis whitespace-nowrap hover:underline ${
                        isMusicHovering[key].isMusicHovering ? 'text-white' : ''
                      }`}
                    >
                      {x.track.album.name}
                    </p>
                  </button>
                  <p className='hidden lg:block'>Not So Long Ago</p>
                </div>
                <div
                  className={`flex w-28 gap-x-4  ${
                    isMusicHovering[key].isMusicHovering ? '' : 'justify-center'
                  }`}
                >
                  <button
                    className={`flex cursor-not-allowed items-center ${
                      isMusicHovering[key].isMusicHovering ? '' : 'hidden'
                    }`}
                  >
                    <Image
                      src='/svg/blank-heart.svg'
                      alt='Add To Favorites'
                      width={18}
                      height={18}
                    ></Image>
                  </button>
                  <p className=''>
                    {millisToMinutesAndSeconds(x.track.duration_ms)}
                  </p>
                  <button
                    className={`flex cursor-not-allowed items-center ${
                      isMusicHovering[key].isMusicHovering ? '' : 'hidden'
                    }`}
                  >
                    <Image
                      src='/svg/more-options-large.svg'
                      alt='More Options'
                      width={18}
                      height={18}
                    ></Image>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
