import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function sections() {
  const section: {
    name: string;
    image: string;
    coverImage: string;
    link: string;
  }[] = [
    {
      name: 'My Playlist #1',
      image: '/new-tab.png',
      coverImage: '/images/playlist1-cover.png',
      link: '/playlist/First',
    },
    {
      name: 'My Playlist #2',
      image: '/new-tab.png',
      coverImage: '/images/playlist2-cover.png',
      link: '/playlist/Second',
    },
    {
      name: 'Profile',
      image: '/new-tab.png',
      coverImage: '/images/renz.png',
      link: '/Profile',
    },
    {
      name: 'Skills',
      image: '/new-tab.png',
      coverImage: '/images/skills-cover.png',
      link: '/Skills',
    },
    {
      name: 'Projects',
      image: '/new-tab.png',
      coverImage: '/images/projects-cover.png',
      link: '/Projects',
    },
    {
      name: 'Certifications',
      image: '/new-tab.png',
      coverImage: '/images/certifications-cover.png',
      link: '/Certifications',
    },
  ];

  return (
    <div className='py-4 px-8 font-spotify-circular-bold'>
      <p className='text-3xl '>Good afternoon</p>
      <div className='mt-5 grid grid-cols-2 gap-x-5 gap-y-4 text-base lg:grid-cols-3'>
        {section.map((item, index) => {
          return (
            <Link href={item.link} key={index} passHref>
              <div className='flex cursor-pointer gap-x-4 rounded bg-[rgb(40,40,40)] hover:bg-[rgb(65,65,65)]'>
                <div className='relative h-20 w-20'>
                  <Image
                    src={item.coverImage}
                    alt='Renz'
                    layout='fill'
                    objectFit='cover'
                  ></Image>
                </div>
                <p className='flex items-center justify-center'>
                  <span>{item.name}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default sections;
