import Image from 'next/image';
import React from 'react';

function sections() {
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
  ];

  return (
    <div className='py-4 px-8 font-spotify-circular-bold'>
      <p className='text-3xl '>Good afternoon</p>
      <div className='mt-5 grid grid-cols-3 gap-x-5 gap-y-4 text-base'>
        {section.map((item, index) => {
          return (
            <div
              key={index}
              className='flex rounded bg-[rgb(40,40,40)] hover:bg-[rgb(65,65,65)]'
            >
              <Image src={item.image} alt='Renz' width={80} height={80}></Image>
              <p className='flex items-center justify-center'>
                <span>{item.name}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default sections;
