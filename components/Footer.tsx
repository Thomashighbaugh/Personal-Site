import React from 'react';

import { Email, GitHub, Twitter } from './Icons';

const Footer = (): JSX.Element => {
  return (
    <footer className="relative bottom-0 flex min-w-full flex-row bg-opacity-50 dark:bg-opacity-90 bg-gray-50  border-t-2 border-gray-400 dark:border-gray-200  dark:bg-gray-900 justify-between ">
      <div className="self-center mx-8">
        <a
          className="text-gray-700 dark:text-gray-50 dark:hover:text-gray-500  self-center md:text-sm text-xs"
          href="https://thomasleonhighbaugh.me"
        >
          Thomas Leon Highbaugh &copy;2023{' '}
        </a>
      </div>
      <div className="self-center">
        <a className="mr-1" href="https://github.com/Thomashighbaugh">
          <GitHub />
        </a>
        <a className="mx-1" href="https://twitter.com/thomashighbaugh">
          <Twitter />
        </a>
        <a className="mx-1 mr-8" href="mailto:me@thomasleonhighbaugh.me">
          <Email />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
