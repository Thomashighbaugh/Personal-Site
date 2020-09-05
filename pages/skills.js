import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import Accordion from '../components/Accordion/Accordion';
import React from 'react';

export default function Skills() {
  return (
    <Layout title="Skills">
      <div id="skills">
        <PageTitle
          title="Skills"
          subtitle="Technical Skills I Have Cultivated Along the Way"
        />
        <Accordion />
      </div>
    </Layout>
  );
}
