import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMeasure } from 'react-use';

import section from './../../../public/data/playlistDetails.json';

function sections() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sectionsRef, { width }] = useMeasure<HTMLDivElement>();
  return (
    <>
      {/* desktop */}
      <div
        ref={sectionsRef}
        className='hidden py-4 px-8 font-spotify-circular-bold md:block'
      >
        <p className='text-3xl '>Good afternoon</p>
        <div
          className={`mt-5 grid  grid-cols-2 gap-x-5 gap-y-4 text-base ${
            width > 700
              ? 'grid-cols-3'
              : width > 500
              ? 'grid-cols-2'
              : 'grid-cols-1'
          }`}
        >
          {section.map((item, index) => {
            return (
              <Link href={item.link} key={index} passHref>
                <div className='flex cursor-pointer gap-x-4 rounded bg-[rgb(40,40,40)] hover:bg-[rgb(65,65,65)]'>
                  <div className='relative h-20 w-20 flex-shrink-0'>
                    <Image
                      src={item.img}
                      alt='Renz'
                      layout='fill'
                      objectFit='cover'
                    ></Image>
                  </div>
                  <p className='flex items-center justify-center'>
                    <span>{item.playlist}</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* mobile */}
      <div className='font-spotify-circular-bold md:hidden'>
        <p className='flex h-12 items-end px-4 text-lg'>Good afternoon</p>
        <div className='flex gap-x-4 overflow-x-scroll px-4 py-1.5'>
          {section.map((item, key) => {
            return (
              <Link key={key} href={item.link} passHref>
                <div className='pb-5'>
                  <div className='relative h-44 w-44'>
                    <Image
                      src={item.img}
                      alt='Renz'
                      layout='fill'
                      objectFit='cover'
                    ></Image>
                  </div>
                  <p className='mt-2 flex justify-center text-sm'>
                    {item.playlist}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default sections;
