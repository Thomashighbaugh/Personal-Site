/**
 * Exists to create the layout for each page when called
 * provides consistency in design
 * */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../Footer';
import Header from '../Header';
import { Helmet } from 'react-helmet';
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
