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
    <footer className="flex flex-wrap mt-32 relative bottom-0 right-0  justify-between items-center w-full text-lg p-2 px-6 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75 border-t-2 border-gray-500 text-gray-500 dark:text-gray-50">
      <span className="flex-1 text-gray-500 dark:text-gray-50">
        <NavLink href="/" text="Thomas Leon Highbaugh" />
      </span>

      <ul className="p-0 list-none flex items-center justify-between border-b-2 border-gray-500 dark:border-gray-50">
        <li className=" text-gray-500 dark:text-gray-50">
          {' '}
          <a
            title="GitHub"
            href="https://github.com/Thomashighbaugh"
            target="_blank"
            rel="noopener"
            className="text-gray-500 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-600"
          >
            <GitHub />
          </a>
        </li>

        <li>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/thomas-leon-highbaugh/"
            target="_blank"
            rel="noopener"
            className="text-gray-500 dark:text-gray-50  hover:text-gray-700 dark:hover:text-gray-600"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          {' '}
          <a
            title="Twitter"
            href="https://twitter.com/thomashighbaugh"
            target="_blank"
            rel="noopener"
            className="text-gray-500 dark:text-gray-50  dark:hover:text-gray-600 hover:text-gray-700"
          >
            <Twitter />
          </a>
        </li>
      </ul>
    </footer>
  );
};
