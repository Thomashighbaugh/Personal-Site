//
//The Footer Component
//
import React, { Component, PropTypes } from "react";
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/es/Navbar';
import NavItem from 'react-bootstrap/es/NavItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
class Footer extends Component {
  render() {
    return (
      <footer>
<Container fluid>
  <div className="text-center">
  <h3>Thomas Leon Highbaugh</h3>© {new Date().getFullYear()},
                  Built with
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
</Container>
</footer>
    );
  }
}

export default Footer;
