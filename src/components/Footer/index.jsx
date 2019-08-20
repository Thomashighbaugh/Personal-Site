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
          <Row>
            <Navbar>
              <Col>
                <Navbar.Text>
                  <h3>Thomas Leon Highbaugh</h3>© {new Date().getFullYear()},
                  Built with
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Navbar.Text>
              </Col>
              <div className="btn-group">
                <Col>
                  <NavItem>
                    <a className="nav-btn" href="https://netlify.com">
                      Blog
                    </a>
                  </NavItem>
                </Col>
                <Col>
                  <NavItem>
                    <a className="nav-btn" href="https://netlify.com">
                      Gallery
                    </a>
                  </NavItem>
                </Col>
              </div>
            </Navbar>
          </Row>
        </nav>
      </footer>
    );
  }
}

export default Footer;
