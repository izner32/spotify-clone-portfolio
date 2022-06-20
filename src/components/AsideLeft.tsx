/* eslint-disable no-console */
import Cookie from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Resizable } from 're-resizable';
import React, { useEffect, useState } from 'react';

import playlistDetails from './../../public/data/playlistDetails.json';

const AsideLeft: React.FC<{ initialAsideLeftHandler: string }> = ({
  initialAsideLeftHandler,
}) => {
  const router = useRouter();
  const [asideLeftHandler, setAsideLeftHandler] = useState(
    JSON.parse(initialAsideLeftHandler)
  );

  useEffect(() => {
    Cookie.set('asideLeftHandler', JSON.stringify(asideLeftHandler), {
      expires: 7,
    });
  }, [asideLeftHandler]);

  // changing image on hover
  const [isHomeHovering, setIsHomeHovered] = useState(false);
  const onMouseHomeEnter = () => setIsHomeHovered(true);
  const onMouseHomeLeave = () => setIsHomeHovered(false);

  const [isSearchHovering, setIsSearchHovered] = useState(false);
  const onMouseSearchEnter = () => setIsSearchHovered(true);
  const onMouseSearchLeave = () => setIsSearchHovered(false);

  const [isLibraryHovering, setIsLibraryHovered] = useState(false);
  const onMouseLibraryEnter = () => setIsLibraryHovered(true);
  const onMouseLibraryLeave = () => setIsLibraryHovered(false);

  const [isCreateHovering, setIsCreateHovered] = useState(false);
  const onMouseCreateEnter = () => setIsCreateHovered(true);
  const onMouseCreateLeave = () => setIsCreateHovered(false);

  const [isLikedHovering, setIsLikedHovered] = useState(false);
  const onMouseLikedEnter = () => setIsLikedHovered(true);
  const onMouseLikedLeave = () => setIsLikedHovered(false);

  return (
    <Resizable
      // minHeight='100vh'
      minWidth={200}
      maxWidth={320}
      enable={{
        right: true,
      }}
      handleClasses={{
        right: 'hover:border-r-[1px] activeg:border-r-[1px] border-[#727272]',
      }}
      handleStyles={{
        right: {
          right: 0,
        },
      }}
      size={{ width: asideLeftHandler.width, height: '100vh' }}
      onResizeStop={(e, direction, ref) => {
        setAsideLeftHandler({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          x: 0,
          y: 0,
        });
      }}
      className='relative hidden truncate bg-black  text-sm text-spotify-gray lg:block'
    >
      <div className=''>
        <div className='mt-[23px] w-auto pb-1 pl-6'>
          <Image
            src='/images/website-logo.png'
            alt='Logo'
            width={120}
            height={42}
          ></Image>
        </div>
        <div className='mt-4 flex flex-col px-6 pb-[8px] font-spotify-circular-bold'>
          <ul className='mb-[24px]'>
            <li
              className={`py-[8px] hover:text-white ${
                router.pathname == '/' ? 'text-white' : ''
              }`}
              onMouseEnter={onMouseHomeEnter}
              onMouseLeave={onMouseHomeLeave}
            >
              <Link href='/' passHref>
                <a className='flex gap-x-4'>
                  <Image
                    src={`${
                      router.pathname == '/'
                        ? '/svg/home-active.svg'
                        : isHomeHovering
                        ? '/svg/home-hover.svg'
                        : '/svg/home.svg'
                    }`}
                    alt='Home'
                    width={24}
                    height={24}
                  ></Image>
                  <p className='relative'>
                    <span className='absolute top-1'>Home</span>
                  </p>
                </a>
              </Link>
            </li>
            <li
              className='flex cursor-not-allowed gap-x-4 py-[8px] hover:text-white'
              onMouseEnter={onMouseSearchEnter}
              onMouseLeave={onMouseSearchLeave}
            >
              <Image
                src={`${
                  isSearchHovering ? '/svg/search-hover.svg' : '/svg/search.svg'
                }`}
                alt='Search'
                width={24}
                height={24}
              ></Image>
              <p className='relative'>
                <span className='absolute top-1'>Search</span>
              </p>
            </li>
            <li
              className='flex cursor-not-allowed gap-x-4 py-[8px] hover:text-white'
              onMouseEnter={onMouseLibraryEnter}
              onMouseLeave={onMouseLibraryLeave}
            >
              <Image
                src={`${
                  isLibraryHovering
                    ? '/svg/library-hover.svg'
                    : '/svg/library.svg'
                }`}
                alt='Library'
                width={24}
                height={24}
              ></Image>
              <p className='relative'>
                <span className='absolute top-1'>Your Library</span>
              </p>
            </li>
          </ul>
          <ul>
            <li
              className='flex cursor-not-allowed gap-x-4 py-[8px] hover:text-white '
              onMouseEnter={onMouseCreateEnter}
              onMouseLeave={onMouseCreateLeave}
            >
              <div
                className={`flex rounded-sm p-[6px] ${
                  isCreateHovering ? 'bg-white' : 'bg-spotify-gray'
                }`}
              >
                <Image
                  src='/svg/create.svg'
                  alt='Create Playlist'
                  width={12}
                  height={12}
                ></Image>
              </div>
              <p className='relative'>
                <span className='absolute top-1 '>Create Playlist</span>
              </p>
            </li>
            <li
              className='flex cursor-not-allowed gap-x-4 py-[8px] hover:text-white'
              onMouseEnter={onMouseLikedEnter}
              onMouseLeave={onMouseLikedLeave}
            >
              <div
                className={`flex rounded-sm bg-[linear-gradient(135deg,#450af5,#c4efd9)] p-[6px] ${
                  isLikedHovering ? 'opacity-100' : 'opacity-75'
                }`}
              >
                <Image
                  src='/svg/heart.svg'
                  alt='Liked Song'
                  width={12}
                  height={12}
                ></Image>
              </div>
              <p className='relative'>
                <span className='absolute top-1 whitespace-nowrap'>
                  Liked Songs
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className='mx-6 border-t-[0.1px] border-spotify-bg-light-gray'></div>
        <div className='h-48 px-6 pt-[11px] font-spotify-circular-light'>
          <ul className=''>
            {playlistDetails.map((item, key) => {
              return (
                <li
                  key={key}
                  className={`py-[5px] hover:text-white ${
                    router.pathname == item.link ? 'text-white' : ''
                  }`}
                >
                  <Link href={item.link} passHref>
                    <a>
                      <p>
                        <span>{item.playlist}</span>
                      </p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='absolute bottom-[90px] h-10 w-full items-center bg-black px-6 font-spotify-circular-bold hover:text-white '>
          <button className='flex h-full w-full  items-center gap-x-5'>
            <Image
              src='/images/linkedin-logo.png'
              alt='LinkedIn'
              width={20}
              height={20}
            ></Image>
            <p className='relative'>
              <span className=' whitespace-nowrap'>Follow</span>
            </p>
          </button>
        </div>
      </div>
    </Resizable>
  );
};

export default AsideLeft;
