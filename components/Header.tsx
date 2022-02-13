import React from 'react';

import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

const Header = (): JSX.Element => {
  return (
    <>
      <header className="bg-opacity-50 dark:bg-opacity-90 rounded-b-lg bg-gray-50  border-b-2  border-gray-400 dark:border-gray-50 dark:bg-gray-900 ">
        <div className="lg:px-6 md:px-6 px-0">
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
