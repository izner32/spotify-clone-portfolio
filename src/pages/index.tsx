import * as React from 'react';

import useCertifications from '@/hooks/useCertifications';
import useProjects from '@/hooks/useProjects';
import useSkills from '@/hooks/useSkills';

import Cards from '@/components/Cards';
import Sections from '@/components/index/Sections';

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
  const cardLimit = 5;
  const skillsData = useSkills();
  const projectsData = useProjects();
  const certificationsData = useCertifications();

  return (
    <>
      <div className='mb-10 flex flex-col gap-y-10'>
        <Sections></Sections>
        <Cards cardsLimit={cardLimit} data={skillsData} type='Skills'></Cards>
        <Cards
          cardsLimit={cardLimit}
          data={projectsData}
          type='Projects'
        ></Cards>
        <Cards
          cardsLimit={cardLimit}
          data={certificationsData}
          type='Certifications'
        ></Cards>
      </div>
    </>
  );
}
