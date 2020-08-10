import Link from 'next/link';
import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import PictureSet from '../components/PictureSet/PictureSet';
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
import Project from '../components/Projects/Projects/Generic';
import NADProject from '../components/Projects/Projects/NAD';
import DotfilesProject from '../components/Projects/Projects/Dotfiles';
import OpitxProject from '../components/Projects/Projects/Opitx';

const Projects = () => {
  return (
    <Layout title="Projects">
      <DynamicComponentWithNoSSR>
        <div className="Projects">
          <div className="projects">
            <NADProject />
            <DotfilesProject />
            <OpitxProject />
          </div>
        </div>
      </DynamicComponentWithNoSSR>
    </Layout>
  );
};

export default Projects;
