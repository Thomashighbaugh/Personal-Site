import React from 'react';

import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

const Header = (): JSX.Element => {
  return (
    <>
      <header className="bg-opacity-50 dark:bg-opacity-90 bg-gray-50  border-b-2  border-gray-400 dark:border-gray-200  dark:bg-gray-900 ">
        <div className="lg:px-3 md:px-2 px-0">
          <div className="flex items-center justify-between flex-row">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
