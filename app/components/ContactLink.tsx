'use client';

import React from 'react';
import Link from 'next/link';

const ContactLink = ({ children, link }: { children: React.ReactNode; link: string }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className="w-fit h-fit p-1 shadow-sm shadow-gray-700 dark:shadow-none rounded-[100%] outline-none hover:bg-gray-200 dark:hover:bg-gray-600 ring-1 ring-gray-400 dark:ring-gray-300"
    >
      {children}
    </Link>
  );
};

export default ContactLink;
