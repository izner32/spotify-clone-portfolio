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
      <div className='flex gap-x-6 px-8 pt-6  pb-6'>
        <div className=''>
          <div className='relative h-60 w-60 overflow-hidden rounded-full '>
            <Image
              src='/images/renz.png'
              alt='Renz'
              layout='fill'
              objectFit='cover'
              objectPosition='top'
            ></Image>
          </div>
        </div>
        <div className='flex flex-col justify-end'>
          <p className='font-spotify-circular-bold text-[12px]'>PROFILE</p>
          <p className='whitespace-nowrap pt-[19px] pb-1 font-spotify-circular-bold text-7xl'>
            Renz Carillo
          </p>
          <div className=' font-spotify-circular-light text-sm'>
            <p className='float-left'>1st Year CS @ DLSU-D</p>
            <p className='float-left'>
              &nbsp;• currently learning Haskell and DevOps | i leetcode
              sometimes,
            </p>
            <p className='float-left'>&nbsp;crc1046@dlsud.edu.ph</p>
          </div>
        </div>
      </div>
      <div className=''>
        <button className='relative mx-8 h-8 w-8 cursor-not-allowed overflow-hidden'>
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
