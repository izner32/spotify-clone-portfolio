import React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import BottomNav from '@/components/BottomNav';
import Player from '@/components/Player';
import TopNav from '@/components/TopNav';

interface Props {
  initialAsideLeftHandler: string;
  initialAsideRightHandler: string;
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({
  children,
  initialAsideLeftHandler,
  initialAsideRightHandler,
}) => {
  return (
    <>
      <div className='flex h-screen flex-col bg-[rgb(18,18,18)]'>
        <div className='flex'>
          <AsideLeft
            initialAsideLeftHandler={initialAsideLeftHandler}
          ></AsideLeft>
          <div className='relative h-screen w-full overflow-y-scroll text-white md:h-[86.5vh]'>
            <TopNav></TopNav>
            <main>{children}</main>
          </div>
          <AsideRight
            initialAsideRightHandler={initialAsideRightHandler}
          ></AsideRight>
        </div>
        <Player></Player>
        <BottomNav></BottomNav>
      </div>
    </>
  );
};

export default Layout;
