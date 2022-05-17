import Image from 'next/image';
import React from 'react';

function Playlist() {
  const delete_this_arr_later: number[] = [1, 2, 3, 4, 5];

  return (
    <div className='h-[36rem] w-full overflow-y-scroll bg-black py-6 px-8 text-xs text-white'>
      <div className='flex justify-between'>
        <div className='flex gap-x-4'>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
        </div>
        <div className='flex w-32 justify-between'>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
          <p>Renz</p>
          <Image src='/new-tab.png' alt='Renz' width={32} height={32}></Image>
        </div>
      </div>

      <div className='flex gap-x-6 pt-9 pb-6'>
        <Image src='/new-tab.png' alt='Renz' width={240} height={240}></Image>
        <div className='flex flex-col justify-end'>
          <p>PLAYLIST</p>
          <h1 className=''>My Playlist #1</h1>
          <div className='flex'>
            <p>Renz Carillo</p>
            <p>&nbsp;• 177 Songs,</p>
            <p>about 10 hr</p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='flex items-center gap-x-9 py-6'>
          <Image src='/new-tab.png' alt='Renz' width={60} height={60}></Image>
          <Image src='/new-tab.png' alt='Renz' width={24} height={6}></Image>
        </div>
        <div>
          <div className='relative flex items-center py-2 px-5'>
            <div className='flex items-center'>
              <p className='mr-4'>#</p>
              <p className='mr-4'>TITLE</p>
            </div>
            <div className='absolute right-[24px] flex'>
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
                    <p className='mr-4'>{key + 1}</p>
                    <div className='mr-4'>
                      <Image
                        src='/new-tab.png'
                        alt='Renz'
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className=''>
                      <h1 className='text-xs'>Lemonade - Ukulele Version</h1>
                      <p>Jeremy Passion</p>
                    </div>
                  </div>
                  <div className='absolute right-[24px] flex'>
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
    </div>
  );
}

export default Playlist;
