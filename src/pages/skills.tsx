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
        <div className='h-[86vh] w-full overflow-y-scroll bg-black py-6 px-8 text-white'>
          <TopNav></TopNav>
          <Skills></Skills>
        </div>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default skills;
