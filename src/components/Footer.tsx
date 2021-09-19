import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';

const NavLink: FunctionComponent<{
  href: string;
  text: string;
  hasActiveState?: boolean;
}> = ({ href, text, hasActiveState = false }) => {
  const router = useRouter();

  // TODO: Probably a better check to do here
  const isActive = router.pathname.includes(href);

  return (
    <Link href={href}>
      <a
        className={`no-underline text-lg hover:text-gray-600 font-semibold ${
          hasActiveState && isActive ? 'border-b-2 border-gray-600' : ''
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="flex flex-wrap p-5 mt-34 relative bottom-0 right-0  justify-between items-center w-full text-lg p-3 px-6 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75 border-t-2 border-gray-500 text-gray-500 dark:text-gray-50">
      <span className=" text-gray-500 dark:text-gray-50  transform rotate-0 hover:rotate-8 transition-transform ease-linear dark:hover:border-gray-500">
        <NavLink href="/" text=" &copy; 2021 Thomas Leon Highbaugh" />
      </span>

      <div className="p-0 list-none flex ">
        {' '}
        <a
          title="GitHub"
          href="https://github.com/Thomashighbaugh"
          target="_blank"
          rel="noopener"
          className="text-gray-500 dark:text-gray-50 bg-gray-50 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-75 border-2 border-gray-500 dark:border-gray-50  transform rotate-0 hover:rotate-22 transition-transform ease-linear dark:hover:text-gray-600 hover:text-gray-700 text-gray-500 dark:text-gray-50 flex-1 ml-3 p-1 dark:hover:border-gray-500 rounded-lg"
        >
          <GitHub size="32" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/thomas-leon-highbaugh/"
          target="_blank"
          rel="noopener"
          className="text-gray-500 dark:text-gray-50 bg-gray-50 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-75 border-2 border-gray-500 dark:border-gray-50  dark:hover:text-gray-600 hover:text-gray-700 text-gray-500  transform rotate-0 hover:-rotate-22 transition-transform ease-linear dark:text-gray-50 flex-1 ml-3  p-1 dark:hover:border-gray-500 rounded-lg"
        >
          <Linkedin size="32" />
        </a>{' '}
        <a
          title="Twitter"
          href="https://twitter.com/thomashighbaugh"
          target="_blank"
          rel="noopener"
          className="text-gray-500 dark:text-gray-50 bg-gray-50 bg-opacity-50 dark:bg-gray-800  transform rotate-0 hover:-rotate-22 transition-transform ease-linear dark:hover:border-gray-500 dark:bg-opacity-75 border-2 border-gray-500 dark:border-gray-50  dark:hover:text-gray-600 hover:text-gray-700  text-gray-500 dark:text-gray-50 flex-1 ml-3 p-1 rounded-lg"
        >
          <Twitter size="32" />
        </a>
      </div>
    </footer>
  );
};
