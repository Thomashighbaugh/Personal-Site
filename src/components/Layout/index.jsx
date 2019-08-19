/**
 * Index component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../Footer"
import Header from "../Header"
import "../../styles/main.scss"
import Container from "reactstrap/es/Container"
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
    <Container fluid>
      <Header/>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
           </Helmet>
      <div>
        <main>{children}</main>
<Footer/>
      </div>
    </Container>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
