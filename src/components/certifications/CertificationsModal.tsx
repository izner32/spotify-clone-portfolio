import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  data: {
    title: string;
    'sub-title': string;
    image: string;
    certificateImage: string;
    certificateLink: string;
  };
  isCertificationOpen: boolean;
  setIsCertificationOpen: Dispatch<SetStateAction<boolean>>;
};

const ProjectModal: React.FC<Props> = (props) => {
  return (
    <div className='fixed top-1/2 left-1/2 z-30 h-fit w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-spotify-bg-gray bg-black'>
      <div className='absolute -top-3 -right-3 z-20 h-8 w-8 rounded-full bg-white '>
        <button
          className='h-full w-full rounded-full'
          onClick={() => props.setIsCertificationOpen(false)}
        ></button>
      </div>
      <div className='flex h-12 w-auto items-center justify-center rounded-t-md bg-[#1ED760] font-spotify-circular-book text-black'>
        <p>{props.data.title}</p>
      </div>
      <div className='flex h-[272px] w-full'>
        <div className='flex w-full justify-center overflow-hidden p-4'>
          <div className='relative h-full w-full'>
            <Image
              src={props.data.certificateImage}
              alt='Project Image'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
      </div>
      <a
        href={props.data.certificateLink}
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
  );
};

export default ProjectModal;
