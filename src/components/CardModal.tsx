import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  type: string;
  data: {
    title: string;
    'sub-title': string;
    tools: string[];
    'cover-image': string;
    'card-image': string;
    'card-link': string;
  };
  isCardOpen: boolean;
  setIsCardOpen: Dispatch<SetStateAction<boolean>>;
};

const CardModal: React.FC<Props> = (props) => {
  return props.type == 'Projects' ? (
    <div className='fixed top-1/2 left-1/2 z-30 w-[300px] -translate-x-1/2 -translate-y-1/2  rounded-md bg-spotify-bg-gray bg-black md:h-80 md:w-[500px]'>
      <div className='absolute -top-3 -right-3 z-20 h-8 w-8 rounded-full bg-white '>
        <button
          className='h-full w-full rounded-full'
          onClick={() => props.setIsCardOpen(false)}
        ></button>
      </div>
      <div className='flex h-12 w-auto items-center justify-center rounded-t-md bg-[#1ED760] text-center font-spotify-circular-book text-black'>
        <p>{props.data.title}</p>
      </div>
      <div className='flex h-[400px] w-full flex-col md:h-[272px]   md:flex-row'>
        <div className='flex w-full justify-center overflow-hidden p-4 md:w-72'>
          <div className='relative h-[150px] w-full md:h-full'>
            <Image
              src={props.data['cover-image']}
              alt='Project Image'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
        <div className=' relative w-full py-4 px-2 font-spotify-circular-light text-spotify-gray md:w-[213px]'>
          <p className='mx-2 mb-3 overflow-y-scroll text-xs md:mx-0 md:h-16'>
            {props.data['sub-title']}
          </p>

          <ul className='h-36 overflow-y-scroll text-sm md:h-28'>
            {props.data.tools.map((item, index) => {
              return (
                <li
                  key={index}
                  className='float-left m-1 w-fit rounded-md bg-[#333333] py-1 px-2'
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <a href={props.data['card-link']} target='_blank' rel='noreferrer'>
            <button className='absolute bottom-[16px] right-[20px] mx-auto md:left-[20px] '>
              <div className='w-[175px] whitespace-nowrap rounded-full bg-white  p-1 font-spotify-circular-book text-base text-black'>
                Project Link
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  ) : props.type == 'Certifications' ? (
    <div className='fixed top-1/2 left-1/2 z-30 h-fit w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-spotify-bg-gray bg-black md:w-[500px]'>
      <div className='absolute -top-3 -right-3 z-20 h-8 w-8 rounded-full bg-white '>
        <button
          className='h-full w-full rounded-full'
          onClick={() => props.setIsCardOpen(false)}
        ></button>
      </div>
      <div className='flex h-12 w-auto items-center justify-center rounded-t-md bg-[#1ED760] font-spotify-circular-book text-black'>
        <p>{props.data.title}</p>
      </div>
      <div className='flex h-[272px] w-full'>
        <div className='flex w-full justify-center overflow-hidden p-4'>
          <div className='relative h-full w-full'>
            <Image
              src={props.data['card-image']}
              alt='Project Image'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
      </div>
      <a
        href={props.data['card-link']}
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-center pb-4'
      >
        <button className='flex items-center justify-center '>
          <div className='w-[175px] whitespace-nowrap rounded-full bg-white  p-1 font-spotify-circular-book text-base text-black'>
            Certification Link
          </div>
        </button>
      </a>
    </div>
  ) : null;
};

export default CardModal;
