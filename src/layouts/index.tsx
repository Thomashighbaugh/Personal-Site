import Head from 'next/head';
import React from 'react';

import ContentWrapper from '../components/ContentWrapper';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="m-0 p-0 min-w-full">
      <Head>
        <title>Thomas Leon Highbaugh - Full Stack Developer</title>

        <meta
          name="description"
          content="Thomas Leon Highbaugh - Full Stack Developer"
        />
      </Head>

      <Header />
      <main className="min-h-75p ">
        <ContentWrapper>{children}</ContentWrapper>
      </main>
      <Footer />
    </div>
  );
};
