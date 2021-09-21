import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className=" pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className=" px-6 py-4">About</a>
      </Link>
      <Link href="/projects">
        <a className=" px-6 py-4">Projects</a>
      </Link>
      <Link href="/blog">
        <a className=" px-6 py-4">Blog</a>
      </Link>
    </nav>
  );
};

export default Navigation;
