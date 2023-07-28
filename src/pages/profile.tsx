import Image from 'next/image';
import React from 'react';

import useCertifications from '@/hooks/useCertifications';
import useProjects from '@/hooks/useProjects';
import useSkills from '@/hooks/useSkills';

import Cards from '@/components/Cards';

function Profile() {
  const cardLimit = 5;
  const skillsData = useSkills();
  const projectsData = useProjects();
  const certificationsData = useCertifications();

  return (
    <div className='mb-10 flex flex-col  gap-y-10'>
      {/* desktop */}
      <div className='hidden gap-x-6 px-8 pt-6 pb-6  md:flex'>
        <div className=''>
          <div className='relative h-60 w-60 overflow-hidden rounded-full'>
            <Image
              src='/images/profile-cover.png'
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
        <div className='flex flex-col justify-end'>
          <p className='font-spotify-circular-bold text-[12px]'>PROFILE</p>
          <p className='whitespace-nowrap pt-[19px] pb-1 font-spotify-circular-bold text-7xl'>
            Renz&nbsp;Carillo
          </p>
          <div className='flex font-spotify-circular-light text-sm'>
            <p className=''>&nbsp;aspiring DevOps Engineer/SRE</p>
            <p className=''>,crc1046@dlsud.edu.ph</p>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='flex h-[204px] flex-col gap-y-1.5 p-4 md:hidden'>
        <div className='flex gap-x-[14px]'>
          <div className='relative h-[150px] w-[150px] flex-shrink-0 overflow-hidden rounded-full'>
            <Image
              src='/images/profile-cover.png'
              alt='Renz'
              layout='fill'
              objectFit='cover'
              objectPosition='top'
            ></Image>
          </div>
          <p className=' flex items-center overflow-hidden font-spotify-circular-bold text-2xl'>
            Renz&nbsp;Carillo
          </p>
        </div>
        <div className='flex flex-wrap'>
          <p className='font-spotify-circular-light  '>
            aspiring DevOps Engineer/SRE
          </p>
          <p className='font-spotify-circular-light  '>,crc1046@dlsud.edu.ph</p>
        </div>
      </div>

      {/* neutral */}
      <div className=''>
        <button className='relative mx-8 hidden h-8 w-8 cursor-not-allowed md:block '>
          <Image
            src='/svg/more-options.svg'
            alt='More Options'
            layout='fill'
          ></Image>
        </button>
        <Cards cardsLimit={cardLimit} data={skillsData} type='Skills'></Cards>
        <Cards
          cardsLimit={cardLimit}
          data={projectsData}
          type='Projects'
        ></Cards>
        <Cards
          cardsLimit={cardLimit}
          data={certificationsData}
          type='Certifications'
        ></Cards>
      </div>
    </div>
  );
}

export default Profile;
