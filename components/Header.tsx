import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { MetaProps } from '../types/layout';
type LayoutProps = {
  customMeta?: MetaProps;
};
const Header = ({ customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header className="bg-opacity-75 bg-gray-50 dark:bg-opacity-75 border-b-2 border-gray-500 dark:border-gray-50 dark:bg-gray-900">
        <div className="px-8">
          <div className="flex items-center justify-between py-1">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
