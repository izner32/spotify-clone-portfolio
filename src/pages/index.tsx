import * as React from 'react';

import AsideLeft from '@/components/AsideLeft';
import AsideRight from '@/components/AsideRight';
import Footer from '@/components/footer';
import Section from '@/components/section';

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
  return (
    <>
      <div className='flex justify-between'>
        <AsideLeft></AsideLeft>
        <Section></Section>
        <AsideRight></AsideRight>
      </div>
      <Footer></Footer>
    </>
  );
}
