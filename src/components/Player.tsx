import Image from 'next/image';
import React from 'react';

function Player() {
  return (
    <div className=' absolute bottom-0 h-24 w-full bg-black p-4 text-xs text-white'>
      <div className=' flex justify-between'>
        <div className='flex h-14 w-96 items-center justify-center gap-x-1.5'>
          <Image src='/new-tab.png' alt='Renz' width={56} height={56}></Image>
          <div className='h-8 w-full'>
            <div className='flex items-center justify-between gap-x-1.5 '>
              <div className='w-full'>
                <p className='text-sm'>Tahanan</p>
                <p className='text-[11px]'>RADWIMPS</p>
              </div>
              <div className='flex'>
                <Image
                  src='/new-tab.png'
                  alt='Renz'
                  width={30}
                  height={30}
                ></Image>
                <Image
                  src='/new-tab.png'
                  alt='Renz'
                  width={30}
                  height={30}
                ></Image>
                <Image
                  src='/new-tab.png'
                  alt='Renz'
                  width={30}
                  height={30}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-[33rem] flex-col'>
          <ul className='flex items-center justify-center'>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
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
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={90}
                height={32}
              ></Image>
            </li>
            <li>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={32}
                height={32}
              ></Image>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Player;
