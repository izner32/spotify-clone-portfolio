import Image from 'next/image';
import React from 'react';

function TopNav() {
  return (
    <div className='sticky top-0 bg-[rgb(18,18,18)]'>
      <div className='flex justify-between py-4 px-8 text-sm'>
        <div className='flex gap-x-4'>
          <Image
            src='/svg/back-topnav.svg'
            alt='Renz'
            width={32}
            height={32}
          ></Image>
          <Image
            src='/svg/next-topnav.svg'
            alt='Renz'
            width={32}
            height={32}
          ></Image>
        </div>
        <div className='flex w-32 items-center justify-between'>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
          <p className='font-spotify-circular-bold'>Renz</p>
          <Image
            src='/svg/down-topnav.svg'
            alt='Renz'
            width={32}
            height={32}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
