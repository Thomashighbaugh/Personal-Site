//
//The Footer Component
//
import React, { Component, PropTypes } from "react";
import { Link } from "gatsby";
import Navbar from 'react-bootstrap/es/Navbar';
import NavItem from 'react-bootstrap/es/NavItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
            <Navbar>
              <Col md={{ span: 5, offset: 2 }}>
                <Navbar.Text >
                  <h3>Thomas Leon Highbaugh</h3>© {new Date().getFullYear()},
                  Built with
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Navbar.Text>
              </Col>
              <Row className="btn-group">
                <Col>
                  <h4>More by [tlh]</h4>
                </Col>
                <Col>
                  <NavItem className="nav-foot">
                    <a className="nav-btn"  href="https://netlify.com">
                      Blog
                    </a>
                  </NavItem>
                </Col>
                <Col>
                  <NavItem className="nav-foot">
                    <a className="nav-btn" href="https://netlify.com">
                      Gallery
                    </a>
                  </NavItem>
                </Col>
              </Row>
            </Navbar>
        </nav>
      </footer>
    );
  }
}

export default Footer;
