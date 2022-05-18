import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function AsideLeft() {
  return (
    <aside className='relative h-[100vh] w-80 overflow-hidden bg-black p-6 text-sm text-spotify-gray '>
      <div className='flex h-80 flex-col font-spotify-circular-bold'>
        <Image src='/new-tab.png' alt='Renz' width={220} height={40}></Image>
        <ul className='mb-10 mt-16'>
          <li className='hover:text-white'>
            <Link href='/' passHref>
              <a className='flex gap-x-5'>
                <Image
                  src='/new-tab.png'
                  alt='Renz'
                  width={20}
                  height={20}
                ></Image>
                <p>Home</p>
              </a>
            </Link>
          </li>
          <li className='flex cursor-not-allowed gap-x-5 hover:text-white'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <a>Search</a>
          </li>
          <li className='flex cursor-not-allowed gap-x-5 hover:text-white'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <a>Your Library</a>
          </li>
        </ul>
        <ul>
          <li className='flex cursor-not-allowed gap-x-5 hover:text-white'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <a className='whitespace-nowrap'>Create Playlist</a>
          </li>
          <li className='flex cursor-not-allowed gap-x-5 hover:text-white'>
            <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
            <a>Liked Songs</a>
          </li>
        </ul>
      </div>
      <div className='h-48 font-spotify-circular-light'>
        <ul className=''>
          <li className='hover:text-white'>
            <Link href='/playlist/first' passHref>
              <a>
                <p>
                  <span>My Playlist #1</span>
                </p>
              </a>
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link href='/playlist/second' passHref>
              <a>
                <p>
                  <span>My Playlist #2</span>
                </p>
              </a>
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link href='/profile' passHref>
              <a>
                <p>
                  <span>Profile</span>
                </p>
              </a>
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link href='/skills' passHref>
              <a>
                <p>
                  <span>Skills</span>
                </p>
              </a>
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link href='/projects' passHref>
              <a>
                <p>
                  <span>Projects</span>
                </p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='relative bottom-7 h-10 items-center font-spotify-circular-bold hover:text-white '>
        <button className='flex h-full w-full  items-center gap-x-5'>
          <Image src='/new-tab.png' alt='Renz' width={20} height={20}></Image>
          <span className=''>Follow</span>
        </button>
      </div>
    </aside>
  );
}

export default AsideLeft;
