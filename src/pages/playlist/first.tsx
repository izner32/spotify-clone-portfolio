import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Playlist from '@/components/Playlist';

function first() {
  return (
    <div>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <Playlist></Playlist>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default first;
