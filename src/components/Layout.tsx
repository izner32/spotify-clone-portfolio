import React, { useState } from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import TopNav from '@/components/TopNav';

type ComponentProps = {
  children: React.ReactNode;
};

const Layout: React.FC<ComponentProps> = (props) => {
  const { children } = props;
  const [isAsideRightOpen, setIsAsideRightOpen] = useState(true);

  return (
    <>
      <div className='flex h-screen flex-col'>
        <div className='flex'>
          <AsideLeft></AsideLeft>
          <div className='relative h-[86.5vh] w-full overflow-y-scroll bg-[rgb(18,18,18)] text-white'>
            <TopNav></TopNav>
            <main>{children}</main>
          </div>
          <AsideRight
            isAsideRightOpen={isAsideRightOpen}
            setIsAsideRightOpen={setIsAsideRightOpen}
          ></AsideRight>
        </div>
        <Player></Player>
      </div>
    </>
  );
};

export default Layout;
