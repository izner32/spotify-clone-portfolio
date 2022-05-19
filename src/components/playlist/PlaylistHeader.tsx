import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function PlaylistHeader() {
  return (
    <div className='flex gap-x-6 px-8 pt-9 pb-6'>
      <Image src='/new-tab.png' alt='Renz' width={240} height={240}></Image>
      <div className='flex flex-col justify-end'>
        <p className='font-spotify-circular-bold text-[12px]'>PLAYLIST</p>
        <h1 className='text-7xl'>My Playlist #1</h1>
        <div className='flex font-spotify-circular-light text-sm'>
          <Link href='/profile'>
            <a className='font-spotify-circular-bold hover:underline'>
              Renz Carillo
            </a>
          </Link>
          <p>&nbsp;• 177 Songs,</p>
          <p className='text-spotify-gray'>&nbsp;about 10 hr</p>
        </div>
      </div>
    </div>
  );
}

export default PlaylistHeader;
