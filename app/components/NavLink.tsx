'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

const NavLink = ({
  children,
  href,
  className,
  onClick
}: {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <Link onClick={onClick} className={`${className} w-fit relative`} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
