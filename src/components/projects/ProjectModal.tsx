import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  data: {
    title: string;
    'sub-title': string;
    tools: string[];
    image: string;
    projectLink: string;
  };
  isProjectOpen: boolean;
  setIsProjectOpen: Dispatch<SetStateAction<boolean>>;
};

const ProjectModal: React.FC<Props> = (props) => {
  return (
    <div className='fixed top-1/2 left-1/2 z-30 h-80 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-spotify-bg-gray bg-black'>
      <div className='absolute -top-3 -right-3 z-20 h-8 w-8 rounded-full bg-white '>
        <button
          className='h-full w-full rounded-full'
          onClick={() => props.setIsProjectOpen(false)}
        ></button>
      </div>
      <div className='flex h-12 w-auto items-center justify-center rounded-t-md bg-[#1ED760] font-spotify-circular-book text-black'>
        <p>{props.data.title}</p>
      </div>
      <div className='flex h-[272px] w-full'>
        <div className='flex w-72 justify-center overflow-hidden p-4'>
          <div className='relative h-full w-full'>
            <Image
              src={props.data.image}
              alt='Project Image'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </div>
        <div className=' relative w-[213px] py-4 px-2 font-spotify-circular-light text-spotify-gray'>
          <p className='mb-3 h-16 overflow-y-scroll text-xs'>
            {props.data['sub-title']}
          </p>

          <ul className='h-28 overflow-y-scroll text-sm'>
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
          <a href={props.data.projectLink} target='_blank' rel='noreferrer'>
            <button className='absolute bottom-[16px] left-[20px] mx-auto '>
              <div className='w-[175px] whitespace-nowrap rounded-full bg-white  p-1 font-spotify-circular-book text-base text-black'>
                Project Link
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
