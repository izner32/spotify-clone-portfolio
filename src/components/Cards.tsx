import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

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

  return (
    <div className=''>
      <div className='py-4 px-8'>
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
                    ? '/Projects'
                    : props.type == 'Certifications'
                    ? '/Certifications'
                    : '/Skills'
                }
                passHref
              >
                SEE ALL
              </Link>
            </a>
          ) : null}
        </div>
        <div className='mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {props.data
            .slice(0, props.cardsLimit ? props.cardsLimit : props.data.length)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col rounded bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)] ${
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
                  <div className=' relative h-40 w-full'>
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
    </div>
  );
}

export default Cards;
