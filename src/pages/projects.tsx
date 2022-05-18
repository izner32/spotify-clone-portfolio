import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Skills from '@/components/Skills';

function projects() {
  return (
    <div>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <Skills></Skills>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default projects;
