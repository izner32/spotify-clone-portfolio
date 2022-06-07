import React from 'react';

import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';

import playlistDetails from './../../../public/data/playlistDetails.json';
import playlistTwo from './../../../public/data/playlistTwo.json';

function Second({ data, details }) {
  return (
    <>
      <PlaylistHeader
        data={data}
        details={details}
        playlistNumber={2}
      ></PlaylistHeader>
      <Playlist data={data}></Playlist>
    </>
  );
}

export default Second;

export async function getStaticProps() {
  return {
    props: {
      data: playlistTwo,
      details: playlistDetails,
    },
  };
}
