import Image from 'next/image';
import React from 'react';

function Skills() {
  const section: { name: string; image: string }[] = [
    {
      name: 'My Playlist #1',
      image: '/new-tab.png',
    },
    {
      name: 'My Playlist #2',
      image: '/new-tab.png',
    },
    {
      name: 'Profile',
      image: '/new-tab.png',
    },
    {
      name: 'Skills',
      image: '/new-tab.png',
    },
    {
      name: 'Projects',
      image: '/new-tab.png',
    },
    {
      name: 'My Playlist #1',
      image: '/new-tab.png',
    },
    {
      name: 'My Playlist #2',
      image: '/new-tab.png',
    },
    {
      name: 'Profile',
      image: '/new-tab.png',
    },
    {
      name: 'Skills',
      image: '/new-tab.png',
    },
    {
      name: 'Projects',
      image: '/new-tab.png',
    },
  ];

  return (
    <div className='h-[36rem] w-full overflow-y-scroll bg-black py-4 px-8 text-white'>
      <div className='flex justify-between pb-4'>
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

      <div className=''>
        <div className='py-4'>
          <div className='flex justify-between'>
            <p>Skills</p>
          </div>
          <div className='mt-5 grid grid-cols-5 gap-x-5 gap-y-4'>
            {section.map((item, index) => {
              return (
                <div key={index} className='flex flex-col p-4'>
                  <Image
                    src={item.image}
                    alt='Renz'
                    width={160}
                    height={160}
                  ></Image>
                  <div className='py-4'>
                    <p className=''>
                      <span>{item.name}</span>
                    </p>
                    <p>By Spotify</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
