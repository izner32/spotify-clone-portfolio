import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  projectsLimit: number;
}

function Projects(props: Props) {
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
    <div className=''>
      <div className='py-4 px-8'>
        <div className='flex items-center justify-between font-spotify-circular-bold'>
          <p className='text-2xl'>Projects</p>
          {props.projectsLimit ? (
            <a className='text-xs text-spotify-gray hover:underline'>
              <Link href='/projects' passHref>
                SEE ALL
              </Link>
            </a>
          ) : null}
        </div>
        <div className='mt-5 grid grid-cols-5 gap-x-5 gap-y-4'>
          {section
            .slice(
              0,
              props.projectsLimit ? props.projectsLimit : section.length
            )
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col rounded bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)]'
                >
                  <Image
                    src={item.image}
                    alt='Renz'
                    width={160}
                    height={160}
                  ></Image>
                  <div className='py-4'>
                    <p className='font-spotify-circular-bold text-base'>
                      <span>{item.name}</span>
                    </p>
                    <p className='font-spotify-circular-light text-sm text-spotify-gray'>
                      By Spotify
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
