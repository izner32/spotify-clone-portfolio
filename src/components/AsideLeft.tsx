import Image from 'next/image';
import React from 'react';

function AsideLeft() {
  return (
    <aside className='w-60 bg-black p-6 text-white'>
      <div className='flex h-80 flex-col '>
        <Image src='/new-tab.png' alt='Renz' width={220} height={40}></Image>
        <ul className='mb-10 mt-16'>
          <li className='flex gap-x-5'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <p>Home</p>
          </li>
          <li className='flex gap-x-5'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <p>Search</p>
          </li>
          <li className='flex gap-x-5'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <p>Your Library</p>
          </li>
        </ul>
        <ul>
          <li className='flex gap-x-5'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <p>Create Playlist</p>
          </li>
          <li className='flex gap-x-5'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <p>Liked Songs</p>
          </li>
        </ul>
      </div>
      <div className='h-48'>
        <ul className=''>
          <li>My Playlist #1</li>
          <li>My Playlist #2</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex h-10 items-center gap-x-5'>
        <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
        <p>Install App</p>
      </div>
    </aside>
  );
}

export default AsideLeft;
