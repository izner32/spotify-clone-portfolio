import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import CertificationsModal from '@/components/certifications/CertificationsModal';

interface Props {
  certificationsLimit: number;
}

function Certifications(props: Props) {
  const [certificationIndex, setCertificationIndex] = useState(0);
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);
  const section: {
    title: string;
    'sub-title': string;
    image: string;
    certificateImage: string;
    certificateLink: string;
  }[] = [
    {
      title: 'CSS Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
      certificateImage:
        '/images/certification/certification-images/css-essential-training.png',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/d4bfabd8616106e5e8dd9e5628021f5740b5361fed5535b5506ec38a068d4762?trk=share_certificate',
    },
    {
      title: 'Data Engineering for Everyone',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
      certificateImage:
        '/images/certification/certification-images/data-engineering-for-everyone.png',
      certificateLink:
        'https://www.datacamp.com/statement-of-accomplishment/course/d71a65f0b1955f33f3ce90e28c97de38aa07d55f',
    },
    {
      title: 'Data Warehouse Fundamentals',
      'sub-title': '',
      image: '/images/certification/udemy-certification.png',
      certificateImage:
        '/images/certification/certification-images/data-warehouse-fundamentals-for-beginners.png',
      certificateLink:
        'https://www.udemy.com/certificate/UC-45c5938e-03b8-4c3a-9ece-f0a865ab3665/',
    },
    {
      title: 'Introduction to Airflow in Python',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
      certificateImage:
        '/images/certification/certification-images/introduction-to-airflow-in-python.png',
      certificateLink:
        'https://www.datacamp.com/statement-of-accomplishment/course/ebb89127a715dcf5575fc9bb8e0f231bc48c7cfe',
    },
    {
      title: 'Introduction to Scala',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
      certificateImage:
        '/images/certification/certification-images/introduction-to-scala.png',
      certificateLink:
        'https://www.datacamp.com/statement-of-accomplishment/course/af050e64c49b222b93f176c047b290e55647a7b3',
    },
    {
      title: 'Introduction to Shell',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
      certificateImage:
        '/images/certification/certification-images/introduction-to-shell.png',
      certificateLink:
        'https://www.datacamp.com/statement-of-accomplishment/course/8ff9edd82d73b5ed674a2455db3d425899598bd4',
    },
    {
      title: 'Javascript Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
      certificateImage:
        '/images/certification/certification-images/javascript-essential-training.png',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/beacff158979ca3164e13003d0f8f2530a9c71ff222c8282fe0068096119aa9c?trk=share_certificate',
    },
    {
      title: 'HTML Essential Training',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
      certificateImage:
        '/images/certification/certification-images/html-essential-traning.png',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/bed26215aef59f2cf7515de98788fda45d6b6f6d9d012ee91c8794ae4668fd62?trk=share_certificate',
    },
    {
      title: 'Learning SQL Programming',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
      certificateImage:
        '/images/certification/certification-images/learning-sql-programming.png',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/787b0a9ca788ab90587ae4a2102ea36e4bd571d08332284897ccee0ae236a480?trk=share_certificate',
    },
    {
      title: 'Programming Foundations: Databases',
      'sub-title': '',
      image: '/images/certification/linkedin-certification.png',
      certificateImage:
        '/images/certification/certification-images/programming-foundation-database.png',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/489095518945945a05e1a92a3aba7b2dcb8ed7fb5bd573a332af0b2873b7ae9d?trk=share_certificate',
    },
    {
      title: 'Python 3 Master Course',
      'sub-title': '',
      image: '/images/certification/udemy-certification.png',
      certificateImage:
        '/images/certification/certification-images/python-3-master-course.png',
      certificateLink:
        'https://www.udemy.com/certificate/UC-b7e621b2-0ab7-418b-9704-6a28adabfa90/',
    },
    {
      title: 'Streamlined Data Ingestion with Pandas',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
      certificateImage:
        '/images/certification/certification-images/streamlined-data-ingestion.png',
      certificateLink:
        'https://www.datacamp.com/statement-of-accomplishment/course/88c714a39707105410b688221f3e2abd5e957f9b',
    },
    {
      title: 'Writing Efficient Python Code',
      'sub-title': '',
      image: '/images/certification/datacamp-certification.png',
      certificateImage:
        '/images/certification/certification-images/writing-efficient-python-code.png',
      certificateLink:
        'https://www.datacamp.com/statement-of-accomplishment/course/dc2e82c2e2a0a97162d313dfd556822de50616c7',
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
        <div className='mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
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
                  className='flex cursor-pointer flex-col  rounded bg-[rgb(24,24,24)] p-4 hover:bg-[rgb(38,38,38)]'
                  onClick={() => {
                    setCertificationIndex(index);
                    setIsCertificationOpen(true);
                  }}
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

      {/* display selected certification */}
      {isCertificationOpen ? (
        <div>
          <div className='fixed top-0 left-0 bottom-0 right-0 z-10 h-full w-screen bg-black opacity-[60%]'></div>
          <CertificationsModal
            data={section[certificationIndex]}
            isCertificationOpen={isCertificationOpen}
            setIsCertificationOpen={setIsCertificationOpen}
          ></CertificationsModal>
        </div>
      ) : null}
    </div>
  );
}

export default Certifications;
