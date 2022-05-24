import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  certificationsLimit: number;
}

function Skills(props: Props) {
  const section: { title: string; 'sub-title': string; image: string }[] = [
    {
      title: 'AI Accountability Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'AI for Cybersecurity',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'AI Foundations: Machine Learning',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'AI Foundations: Neural Network',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'AI Foundations: Thinking Machines',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Become a Web Developer',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'C Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'C++ Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'CSS Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'CSS: Selectors',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Data Engineering for Everyone',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'Data Warehouse Fundamentals',
      'sub-title': '',
      image: '/images/certification/udemy-certification.png',
    },
    {
      title: 'Essential Math for Machine Learning',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Express Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Git Essential Training: The Basics',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Git: Branches, Merges, and Remote',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Introduction to Airflow on Python',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'Introduction to Scala',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'Introduction to Shell',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'Introduction to Data Engineering',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'Javascript Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Javascript: Classes',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Javascript: Scope',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Javascript: Prototype',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'HTML Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Learning GraphQL',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Learning MySQL Development',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Learning REST APIs',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Learning SQL Programming',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Learning XAI: Explainable Artificial Intelligence',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Master the fundamentals of AI and Machine Learning',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'NodeJS Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Programming Foundations: Databases',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Python 3 Master Course',
      'sub-title': '',
      image: '/images/certification/udemy-certification.png',
    },
    {
      title: 'Python for Data Visualization',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'React: Creating and Hosting a Full-Stack Site',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'React.js Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Search Techniques for Web Developer',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Streamlined Data Ingestion with Pandas',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
    {
      title: 'Tailwind CSS Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
    },
    {
      title: 'Writing Efficient Python Code',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
    },
  ];

  return (
    <div className=''>
      <div className='py-4 px-8'>
        <div className='flex items-center justify-between font-spotify-circular-bold'>
          <p className='text-2xl'>Certifications</p>
          {props.certificationsLimit ? (
            <a className='text-xs text-spotify-gray hover:underline'>
              <Link href='/certifications' passHref>
                SEE ALL
              </Link>
            </a>
          ) : null}
        </div>
        <div className='mt-5 grid grid-cols-5 gap-x-5 gap-y-4'>
          {section
            .slice(
              0,
              props.certificationsLimit
                ? props.certificationsLimit
                : section.length
            )
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col rounded  bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)]'
                >
                  <div className='flex justify-center overflow-hidden rounded-md'>
                    <div className=' relative h-40 w-full'>
                      <Image
                        src={item.image}
                        alt='Renz'
                        layout='fill'
                        objectFit='cover'
                      ></Image>
                    </div>
                  </div>
                  <div className='pt-4'>
                    <p className='h-[27px] overflow-hidden text-ellipsis whitespace-nowrap font-spotify-circular-bold text-base'>
                      <span>{item.title}</span>
                    </p>
                    <p className='h-8 font-spotify-circular-light text-sm text-spotify-gray '>
                      <span>
                        {item.image
                          .split('/')
                          [item.image.split('/').length - 1].slice(0, -4) ===
                        'linkedin-certification'
                          ? 'By LinkedIn Learning'
                          : item.image
                              .split('/')
                              [item.image.split('/').length - 1].slice(
                                0,
                                -4
                              ) === 'udemy-certification'
                          ? 'By Udemy'
                          : 'By DataCamp'}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
