import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Projects from '@/components/Projects';

function projects() {
  return (
    <div>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <Projects></Projects>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default projects;
