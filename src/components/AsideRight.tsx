import Image from 'next/image';
import React from 'react';

function AsideRight() {
  return (
    <aside className='w-60 bg-black p-6 text-white'>
      <div className='flex h-full flex-col '>
        <div className='mb-10 flex justify-between'>
          <p>Friend Activity</p>
          <div className='flex items-center justify-center'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
          </div>
        </div>
        <div className='mb-6'>
          <p className='mb-6'>
            Let friends and followers on Spotify see what you&apos;re listening
            to
          </p>
          <ul className='mb-6 flex flex-col gap-y-4'>
            <li className='flex items-center gap-x-3'>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={50}
                height={50}
              ></Image>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={60}
                height={30}
              ></Image>
            </li>
            <li className='flex items-center gap-x-3'>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={50}
                height={50}
              ></Image>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={60}
                height={30}
              ></Image>
            </li>
            <li className='flex items-center gap-x-3'>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={50}
                height={50}
              ></Image>
              <Image
                src='/new-tab.png'
                alt='Renz'
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
        <div>
          <button>SETTINGS</button>
        </div>
      </div>
    </aside>
  );
}

export default AsideRight;
