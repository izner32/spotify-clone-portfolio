import Cookie from 'js-cookie';
import Image from 'next/image';
import { Resizable } from 're-resizable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsAsideRightOpen } from '@/redux/asideRightSlice';
import { RootState } from '@/redux/store';

interface asideRightProps {
  initialAsideRightHandler: string;
}

const AsideRight: React.FC<asideRightProps> = ({
  initialAsideRightHandler,
}) => {
  const dispatch = useDispatch();
  const [asideRightHandler, setAsideRightHandler] = useState(
    JSON.parse(initialAsideRightHandler)
  );

  const isAsideRightOpen = useSelector(
    (state: RootState) => state.asideRight.isAsideRightOpen
  );

  useEffect(() => {
    Cookie.set('asideRightHandler', JSON.stringify(asideRightHandler), {
      expires: 7,
    });
  }, [asideRightHandler]);

  return (
    <Resizable
      size={{
        width: asideRightHandler.width,
        height: '100vh',
      }}
      onResizeStop={(e, direction, ref) => {
        setAsideRightHandler({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          x: 0,
          y: 0,
        });
      }}
      minHeight='100vh'
      minWidth={270}
      maxWidth={320}
      enable={{
        left: true,
      }}
      handleClasses={{
        left: 'hover:border-l-[1px] activeg:border-l-[1px] border-[#727272]',
      }}
      handleStyles={{
        left: {
          left: 0,
        },
      }}
      className={`h-[100vh] w-80 overflow-hidden bg-black p-[16px] text-sm  ${
        !isAsideRightOpen ? 'hidden' : 'hidden lg:block'
      }`}
    >
      <div className='flex h-full flex-col'>
        <div className='mb-8 flex items-center justify-between font-spotify-circular-bold text-spotify-gray'>
          <p className='text-[15px]'>Friend Activity</p>
          <div className='flex items-center justify-center '>
            <button
              className='rounded-full hover:bg-[#1a1a1a]'
              onClick={() => {
                dispatch(setIsAsideRightOpen());
              }}
            >
              <div className='filter-gray p-2 '>
                <div className=' relative h-4 w-4'>
                  <Image
                    src='/svg/add-friend.svg'
                    alt='Friend Activity'
                    layout='fill'
                  ></Image>
                </div>
              </div>
            </button>
            <button
              className='rounded-full hover:bg-[#1a1a1a]'
              onClick={() => {
                dispatch(setIsAsideRightOpen());
              }}
            >
              <div className='filter-gray p-2 '>
                <div className=' relative h-4 w-4'>
                  <Image
                    src='/svg/close-aside-right.svg'
                    alt='Close'
                    layout='fill'
                  ></Image>
                </div>
              </div>
            </button>
            <style jsx>{`
              .filter-gray {
                filter: invert(88%) sepia(2%) saturate(28%) hue-rotate(330deg)
                  brightness(83%) contrast(84%);
              }
              .filter-gray:hover {
                filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(270deg)
                  brightness(104%) contrast(100%);
              }
            `}</style>
          </div>
        </div>
        <div className='mb-6 font-spotify-circular-light text-sm text-[#c6c6c6]'>
          <p className='mb-6'>
            Let friends and followers on Renzify see what you&apos;re listening
            to
          </p>
          <ul className='mb-6 flex flex-col gap-y-4'>
            <li className='flex items-center '>
              <div className='h-full w-auto rounded-full bg-[#333333] p-[13px]'>
                <div className='filter-light-gray relative h-6 w-6'>
                  <Image
                    src='/svg/user.svg'
                    alt='Sample User'
                    layout='fill'
                  ></Image>
                </div>
              </div>
              <div className='filter-gray'>
                <Image
                  src='/svg/description.svg'
                  alt='Sample Description'
                  width={60}
                  height={30}
                ></Image>
              </div>
            </li>
            <li className='flex items-center '>
              <div className='h-full w-auto rounded-full bg-[#333333] p-[13px]'>
                <div className='filter-light-gray relative h-6 w-6'>
                  <Image
                    src='/svg/user.svg'
                    alt='Sample User'
                    layout='fill'
                  ></Image>
                </div>
              </div>
              <div className='filter-gray'>
                <Image
                  src='/svg/description.svg'
                  alt='Sample Description'
                  width={60}
                  height={30}
                ></Image>
              </div>
            </li>
            <li className='flex items-center '>
              <div className='h-full w-auto rounded-full bg-[#333333] p-[13px]'>
                <div className='filter-light-gray relative h-6 w-6'>
                  <Image
                    src='/svg/user.svg'
                    alt='Sample User'
                    layout='fill'
                  ></Image>
                </div>
              </div>
              <div className='filter-gray'>
                <Image
                  src='/svg/description.svg'
                  alt='Sample Description'
                  width={60}
                  height={30}
                ></Image>
              </div>
            </li>
            <style jsx>{`
              .filter-light-gray {
                filter: invert(90%) sepia(0%) saturate(1%) hue-rotate(134deg)
                  brightness(79%) contrast(95%);
              }
              .filter-gray {
                filter: invert(15%) sepia(13%) saturate(11%) hue-rotate(51deg)
                  brightness(102%) contrast(88%);
              }
            `}</style>
          </ul>
          <p>
            Go to Settings &gt; Social and enable &apos;Share my listening
            activity on Renzify.&apos; You can turn this off at any time.
          </p>
        </div>
        <div className='flex items-center justify-center font-spotify-circular-book '>
          <button className='hover:-translate-xy-1 cursor-not-allowed rounded-full bg-white px-12 py-3.5 hover:scale-105 hover:opacity-95'>
            <span className='text-black'>SETTINGS</span>
          </button>
        </div>
      </div>
    </Resizable>
  );
};

export default AsideRight;
