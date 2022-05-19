import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Projects from '@/components/Projects';
import TopNav from '@/components/TopNav';

function projects() {
  return (
    <div>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <div className='relative h-[86vh] w-full overflow-y-scroll bg-[rgb(18,18,18)] pb-8 text-white'>
          <TopNav></TopNav>
          <Projects></Projects>
        </div>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default projects;
