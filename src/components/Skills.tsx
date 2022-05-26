import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  skillsLimit: number;
}

function Skills(props: Props) {
  const section: { title: string; 'sub-title': string; image: string }[] = [
    {
      title: 'HTML',
      'sub-title': '',
      image: '/images/skills/html.png',
    },
    {
      title: 'CSS',
      'sub-title': '',
      image: '/images/skills/css.png',
    },
    {
      title: 'Javascript',
      'sub-title': '',
      image: '/images/skills/javascript.png',
    },
    {
      title: 'Typescript',
      'sub-title': '',
      image: '/images/skills/typescript.png',
    },
    {
      title: 'MQL5',
      'sub-title': '',
      image: '/images/skills/mql5.png',
    },
    {
      title: 'Python',
      'sub-title': '',
      image: '/images/skills/python.png',
    },
    {
      title: 'Java',
      'sub-title': '',
      image: '/images/skills/java.png',
    },
    {
      title: 'Solidity',
      'sub-title': '',
      image: '/images/skills/solidity.png',
    },
    {
      title: 'MongoDB',
      'sub-title': '',
      image: '/images/skills/mongodb.png',
    },
    {
      title: 'PostgreSQL',
      'sub-title': '',
      image: '/images/skills/postgresql.png',
    },
    {
      title: 'NodeJS',
      'sub-title': '',
      image: '/images/skills/nodejs.png',
    },
    {
      title: 'NextJS',
      'sub-title': '',
      image: '/images/skills/nextjs.png',
    },
    {
      title: 'TailwindCSS',
      'sub-title': '',
      image: '/images/skills/tailwindcss.png',
    },
    {
      title: 'Pandas',
      'sub-title': '',
      image: '/images/skills/pandas.png',
    },
    {
      title: 'Git',
      'sub-title': '',
      image: '/images/skills/git.png',
    },
  ];

  return (
    <div className=''>
      <div className='py-4 px-8'>
        <div className='flex items-center justify-between font-spotify-circular-bold'>
          <p className='text-2xl'>Skills</p>
          {props.skillsLimit ? (
            <a className='text-xs text-spotify-gray hover:underline'>
              <Link href='/skills' passHref>
                SEE ALL
              </Link>
            </a>
          ) : null}
        </div>
        <div className='mt-5 grid grid-cols-5 gap-x-5 gap-y-4'>
          {section
            .slice(0, props.skillsLimit ? props.skillsLimit : section.length)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex cursor-not-allowed flex-col  rounded bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)]'
                >
                  <div className='flex justify-center overflow-hidden rounded-md'>
                    <div className=' relative h-40 w-full'>
                      <Image
                        src={item.image}
                        alt='Renz'
                        layout='fill'
                        objectFit='cover'
                      ></Image>
                    </div>
                  </div>
                  <div className='pt-4'>
                    <p className='h-[27px] font-spotify-circular-bold text-base'>
                      <span>{item.title}</span>
                    </p>
                    <p className='h-8 font-spotify-circular-light text-sm text-spotify-gray'>
                      {item['sub-title']
                        ? item['sub-title']
                        : 'By Renz Carillo'}
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

export default Skills;
