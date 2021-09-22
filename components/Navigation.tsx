import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Navigation = (): JSX.Element => {
  return (
    <div className="flex align-middle ">
      <Link href="/">
        <a className=" transform rotate-0 hover:-rotate-22 transition-transform ease-linear   ">
          <Image width="48" height="48" src="/logo.png" />
        </a>
      </Link>
      <nav className="justify-between align-middle items-center py-2 text-2xl">
        <Link href="/about">
          <a className=" px-6 py-6">About</a>
        </Link>
        <Link href="/projects">
          <a className=" px-6 py-6">Projects</a>
        </Link>
        <Link href="/blog">
          <a className=" px-6 py-6">Blog</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
