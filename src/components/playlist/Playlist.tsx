import Image from 'next/image';
import React from 'react';

function Playlist() {
  const delete_this_arr_later: number[] = [1, 2, 3, 4, 5];

  return (
    <div className='px-8'>
      <div className='flex items-center gap-x-9  py-6'>
        <Image src='/new-tab.png' alt='Renz' width={60} height={60}></Image>
        <Image src='/new-tab.png' alt='Renz' width={24} height={6}></Image>
      </div>
      <div className='text-spotify-gray'>
        <div className='relative flex items-center py-2 px-5'>
          <div className='flex items-center'>
            <p className='mr-4 text-base'>#</p>
            <p className='mr-4 text-xs'>TITLE</p>
          </div>
          <div className='absolute right-[24px] flex text-xs'>
            <p className='absolute right-[2500%] whitespace-nowrap'>ALBUM</p>
            <p className='absolute right-[1250%] whitespace-nowrap'>
              DATE ADDED
            </p>
            <div className=''>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={12}
                height={12}
              ></Image>
            </div>
          </div>
        </div>
        <ul>
          {delete_this_arr_later.map((x, key) => {
            return (
              <li key={key} className='relative flex items-center py-2 px-5'>
                <div className='flex items-center'>
                  <p className='mr-4 text-base'>{key + 1}</p>
                  <div className='mr-4'>
                    <Image
                      src='/new-tab.png'
                      alt='Renz'
                      width={40}
                      height={40}
                    ></Image>
                  </div>
                  <div className=''>
                    <p className='font-spotify-circular-light text-base text-white'>
                      Lemonade - Ukulele Version
                    </p>
                    <p>Jeremy Passion</p>
                  </div>
                </div>
                <div className='absolute right-[24px] flex text-sm'>
                  <p className='absolute right-[600%] whitespace-nowrap'>
                    For More than a Feeling
                  </p>
                  <p className='absolute right-[300%] whitespace-nowrap'>
                    Jul 15, 2018
                  </p>
                  <div className='mr-4'>
                    <Image
                      src='/new-tab.png'
                      alt='Renz'
                      width={12}
                      height={12}
                    ></Image>
                  </div>
                  <p>3:01</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
