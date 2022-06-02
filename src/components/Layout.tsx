import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Player from '@/components/Player';
import TopNav from '@/components/TopNav';

interface Props {
  initialAsideLeftHandler: string;
  initialAsideRightHandler: string;
  initialIsAsideRightOpen: string;
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({
  children,
  initialAsideLeftHandler,
  initialAsideRightHandler,
  initialIsAsideRightOpen,
}) => {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <div className='flex'>
          <AsideLeft
            initialAsideLeftHandler={initialAsideLeftHandler}
          ></AsideLeft>
          <div className='relative h-[86.5vh] w-full overflow-y-scroll bg-[rgb(18,18,18)] text-white'>
            <TopNav></TopNav>
            <main>{children}</main>
          </div>
          <AsideRight
            initialAsideRightHandler={initialAsideRightHandler}
            initialIsAsideRightOpen={initialIsAsideRightOpen}
          ></AsideRight>
        </div>
        <Player></Player>
      </div>
    </>
  );
};

export default Layout;
