/******************************************************************************
 * 404
 *
 *
 * Page for broken links
 *******************************************************************************/
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet/es/Helmet';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/c38251b988.css"
      />

      <script src="https://use.fontawesome.com/c38251b988.js" />
      <title>404 ERROR: NOT FOUND</title>
    </Helmet>

    <SEO title="404: Not found" />
    <div className="card">
    <h1 className="card-title">404! NOT FOUND !404</h1>
    <p className="card-text">
      It seems the page you navigated to does not actually exist! If you believe
      you reached this page in error, please send me an email so I can get it
      fixed! I appreciate it!
    </p>
    <p>
      <em className="card-subtitle">TLH</em>
    </p>
    </div>
  </Layout>
);

export default NotFoundPage;
