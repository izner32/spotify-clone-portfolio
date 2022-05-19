import Image from 'next/image';
import React from 'react';

function TopNav() {
  return (
    <div>
      <div className='flex justify-between  text-sm'>
        <div className='flex gap-x-4'>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
        </div>
        <div className='flex w-32 items-center justify-between'>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
          <p className='font-spotify-circular-bold'>Renz</p>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
