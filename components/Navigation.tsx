import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-500 dark:text-gray-50 pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-500 dark:text-gray-50 px-6 py-4">About</a>
      </Link>
      <Link href="/projects">
        <a className="text-gray-500 dark:text-gray-50 px-6 py-4">Projects</a>
      </Link>
      <Link href="/blog">
        <a className="text-gray-500 dark:text-gray-50 px-6 py-4">Blog</a>
      </Link>
    </nav>
  );
};

export default Navigation;
