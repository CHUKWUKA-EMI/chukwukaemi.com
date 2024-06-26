'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

const DarkThemeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full fill-gray-300 text-gray-300 dark:block hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
};

const LightThemeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full text-gray-300 dark:hidden block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};

interface IProps {
  className?: string;
}

const ThemeToggleButton = ({ className }: IProps) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      role="button"
      onClick={toggleTheme}
      className={`${className} cursor-pointer flex items-center justify-between gap-1 ring-1 ring-gray-500 bg-gray-600 dark:ring-gray-600 h-fit w-fit rounded-3xl`}
    >
      <button
        className={`rounded-[100%] w-7 h-7 xs:w-7 xs:h-7 p-1 dark:bg-gray-800 bg-transparent`}
      >
        <LightThemeIcon />
        <DarkThemeIcon />
      </button>
    </div>
  );
};

export default ThemeToggleButton;
