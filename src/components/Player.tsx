import Image from 'next/image';
import React from 'react';

function Player() {
  return (
    <div className=' absolute bottom-0 h-[90px] w-full border-t-2 border-spotify-bg-light-gray bg-spotify-bg-gray p-4 text-xs text-white'>
      <div className=' flex justify-between'>
        <div className='flex h-14 w-96 items-center justify-center gap-x-1.5'>
          <Image src='/new-tab.png' alt='Renz' width={56} height={56}></Image>
          <div className='h-8 w-full'>
            <div className='flex items-center justify-between gap-x-1.5 '>
              <div className='w-full'>
                <p className='text-sm'>Tahanan</p>
                <p className='text-[11px]'>RADWIMPS</p>
              </div>
              <div className='flex gap-x-4'>
                <Image
                  src='/svg/heart.svg'
                  alt='Liked Song'
                  width={20}
                  height={20}
                ></Image>
                <Image
                  src='/svg/view.svg'
                  alt='View'
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-[33rem] flex-col'>
          <ul className='flex items-center justify-center gap-x-[6px]'>
            <li className='p-[9.5px]'>
              <div className='relative h-[14px] w-[14px]'>
                <Image
                  src='/svg/shuffle.svg'
                  alt='Shuffle'
                  layout='fill'
                ></Image>
              </div>
            </li>
            <li className='p-[9.5px]'>
              <div className='relative h-[14px] w-[14px]'>
                <Image
                  src='/svg/previous.svg'
                  alt='Previous'
                  layout='fill'
                ></Image>
              </div>
            </li>
            <li className='rounded-full bg-white p-[9.5px]'>
              <div className='relative h-[14px] w-[14px]'>
                <Image src='/svg/play.svg' alt='Play' layout='fill'></Image>
              </div>
            </li>
            <li className='p-[9.5px]'>
              <div className='relative h-[14px] w-[14px]'>
                <Image src='/svg/next.svg' alt='Next' layout='fill'></Image>
              </div>
            </li>
            <li className='p-[9.5px]'>
              <div className='relative h-[14px] w-[14px]'>
                <Image src='/svg/repeat.svg' alt='Repeat' layout='fill'></Image>
              </div>
            </li>
          </ul>
          <div className='flex text-[11px]'>
            <p>2:49</p>
            <Image src='/new-tab.png' alt='Renz' width={600} height={6}></Image>
            <p>2:49</p>
          </div>
        </div>

        <div className='flex w-96 items-center justify-end'>
          <ul className='flex'>
            <li className='p-[8.5px]'>
              <div className='relative h-[16px] w-[16px]'>
                <Image
                  src='/svg/mic.svg'
                  alt='Microphone'
                  layout='fill'
                ></Image>
              </div>
            </li>
            <li className='p-[8.5px]'>
              <div className='relative h-[16px] w-[16px]'>
                <Image src='/svg/queue.svg' alt='Queue' layout='fill'></Image>
              </div>
            </li>
            <li className='p-[8.5px]'>
              <div className='relative h-[16px] w-[16px]'>
                <Image
                  src='/svg/connect-device.svg'
                  alt='Connect Device'
                  layout='fill'
                ></Image>
              </div>
            </li>
            <li className='p-[8.5px]'>
              <div className='relative h-[16px] w-[16px]'>
                <Image src='/svg/mute.svg' alt='Mute' layout='fill'></Image>
              </div>
            </li>
            <li className=''>
              <div className='relative h-[32px] w-[90px]'>
                <Image
                  src='/svg/full-scree.svg'
                  alt='Sound'
                  layout='fill'
                ></Image>
              </div>
            </li>
            <li className='p-[8.5px]'>
              <div className='relative h-[16px] w-[16px]'>
                <Image
                  src='/svg/full-screen.svg'
                  alt='Full Screen'
                  layout='fill'
                ></Image>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Player;
