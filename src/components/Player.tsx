import Image from 'next/image';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsPlaying, setSongPlayer } from '@/redux/songPlayerSlice';
import { RootState } from '@/redux/store';

import playlistOne from './../../public/data/playlistOne.json';
import playlistTwo from './../../public/data/playlistTwo.json';

function Player() {
  const dispatch = useDispatch();
  const audioPlayer = useRef() as MutableRefObject<HTMLAudioElement>;
  const animationRef = useRef() as MutableRefObject<number>;
  const progressBar = useRef() as MutableRefObject<HTMLInputElement>;
  const volumeProgressBar = useRef() as MutableRefObject<HTMLInputElement>;
  const currentSelectedSong = useSelector(
    (state: RootState) => state.songPlayer.setSong
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const [volume, setVolume] = useState<number>(1);

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = `${seconds}`;
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  useEffect(() => {
    if (
      playlistOne.items.some(
        (e) => e.track.name == currentSelectedSong.track.name
      )
    ) {
      setData(playlistOne);
    } else {
      setData(playlistTwo);
    }
  }, [currentSelectedSong.track]);

  useEffect(() => {
    if (currentSelectedSong.isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  });

  const whilePlaying = () => {
    progressBar.current.value = `${audioPlayer.current.currentTime}`;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = parseInt(progressBar.current.value);
    changePlayerCurrentTime();
  };

  const changeVolumeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(event.target.valueAsNumber);
    audioPlayer.current.volume = volume;
    volumeProgressBar.current.style.setProperty(
      'background-size',
      `${parseFloat(volumeProgressBar.current.value) * 100}% 100%`
    );
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      'background-size',
      `${(parseInt(progressBar.current.value) / duration) * 100}% 100%`
    );
    setCurrentTime(parseInt(progressBar.current.value));
  };

  return (
    <>
      {/* audio */}
      <audio
        ref={audioPlayer}
        src={currentSelectedSong.track.preview_url}
        preload='metadata'
        onEnded={() =>
          dispatch(
            setSongPlayer({
              isPlaying: true,
              index: currentSelectedSong.index + 1,
              track: data.items[currentSelectedSong.index + 1].track,
            })
          )
        }
      ></audio>

      {/* desktop */}
      <div className='absolute bottom-0 hidden h-[90px] w-full border-t-2 border-spotify-bg-light-gray bg-spotify-bg-gray p-4 text-xs text-white md:block'>
        <div className=' flex justify-between'>
          <div className='flex h-fit w-96 items-center justify-center gap-x-[14px]'>
            <div className='relative flex h-14 w-14 flex-shrink-0 items-center justify-center text-center'>
              {currentSelectedSong.track.name != '' ? (
                <Image
                  src={currentSelectedSong.track.album.images[0].url}
                  alt='Renz'
                  layout='fill'
                  objectFit='cover'
                ></Image>
              ) : (
                <p className=''>Select a song</p>
              )}
            </div>
            <div className=' w-full'>
              <div className='flex items-center gap-x-[14px]'>
                <div className='h-8 w-full max-w-[244px]'>
                  <p className=''>{currentSelectedSong.track.name}</p>
                  <p className='text-[11px]'>
                    {currentSelectedSong.track.artists[0].name}
                  </p>
                </div>
                <div className='flex flex-shrink-0 gap-x-4'>
                  <button className='cursor-not-allowed'>
                    <Image
                      src='/svg/heart.svg'
                      alt='Liked Song'
                      width={20}
                      height={20}
                    ></Image>
                  </button>
                  <button className='cursor-not-allowed'>
                    <Image
                      src='/svg/view.svg'
                      alt='View'
                      width={20}
                      height={20}
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-[33rem] flex-col'>
            <div className='flex items-center justify-center gap-x-[6px]'>
              {/* shuffle  */}
              <button className='cursor-not-allowed p-[9.5px]'>
                <div className='relative h-[14px] w-[14px]'>
                  <Image
                    src='/svg/shuffle.svg'
                    alt='Shuffle'
                    layout='fill'
                  ></Image>
                </div>
              </button>

              {/* previous */}
              <button
                className='cursor-default p-[9.5px]'
                onClick={() =>
                  dispatch(
                    setSongPlayer({
                      isPlaying: true,
                      index: currentSelectedSong.index - 1,
                      track: data.items[currentSelectedSong.index - 1].track,
                    })
                  )
                }
              >
                <div className='relative h-[14px] w-[14px]'>
                  <Image
                    src='/svg/previous.svg'
                    alt='Previous'
                    layout='fill'
                  ></Image>
                </div>
              </button>

              {/* play/pause */}
              {!currentSelectedSong.isPlaying ? (
                <button
                  className='cursor-default rounded-full bg-white p-[9.5px]'
                  onClick={() => dispatch(setIsPlaying())}
                >
                  <div className='relative h-[14px] w-[14px]'>
                    <Image src='/svg/play.svg' alt='Play' layout='fill'></Image>
                  </div>
                </button>
              ) : (
                <button
                  className='cursor-default rounded-full bg-white p-[9.5px]'
                  onClick={() => dispatch(setIsPlaying())}
                >
                  <div className='relative h-[14px] w-[14px]'>
                    <Image
                      src='/svg/pause.svg'
                      alt='Pause'
                      layout='fill'
                    ></Image>
                  </div>
                </button>
              )}

              {/* next */}
              <button
                className='cursor-default p-[9.5px]'
                onClick={() =>
                  dispatch(
                    setSongPlayer({
                      isPlaying: true,
                      index: currentSelectedSong.index + 1,
                      track: data.items[currentSelectedSong.index + 1].track,
                    })
                  )
                }
              >
                <div className='relative h-[14px] w-[14px]'>
                  <Image src='/svg/next.svg' alt='Next' layout='fill'></Image>
                </div>
              </button>

              {/* repeat */}
              <button className='cursor-not-allowed p-[9.5px]'>
                <div className='relative h-[14px] w-[14px]'>
                  <Image
                    src='/svg/repeat.svg'
                    alt='Repeat'
                    layout='fill'
                  ></Image>
                </div>
              </button>
            </div>

            {/* progress bar and duration */}
            <div className='mt-2 grid h-3 grid-cols-[40px,1fr,40px] gap-x-2 text-[11px]'>
              <p className='flex justify-end'>{calculateTime(currentTime)}</p>
              <div className='flex items-center'>
                <input
                  id='range-player'
                  type='range'
                  defaultValue='0'
                  ref={progressBar}
                  onChange={changeRange}
                />
              </div>
              <p className=''>
                {duration && !isNaN(duration) && calculateTime(duration)}
              </p>
            </div>
          </div>

          <div className='flex w-96 items-center justify-end'>
            <div className='flex'>
              <button className='cursor-not-allowed p-[8.5px]'>
                <div className='relative h-[16px] w-[16px]'>
                  <Image
                    src='/svg/mic.svg'
                    alt='Microphone'
                    layout='fill'
                  ></Image>
                </div>
              </button>
              <button className='cursor-not-allowed p-[8.5px]'>
                <div className='relative h-[16px] w-[16px]'>
                  <Image src='/svg/queue.svg' alt='Queue' layout='fill'></Image>
                </div>
              </button>
              <button className='cursor-not-allowed p-[8.5px]'>
                <div className='relative h-[16px] w-[16px]'>
                  <Image
                    src='/svg/connect-device.svg'
                    alt='Connect Device'
                    layout='fill'
                  ></Image>
                </div>
              </button>
              <button className='cursor-not-allowed p-[8.5px]'>
                <div className='relative h-[16px] w-[16px]'>
                  <Image src='/svg/mute.svg' alt='Mute' layout='fill'></Image>
                </div>
              </button>
              <button className='cursor-default'>
                <div className='flex w-[90px] items-center justify-center'>
                  <input
                    id='volume-range-player'
                    type='range'
                    defaultValue='0'
                    min={0}
                    max={1}
                    step={0.02}
                    value={volume}
                    ref={volumeProgressBar}
                    onChange={(event) => {
                      changeVolumeRange(event);
                    }}
                  />
                </div>
              </button>
              <button className='cursor-not-allowed p-[8.5px]'>
                <div className='relative h-[16px] w-[16px]'>
                  <Image
                    src='/svg/full-screen.svg'
                    alt='Full Screen'
                    layout='fill'
                  ></Image>
                </div>
              </button>
            </div>
          </div>

          <style jsx>{`
            .filter-gray {
              filter: invert(88%) sepia(2%) saturate(28%) hue-rotate(330deg)
                brightness(83%) contrast(84%);
            }
            .filter-gray:hover {
              filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(270deg)
                brightness(104%) contrast(100%);
            }
          `}</style>
        </div>
      </div>

      {/* mobile */}
      <div className='absolute bottom-[70px] w-full md:hidden'>
        <div className='mx-auto flex h-[54px] w-[97.5%] items-center  rounded bg-[#0D3236] p-2'>
          <div className='relative mr-2.5 h-10 w-10 flex-shrink-0'>
            {currentSelectedSong.track.name != '' ? (
              <Image
                src={currentSelectedSong.track.album.images[0].url}
                alt='Renz'
                layout='fill'
                objectFit='cover'
              ></Image>
            ) : (
              <span>Select a song</span>
            )}
          </div>
          <div className='w-full text-[13px]'>
            <p className='relative -bottom-1 font-spotify-circular-bold text-white'>
              {currentSelectedSong.track.name}
            </p>
            <p className='font-spotify-circular-book text-spotify-gray'>
              {currentSelectedSong.track.artists[0].name}
            </p>
          </div>

          <div className='flex'>
            <div className='flex w-9 justify-center'>
              <div className='relative h-6 w-6 '>
                <Image
                  src='/svg/heart-mobile.svg'
                  alt='Renz'
                  layout='fill'
                  objectFit='cover'
                ></Image>
              </div>
            </div>
            <button
              className='flex w-9 cursor-default justify-center'
              onClick={() => dispatch(setIsPlaying())}
            >
              {!currentSelectedSong.isPlaying ? (
                <div className='relative h-6 w-6'>
                  <Image
                    src='/svg/play-mobile.svg'
                    alt='Renz'
                    layout='fill'
                    objectFit='cover'
                  ></Image>
                </div>
              ) : (
                <div className='relative h-6 w-6'>
                  <Image
                    src='/svg/pause-mobile.svg'
                    alt='Renz'
                    layout='fill'
                    objectFit='cover'
                  ></Image>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
