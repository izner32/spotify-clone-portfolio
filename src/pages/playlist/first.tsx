import React from 'react';

import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';

import playlistOne from './../../../public/data/playlistOne.json';

function First({ data }) {
  return (
    <>
      <PlaylistHeader data={data}></PlaylistHeader>
      <Playlist data={data}></Playlist>
    </>
  );
}

export default First;

export async function getStaticProps() {
  return {
    props: {
      data: playlistOne,
    },
  };
}
