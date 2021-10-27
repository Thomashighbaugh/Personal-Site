import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Thomas Leon Highbaugh',
      }}
    ><div className="bg-gray-50 bg-opacity-95 dark:bg-gray-900 mt-12 p-4 rounded-2xl dark:bg-opacity-95 border-4 border-gray-400 dark:border-gray-50">
      <h1>About Page</h1>
      <p>My name is Thomas Leon Highbaugh, but I bet you knew that by now. I live in beautiful San Francisco, California. Currently I am a freelance, full-stack web developer and Linux system administrator</p>
    </div>
    </Layout>
  );
};

export default About;
