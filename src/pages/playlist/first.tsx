import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';
import TopNav from '@/components/TopNav';

function first() {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <div className='relative h-[86vh] w-full overflow-y-scroll bg-[rgb(18,18,18)] text-white'>
          <TopNav></TopNav>
          <PlaylistHeader></PlaylistHeader>
          <Playlist></Playlist>
        </div>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default first;
