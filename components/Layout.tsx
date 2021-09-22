import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import { Email, GitHub, Twitter } from './Icons';
import Header from './Header';
import Footer from './Footer';
type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://thomasleonhighbaugh.me';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className="justify-around mx-16p ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
