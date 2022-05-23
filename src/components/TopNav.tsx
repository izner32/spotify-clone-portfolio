import Image from 'next/image';
import React, { useState } from 'react';

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 z-10 bg-[rgb(18,18,18)]'>
      <div className='flex justify-between py-4 px-8 text-sm'>
        <div className='flex gap-x-4'>
          <button className='flex items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] p-[6px]'>
            <div className='relative h-6 w-6'>
              <Image
                src='/svg/back-topnav.svg'
                alt='Renz'
                layout='fill'
              ></Image>
            </div>
          </button>
          <button className='flex items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] p-[6px]'>
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
                  src='/images/renz.png'
                  alt='Renz'
                  layout='fill'
                  objectFit='contain'
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
                <button className='flex w-44 justify-start rounded-md p-[11px] hover:bg-[#3e3e3e]'>
                  <span>Account</span>
                </button>
              </li>
              <li>
                <button className='flex w-44 justify-start rounded-md p-[11px] hover:bg-[#3e3e3e]'>
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button className='flex w-44 justify-start rounded-md p-[11px] hover:bg-[#3e3e3e]'>
                  <span>View Friend Activity</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
