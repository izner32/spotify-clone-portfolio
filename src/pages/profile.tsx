import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import User from '@/components/User';

function profile() {
  return (
    <div>
      <div className='flex'>
        <AsideLeft></AsideLeft>
        <User></User>
        <AsideRight></AsideRight>
      </div>
      <Player></Player>
    </div>
  );
}

export default profile;
