import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIsAsideRightOpen } from '@/redux/asideRightSlice';

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* desktop */}
      <div className='sticky top-0 z-10 hidden bg-[rgb(18,18,18)] md:block '>
        <div className='flex justify-between py-4 px-8 text-sm'>
          <div className='flex gap-x-4'>
            <button className='flex cursor-not-allowed items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] p-[6px]'>
              <div className='relative h-6 w-6'>
                <Image
                  src='/svg/back-topnav.svg'
                  alt='Renz'
                  layout='fill'
                ></Image>
              </div>
            </button>
            <button className='flex cursor-not-allowed items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] p-[6px]'>
              <div className='relative h-6 w-6 opacity-70'>
                <Image
                  src='/svg/next-topnav.svg'
                  alt='Renz'
                  layout='fill'
                ></Image>
              </div>
            </button>
            <style jsx>{`
              .filter-gray {
                filter: invert(100%) sepia(77%) saturate(2%) hue-rotate(303deg)
                  brightness(110%) contrast(101%);
                opacity: 0.7;
              }
            `}</style>
          </div>
          <div className='relative'>
            <button
              className='flex items-center justify-between rounded-full bg-[rgba(0,0,0,.7)]'
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className='flex items-center justify-center rounded-full p-[6px]'>
                <div className='relative h-6 w-6 overflow-hidden rounded-full p-[6px]'>
                  <Image
                    src='/images/profile-cover.png'
                    alt='Renz'
                    layout='fill'
                    objectFit='cover'
                  ></Image>
                </div>
              </div>
              <p className='whitespace-nowrap font-spotify-circular-bold'>
                Renz Carillo
              </p>
              <div className='flex items-center justify-center rounded-full p-[6px]'>
                <div className='relative h-[20px] w-[20px] rounded-full p-[6px]'>
                  <Image
                    src='/svg/down-topnav.svg'
                    alt='Renz'
                    layout='fill'
                  ></Image>
                </div>
              </div>
            </button>
            <div
              className={`absolute top-[130%] right-0 whitespace-nowrap rounded-lg bg-[#282828] p-[3px] text-sm ${
                isOpen ? '' : 'hidden'
              }`}
            >
              <ul className=''>
                <li>
                  <Link href='/' passHref>
                    <button className='flex w-44 justify-start rounded-md p-[11px] hover:bg-[#3e3e3e]'>
                      <span>Home</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href='/profile' passHref>
                    <button className='flex w-44 justify-start rounded-md p-[11px] hover:bg-[#3e3e3e]'>
                      <span>Profile</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    className='flex w-44 justify-start rounded-md p-[11px] hover:bg-[#3e3e3e]'
                    onClick={() => {
                      dispatch(setIsAsideRightOpen());
                    }}
                  >
                    <span>View Friend Activity</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='flex h-[68px] items-center justify-end font-spotify-circular-bold md:hidden'>
        <button
          className='w-fit cursor-default p-2'
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <div className='relative h-6 w-6'>
            <Image
              src='/svg/settings-mobile.svg'
              alt='Renz'
              layout='fill'
            ></Image>
          </div>
        </button>
      </div>

      {/* mobile is open content */}
      <div
        className={`${
          isMobileOpen
            ? 'fixed top-0 z-10 h-screen w-full bg-black font-spotify-circular-bold text-2xl md:hidden'
            : 'hidden'
        } pl-10 `}
      >
        <div className='mr-[10px] flex h-[68px] items-center justify-end font-spotify-circular-bold'>
          <button
            className='w-fit cursor-default p-2'
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <div className='relative h-6 w-6'>
              <Image
                src='/svg/close-mobile.svg'
                alt='Renz'
                layout='fill'
              ></Image>
            </div>
          </button>
        </div>
        <div className='flex flex-col gap-y-5'>
          <span>
            <Link href='/' passHref>
              <span
                className='cursor-default'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                Home
              </span>
            </Link>
          </span>
          <span>
            <Link href='/profile' passHref>
              <span
                className='cursor-default'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                Profile
              </span>
            </Link>
          </span>
          <span>
            <Link href='/skills' passHref>
              <span
                className='cursor-default'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                Skills
              </span>
            </Link>
          </span>
          <span>
            <Link href='/projects' passHref>
              <span
                className='cursor-default'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                Projects
              </span>
            </Link>
          </span>
          <span>
            <Link href='/certifications' passHref>
              <span
                className='cursor-default'
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                Certifications
              </span>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default TopNav;
