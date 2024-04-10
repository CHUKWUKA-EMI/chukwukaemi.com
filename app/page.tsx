import Image from 'next/image';
import profilePicture from '../public/profile-picture-2.png';
import ContactLink from './components/ContactLink';
import SwitchButton from './components/ThemeToggleButton';
import { GitHubIcon, LinkedInIcon, MailIcon } from './components/SVGIcon';
import NavLink from './components/NavLink';
import SideBar from './components/SideBar';
// import { headers } from 'next/headers';

export default function Home() {
  return (
    <main className="w-full font-sans xs:py-4 md:py-8 xs:px-4 sm:px-8">
      <div className="w-full relative grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16 xs:pt-8 lg:px-[6.5rem]">
        <SwitchButton className="fixed top-4 xs:top-[3.5rem] sm:top-[4.5rem] right-[5%] sm:right-[6%] lg:right-[12%]" />
        <div className="w-full flex flex-col gap-3 md:col-span-1 items-center md:items-center text-center bg-white dark:bg-gray-800 py-4 xs:rounded-lg">
          <SideBar />
        </div>
        <div className="md:col-span-2 bg-white dark:bg-gray-800 py-4 xs:rounded-lg"></div>
      </div>
    </main>
  );
}
