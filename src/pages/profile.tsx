import Image from 'next/image';
import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TopNav from '@/components/TopNav';

function profile() {
  const skillsLimit = 5;
  const projectsLimit = 5;

  return (
    <div className='flex h-screen flex-col'>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <div className='relative h-[86vh] w-full overflow-y-scroll bg-[rgb(18,18,18)]  text-white'>
          <TopNav></TopNav>
          <div className='mb-10 flex flex-col  gap-y-10'>
            <div className='flex gap-x-6 px-8 pt-9  pb-6'>
              <Image
                src='/new-tab.png'
                alt='Renz'
                width={240}
                height={240}
              ></Image>
              <div className='flex flex-col justify-end'>
                <p className='font-spotify-circular-bold text-[12px]'>
                  PROFILE
                </p>
                <h1 className='text-7xl'>Renz Carillo</h1>
                <div className='flex font-spotify-circular-light text-sm'>
                  <p>1st Year CS @ DLSU-D</p>
                  <p>&nbsp;• Philippines,</p>
                  <p>&nbsp;crc1046@dlsud.edu.ph</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex items-center gap-x-9 px-8 py-6'>
                <Image
                  src='/new-tab.png'
                  alt='Renz'
                  width={24}
                  height={6}
                ></Image>
              </div>
              <Skills skillsLimit={skillsLimit}></Skills>
              <Projects projectsLimit={projectsLimit}></Projects>
            </div>
          </div>
        </div>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default profile;
