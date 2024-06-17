'use client';

import ContactLink from './ContactLink';
import NavLink from './NavLink';
import Image from 'next/image';
import { LinkedInIcon, GitHubIcon, MailIcon } from './SVGIcon';
import profilePicture from '../../public/profile-picture-2.png';
import { routes } from '../utils/routes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const SideBar = () => {
  const router = useRouter();
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    setHash(hash);
  }, []);

  return (
    <div className="w-full">
      <Image
        src={profilePicture}
        alt="avatar"
        priority
        className="rounded-[100%] mx-auto cursor-pointer object-cover object-bottom dark:bg-gray-500 bg-gray-300 w-28 h-28 md:w-32 md:h-32 mb-5"
      />
      <ThemeToggleButton className="fixed top-8 xs:top-[3.5rem] sm:top-[4.5rem]" />
      <div className="w-full mb-5">
        <p className="w-full text-3xl xs:text-3xl font-medium">Chukwuka Emi</p>
        <p className="w-full text-base xs:text-base font-medium text-gray-500 dark:text-gray-300">
          Senior Software Engineer (
          <small className="text-base font-normal">
            Cloud, Serverless, Distributed Computing
          </small>
          )
        </p>
      </div>
      <div className="w-full py-10 hidden md:flex flex-col items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
        {routes.map((route) => (
          <NavLink
            onClick={() => {
              setHash(route.hash);
              router.push(route.hash);
            }}
            key={route.hash}
            className={`${route.hash === hash ? 'link-underline dark:text-amber-400 text-amber-600' : ''} uppercase hover:link-underline`}
            href={route.hash}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-4 py-4 md:py-10">
        <ContactLink link="https://www.linkedin.com/in/chukwuka-emi">
          <LinkedInIcon />
        </ContactLink>
        <ContactLink link="https://github.com/chukwuka-emi">
          <GitHubIcon />
        </ContactLink>
        <ContactLink link="mailto:emichukwuka@gmail.com">
          <MailIcon />
        </ContactLink>
      </div>
    </div>
  );
};

export default SideBar;
