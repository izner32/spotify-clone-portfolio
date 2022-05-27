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
      <div className='flex gap-x-6 px-8 pt-9  pb-6'>
        <Image
          src='/images/renz.png'
          alt='Renz'
          width={240}
          height={240}
          objectFit='cover'
        ></Image>
        <div className='flex flex-col justify-end'>
          <p className='font-spotify-circular-bold text-[12px]'>PROFILE</p>
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
          <Image src='/new-tab.png' alt='Renz' width={24} height={6}></Image>
        </div>
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
