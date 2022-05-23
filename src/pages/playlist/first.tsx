import React from 'react';

import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';

function first() {
  return (
    <>
      <PlaylistHeader></PlaylistHeader>
      <Playlist></Playlist>
    </>
  );
}

export default first;
