import React from 'react';

import Playlist from '@/components/playlist/Playlist';
import PlaylistHeader from '@/components/playlist/PlaylistHeader';

import playlistDetails from './../../../public/data/playlistDetails.json';
import playlistOne from './../../../public/data/playlistOne.json';

function First({ data, details }) {
  return (
    <>
      <PlaylistHeader
        data={data}
        details={details}
        playlistNumber={1}
      ></PlaylistHeader>
      <Playlist data={data}></Playlist>
    </>
  );
}

export default First;

export async function getStaticProps() {
  return {
    props: {
      data: playlistOne,
      details: playlistDetails,
    },
  };
}
