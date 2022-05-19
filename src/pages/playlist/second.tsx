import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';
import TopNav from '@/components/TopNav';

function second() {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <div className='h-[86vh] w-full overflow-y-scroll bg-black py-6 px-8 text-white'>
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

export default second;
