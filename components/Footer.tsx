import React from 'react';

import { Email, GitHub, Twitter } from './Icons';


const Footer = (): JSX.Element => {
  return (
    <footer className="rounded-t-lg flex min-w-full items-center justify-around mt-5  bg-opacity-95 bg-gray-50 dark:bg-opacity-75 border-t-4 border-gray-400 dark:border-gray-50 dark:bg-gray-900 ">
      <div className="px-2 text-xl mx-auto my-3 flex">
        <a
          href="https://github.com/Thomashighbaugh/Personal-Site/blob/97e44f7ca9d567ee808f85b41d7485467823fcb0/LICENSE"
          className="mx-6"
        >
          {' '}
          &copy;2021{' '}
        </a>
        <a
          className="text-gray-700 dark:text-gray-50 dark:hover:text-gray-500 text-xl"
          href="https://thomasleonhighbaugh.me"
        >
          Thomas Leon Highbaugh
        </a>

        <a className="ml-6 mr-1" href="https://github.com/Thomashighbaugh">
          <GitHub />
        </a>
        <a className="mx-1" href="https://twitter.com/thomashighbaugh">
          <Twitter />
        </a>
        <a className="mx-1" href="mailto:thighbaugh@zoho.com">
          <Email />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
