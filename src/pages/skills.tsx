import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Skills from '@/components/Skills';
import TopNav from '@/components/TopNav';

function skills() {
  return (
    <div>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <div className='relative h-[86.5vh] w-full overflow-y-scroll bg-[rgb(18,18,18)] pb-8 text-white'>
          <TopNav></TopNav>
          <Skills skillsLimit={0}></Skills>
        </div>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default skills;
