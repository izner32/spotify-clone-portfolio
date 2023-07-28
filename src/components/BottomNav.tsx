import Image from 'next/image';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className='fixed bottom-0 grid h-[70px] w-full grid-cols-4 bg-black bg-opacity-50 text-white md:hidden'>
      <Link href='/' passHref>
        <div className='flex flex-col items-center justify-center'>
          <div className='relative h-6 w-6'>
            <Image
              src='/svg/home.svg'
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <p>Home</p>
        </div>
      </Link>
      <Link href='/profile' passHref>
        <div className=' flex flex-col items-center justify-center'>
          <div className='filter-light-gray relative h-6 w-6'>
            <Image
              src='/svg/add-friend.svg'
              alt='Profile'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <p>Profile</p>
        </div>
      </Link>
      <Link href='/skills' passHref>
        <div className='flex flex-col items-center justify-center'>
          <div className='filter-light-gray relative h-6 w-6'>
            <Image
              src='/svg/skills.svg'
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <p>Skills</p>
        </div>
      </Link>
      <Link href='/projects' passHref>
        <div className='flex flex-col items-center justify-center'>
          <div className='filter-light-gray relative h-6 w-6'>
            <Image
              src='/svg/projects.svg'
              alt='Renz'
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
          <p>Projects</p>
        </div>
      </Link>
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
    </div>
  );
}
