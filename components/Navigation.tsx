import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Navigation = (): JSX.Element => {
  return (
    <div className="flex align-middle ">
      <Link href="/">
        <a className=" transform rotate-0 hover:-rotate-22 transition-transform ease-linear self-center">
          <Image width="36" height="36" src="/logo.png" />
        </a>
      </Link>
      <nav className="justify-between text-center content-center align-middle items-center py-2 text-2xl text-gray-400 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50">
        <Link href="https://resume-thomas-leon-highbaugh.vercel.app">
          <a className=" px-3 align-middle self-center ">Resume</a>
        </Link>
        <Link href="/projects">
          <a className=" px-3 align-middle self-center ">Projects</a>
        </Link>
        <Link href="/blog">
          <a className=" px-3 align-middle self-center ">Blog</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
