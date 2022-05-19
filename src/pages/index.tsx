import * as React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Sections from '@/components/index/Sections';
import Player from '@/components/Player';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TopNav from '@/components/TopNav';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const skillsLimit = 5;
  const projectsLimit = 5;

  return (
    <>
      <div className='flex h-screen flex-col'>
        <div className='flex'>
          <AsideLeft></AsideLeft>
          <div className='h-[86vh] w-full overflow-y-scroll bg-black py-6 px-8 text-white'>
            <TopNav></TopNav>
            <div className='mb-10 flex flex-col gap-y-10'>
              <Sections></Sections>
              <Skills skillsLimit={skillsLimit}></Skills>
              <Projects projectsLimit={projectsLimit}></Projects>
            </div>
          </div>
          <AsideRight></AsideRight>
        </div>
        <Player></Player>
      </div>
    </>
  );
}
