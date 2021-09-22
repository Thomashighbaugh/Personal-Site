import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { Email, GitHub, Twitter } from './Icons';
import Image from 'next/image';
type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://thomasleonhighbaugh.me';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="bg-opacity-75 bg-gray-50 dark:bg-opacity-75 border-b-2 border-gray-500 dark:border-gray-50 dark:bg-gray-900">
        <div className="px-8 mx-auto">
          <div className="flex items-center justify-between py-2">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 min-h-screen mx-auto">
          {children}
        </div>
      </main>
      <footer className="py-8 flex min-w-full items-center justify-around mt-1 bg-opacity-75 bg-gray-50 dark:bg-opacity-50 border-t-2 border-gray-500 dark:border-gray-50 dark:bg-gray-900">
        <div className="px-8 mx-auto flex">
          <a
            href="https://github.com/Thomashighbaugh/Personal-Site/blob/97e44f7ca9d567ee808f85b41d7485467823fcb0/LICENSE"
            className="mx-6"
          >
            {' '}
            &copy;2021{' '}
          </a>
          <a
            className="text-gray-700 dark:text-gray-50 dark:hover:text-gray-500"
            href="https://github.com/Thomashighbaugh"
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
    </>
  );
};

export default Layout;
