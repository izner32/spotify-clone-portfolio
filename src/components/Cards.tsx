import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useMeasure } from 'react-use';

import CardModal from './CardModal';

interface Props {
  type: string;
  cardsLimit: number;
  data: {
    title: string;
    'sub-title': string;
    tools: string[];
    'cover-image': string;
    'card-image': string;
    'card-link': string;
  }[];
}

function Cards(props: Props) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardsRef, { width }] = useMeasure<HTMLDivElement>();

  return (
    <>
      {/* desktop */}
      <div className=''>
        <div ref={cardsRef} className='hidden py-4 px-8 md:block'>
          <div className='flex items-center justify-between font-spotify-circular-bold'>
            <p className='text-2xl'>
              {props.type == 'Projects'
                ? 'Projects'
                : props.type == 'Certifications'
                ? 'Certifications'
                : 'Skills'}
            </p>
            {props.cardsLimit ? (
              <a className='text-xs text-spotify-gray hover:underline'>
                <Link
                  href={
                    props.type == 'Projects'
                      ? '/projects'
                      : props.type == 'Certifications'
                      ? '/certifications'
                      : '/skills'
                  }
                  passHref
                >
                  SEE ALL
                </Link>
              </a>
            ) : null}
          </div>
          <div
            className={`mt-5 grid gap-x-5 gap-y-4  ${
              width > 2200
                ? 'grid-cols-9'
                : width > 1900
                ? 'grid-cols-8'
                : width > 1600
                ? 'grid-cols-7'
                : width > 1300
                ? 'grid-cols-6'
                : width > 1000
                ? 'grid-cols-5'
                : width > 700
                ? 'grid-cols-4'
                : 'grid-cols-3'
            }`}
          >
            {props.data
              .slice(
                0,
                width > 2200 && props.cardsLimit
                  ? props.cardsLimit + 4
                  : width > 1900 && props.cardsLimit
                  ? props.cardsLimit + 3
                  : width > 1600 && props.cardsLimit
                  ? props.cardsLimit + 2
                  : width > 1300 && props.cardsLimit
                  ? props.cardsLimit + 1
                  : width > 1000 && props.cardsLimit
                  ? props.cardsLimit
                  : width > 700 && props.cardsLimit
                  ? props.cardsLimit - 1
                  : width > 500 && props.cardsLimit
                  ? props.cardsLimit - 2
                  : props.data.length
              )
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex aspect-square flex-col rounded bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)] ${
                      props.type == 'Skills'
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer'
                    }`}
                    onClick={() => {
                      if (
                        props.type == 'Projects' ||
                        props.type == 'Certifications'
                      ) {
                        setCardIndex(index);
                        setIsCardOpen(true);
                      }
                    }}
                  >
                    <div className=' relative h-full w-full'>
                      <Image
                        src={props.data[index]['cover-image']}
                        alt='Renz'
                        layout='fill'
                        objectFit='cover'
                      ></Image>
                    </div>
                    <div className='pt-4'>
                      <p className='h-[27px] overflow-hidden text-ellipsis whitespace-nowrap font-spotify-circular-bold text-base'>
                        <span>{item.title}</span>
                      </p>
                      <p className='h-[33px] font-spotify-circular-light text-sm leading-tight  text-spotify-gray line-clamp-2 '>
                        {item['sub-title']}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='font-spotify-circular-bold md:hidden'>
        {props.cardsLimit ? (
          <div>
            <div className='flex items-end justify-between'>
              <p className=' flex h-12 items-end px-4 text-lg'>
                {props.type == 'Projects'
                  ? 'Projects'
                  : props.type == 'Certifications'
                  ? 'Certifications'
                  : 'Skills'}
              </p>
              {props.cardsLimit ? (
                <a className='mr-4 mb-2 h-fit text-xs text-spotify-gray hover:underline'>
                  <Link
                    href={
                      props.type == 'Projects'
                        ? '/projects'
                        : props.type == 'Certifications'
                        ? '/certifications'
                        : '/skills'
                    }
                    passHref
                  >
                    SEE ALL
                  </Link>
                </a>
              ) : null}
            </div>
            <div className='flex gap-x-4 overflow-x-scroll px-4 py-1.5'>
              {props.data
                .slice(
                  0,
                  props.cardsLimit ? props.cardsLimit : props.data.length
                )
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='pb-5'
                      onClick={() => {
                        if (
                          props.type == 'Projects' ||
                          props.type == 'Certifications'
                        ) {
                          setCardIndex(index);
                          setIsCardOpen(true);
                        }
                      }}
                    >
                      <div className='relative h-44 w-44'>
                        <Image
                          src={item['card-image']}
                          alt='Renz'
                          layout='fill'
                          objectFit='cover'
                        ></Image>
                      </div>
                      <p className='mt-2 flex justify-center text-center text-sm'>
                        {item.title}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div className='w-fit'>
            <div className='flex flex-wrap justify-center'>
              {props.data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='m-4 w-44  pb-5'
                    onClick={() => {
                      if (
                        props.type == 'Projects' ||
                        props.type == 'Certifications'
                      ) {
                        setCardIndex(index);
                        setIsCardOpen(true);
                      }
                    }}
                  >
                    <div className='relative h-44 w-44'>
                      <Image
                        src={item['card-image']}
                        alt='Renz'
                        layout='fill'
                        objectFit='cover'
                      ></Image>
                    </div>
                    <p className='mt-2 flex justify-center text-center text-xs'>
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* display selected project */}
      {isCardOpen ? (
        <div>
          <div className='fixed top-0 left-0 bottom-0 right-0 z-10 h-full w-screen bg-black opacity-[60%]'></div>
          <CardModal
            type={props.type}
            data={props.data[cardIndex]}
            isCardOpen={isCardOpen}
            setIsCardOpen={setIsCardOpen}
          ></CardModal>
        </div>
      ) : null}
    </>
  );
}

export default Cards;
