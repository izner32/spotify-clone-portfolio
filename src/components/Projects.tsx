import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import ProjectModal from '@/components/ProjectModal';

interface Props {
  projectsLimit: number;
}

function Projects(props: Props) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const section: {
    title: string;
    'sub-title': string;
    tools: string[];
    image: string;
    projectLink: string;
  }[] = [
    {
      title: 'Cyber Outlaws',
      'sub-title': 'Full stack web3 application with log in metamask feature',
      tools: ['NextJS', 'NodeJS', 'MongoDB', 'TailwindCSS'],
      image: '/images/projects/cyber-outlaws.png',
      projectLink: 'https://cyberoutlaws.world',
    },
    {
      title: 'Mint Smart Contract',
      'sub-title': 'Allowed minting for the creation of thousands of NFTs',
      tools: ['Solidity'],
      image: '/images/projects/smart-contract.png',
      projectLink:
        'https://polygonscan.com/address/0xe15dd32f646d505f89c94df0d62d18e975637836#code',
    },
    {
      title: 'Analytics Engineering on Scraped Top Pharmacies',
      'sub-title':
        'Performed data transformation and cleaning for different scraped data then geocoded the seized address',
      tools: [
        'BeautifulSoup4',
        'GeoPy',
        'Numpy',
        'Pandas',
        'PySpark',
        'Python',
        'Selenium',
      ],
      image: '/images/projects/pharmacy-scraper.png',
      projectLink: 'https://github.com/izner32/pharmacy_data_scraper',
    },
    {
      title: 'Algorithmic Trading Bot',
      'sub-title':
        'Mean reversion system that triggers a buy/sell dependent on the customized candlestick patterns and multiple trading indicators incorporated',
      tools: ['MQL5'],
      image: '/images/projects/algo-bot.png',
      projectLink: 'https://github.com/izner32/MQL5',
    },
    {
      title: 'Covid Data Pipeline',
      'sub-title':
        'Architected and built a data pipeline utilizing aws services',
      tools: [
        'AWS - Glue',
        'AWS - S3',
        'AWS - Redshift',
        'Apache Airflow',
        'Python',
      ],
      image: '/images/projects/covid-data-pipeline.png',
      projectLink: 'https://github.com/izner32/covid-19-de',
    },
    {
      title: 'Spotify Clone',
      'sub-title': 'Portfolio website',
      tools: ['NextJS', 'TailwindCSS', 'Typescript'],
      image: '/images/projects/spotify-clone.png',
      projectLink: 'https://github.com/izner32/spotify-clone-portfolio',
    },
    {
      title: 'LinkedIn Scraper',
      'sub-title': 'Scraped user and their public info based on a keyword',
      tools: ['BeautifulSoup4', 'Python', 'Selenium'],
      image: '/images/projects/linkedin-scraper.png',
      projectLink: 'https://github.com/izner32/linkedin_scraper',
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
                  className='flex cursor-pointer flex-col rounded bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)]'
                  onClick={() => {
                    setProjectIndex(index);
                    setIsProjectOpen(true);
                  }}
                >
                  <div className=' relative h-40 w-full'>
                    <Image
                      src={item.image}
                      alt='Renz'
                      layout='fill'
                      objectFit='cover'
                    ></Image>
                  </div>
                  <div className='pt-4'>
                    <p className='h-[27px] overflow-hidden text-ellipsis whitespace-nowrap font-spotify-circular-bold text-base'>
                      <span>{item.title}</span>
                    </p>
                    <p className='h-[33px] font-spotify-circular-light text-sm leading-tight  text-spotify-gray line-clamp-2 '>
                      {item['sub-title']}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* display selected project */}
      {isProjectOpen ? (
        <div>
          <div className='fixed top-0 left-0 bottom-0 right-0 z-10 h-full w-screen bg-black opacity-[60%]'></div>
          <ProjectModal
            data={section[projectIndex]}
            isProjectOpen={isProjectOpen}
            setIsProjectOpen={setIsProjectOpen}
          ></ProjectModal>
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
