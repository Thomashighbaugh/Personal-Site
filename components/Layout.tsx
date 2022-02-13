import React from 'react';
import { MetaProps } from '../types/layout';

import Header from './Header';
import Footer from './Footer';
import Head from './Head';
type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://thomasleonhighbaugh.me';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      <main className="justify-around xl:px-24 lg:px-18 md:px-12  px-3 overflow-x-scroll">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
