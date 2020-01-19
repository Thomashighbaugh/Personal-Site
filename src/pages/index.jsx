/*
 * This page serves as the front page of the site. I opted to not overload the user with
 * information from the onset, instead using some of my art and a few transitions to make
 * the page attractive to users, demonstrative of my skillset and as a place to showcase my art
 *
 */
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
