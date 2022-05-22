import Image from 'next/image';
import React from 'react';

function AsideRight() {
  return (
    <aside className='h-[100vh] w-80 overflow-hidden bg-black p-6 text-sm text-spotify-gray'>
      <div className='flex h-full flex-col '>
        <div className='mb-10 flex justify-between font-spotify-circular-bold'>
          <p>Friend Activity</p>
          <div className='flex items-center justify-center '>
            <Image
              src='/new-tab.png'
              alt='Friend Activity'
              width={20}
              height={20}
            ></Image>
            <Image
              src='/new-tab.png'
              alt='Close'
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
        <div className='mb-6 font-spotify-circular-light text-sm'>
          <p className='mb-6'>
            Let friends and followers on Spotify see what you&apos;re listening
            to
          </p>
          <ul className='mb-6 flex flex-col gap-y-4'>
            <li className='flex items-center gap-x-3 '>
              <Image
                src='/new-tab.png'
                alt='Sample User'
                width={50}
                height={50}
              ></Image>
              <Image
                src='/new-tab.png'
                alt='Sample Description'
                width={60}
                height={30}
              ></Image>
            </li>
            <li className='flex items-center gap-x-3'>
              <Image
                src='/new-tab.png'
                alt='Sample User'
                width={50}
                height={50}
              ></Image>
              <Image
                src='/new-tab.png'
                alt='Sample Description'
                width={60}
                height={30}
              ></Image>
            </li>
            <li className='flex items-center gap-x-3'>
              <Image
                src='/new-tab.png'
                alt='Sample User'
                width={50}
                height={50}
              ></Image>
              <Image
                src='/new-tab.png'
                alt='Sample Description'
                width={60}
                height={30}
              ></Image>
            </li>
          </ul>
          <p>
            Go to Settings &gt; Social and enable &apos;Share my listening
            activity on Renzify.&apos; You can turn this off at any time.
          </p>
        </div>
        <div className='flex items-center justify-center font-spotify-circular-book '>
          <button className='rounded-full bg-white px-12 py-3.5'>
            <span className='text-black'>SETTINGS</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AsideRight;
