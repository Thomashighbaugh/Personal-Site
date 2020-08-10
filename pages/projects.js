import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import Spinner from '../components/Spinner/Spinner';
/* eslint-disable */
/* eslint-disable */
const DynamicComponentWithNoSSR = dynamic(
  () => {
    return import('../components/ScrollMagic/scrollmagic');
  },
  { loading: () => <Spinner />, ssr: false },
);
/* eslint-enable */
import React from 'react';
import DotfilesProject from '../components/Projects/Projects/Dotfiles';
import OpitxProject from '../components/Projects/Projects/Opitx';
import TimeIsNighProject from '../components/Projects/Projects/TimeIsNigh';

const Projects = () => {
  return (
    <Layout title="Projects">
      <DynamicComponentWithNoSSR>
        <div className="Projects">
          <div className="projects">
            <TimeIsNighProject />
            <DotfilesProject />
            <OpitxProject />
          </div>
        </div>
      </DynamicComponentWithNoSSR>
    </Layout>
  );
};

export default Projects;
