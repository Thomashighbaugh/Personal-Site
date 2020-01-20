/******************************************************************************
 * Index
 *
 *
 * Page that users arrive at, the home or landing page of the site.
 ******************************************************************************/
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet/es/Helmet';
const IndexPage = () => (
  <Layout>
      <SEO
        title="tlh developer portfolio"
        description="The front page of the developer portfolio of Thomas Leon Highbaugh. Featuring artwork by TLH himself."
      />
      <Helmet>


        <title>Developer Portfolio TLH</title>

      </Helmet>
          <div id="home" className="card home-card">
          <hr className="hr-basic" />
          <hr className="hr-basic" />
          <h1 className="card-title">[developer portfolio]</h1>
          <hr className="hr-blue" />
          <h2 className="card-subtitle">thomas leon highbaugh</h2>
      </div>
  </Layout>
);

export default IndexPage;
