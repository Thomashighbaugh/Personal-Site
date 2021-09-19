import Head from 'next/head';
import React from 'react';

import ContentWrapper from '../components/ContentWrapper';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="m-0 p-0 min-w-full overflow-y-scroll">
      <Head>
        <title>Thomas Leon Highbaugh - Full Stack Developer</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Thomas Leon Highbaugh - Full Stack Developer"
        />
      </Head>

      <Header />

      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </div>
  );
};
