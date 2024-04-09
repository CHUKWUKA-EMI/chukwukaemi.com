import Image from 'next/image';
import profilePicture from '../public/profile-picture-2.png';
import ContactLink from './components/ContactLink';
import SwitchButton from './components/SwitchButton';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full relative font-sans p-8">
      <SwitchButton className="absolute top-8 right-4 xs:right-12" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 px-8 md:px-[6.5rem]">
        <div className="w-full flex flex-col gap-3 col-span-1 items-center md:items-center text-center bg-white dark:bg-gray-800 py-4 rounded-lg">
          <Image
            src={profilePicture}
            alt="avatar"
            priority
            className="rounded-[100%] cursor-pointer object-cover object-bottom dark:bg-gray-500 bg-gray-300 w-32 h-32 xs:w-32 xs:h-32"
          />
          <div className="w-full">
            <p className="w-full text-3xl xs:text-3xl font-medium">Chukwuka Emi</p>
            <p className="w-full text-base xs:text-base font-medium text-gray-500 dark:text-gray-300">
              Senior Software Engineer
            </p>
          </div>
          <div className="w-full py-10 hidden md:flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
            <Link className="hover:underline hover:text-sky-600 dark:hover:text-sky-400" href="/about-me">
              ABOUT ME
            </Link>
            <Link className="hover:underline hover:text-sky-600 dark:hover:text-sky-400" href="/work-experience">
              WORK EXPERIENCE
            </Link>
            <Link className="hover:underline hover:text-sky-600 dark:hover:text-sky-400" href="/projects">
              PROJECTS
            </Link>
          </div>
          <div className="w-full flex items-center justify-center gap-4 py-4 md:py-10">
            <ContactLink link="https://www.linkedin.com/in/chukwuka-emi">
              <svg
                className="w-7 h-7 fill-sky-700 dark:fill-sky-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </ContactLink>
            <ContactLink link="https://github.com/chukwuka-emi">
              <svg
                className="w-7 h-7 dark:fill-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </ContactLink>
            <ContactLink link="mailto:emichukwuka@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 dark:stroke-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </ContactLink>
          </div>
        </div>
        <div className="col-span-2 bg-white dark:bg-gray-800 py-4 rounded-lg"></div>
      </div>
    </main>
  );
}
