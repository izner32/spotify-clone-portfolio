import React from 'react';

import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';

import playlistTwo from './../../../public/data/playlistTwo.json';

function Second({ data }) {
  return (
    <>
      <PlaylistHeader data={data}></PlaylistHeader>
      <Playlist data={data}></Playlist>
    </>
  );
}

export default Second;

export async function getStaticProps() {
  return {
    props: {
      data: playlistTwo,
    },
  };
}
