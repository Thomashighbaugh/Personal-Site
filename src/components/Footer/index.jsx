//
//The Footer Component
//
import React, { Component, PropTypes } from 'react';
import Container from 'react-bootstrap/Container';
class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <div className="text-center copyright">
            <h3>Thomas Leon Highbaugh</h3>© {new Date().getFullYear()}, Built
            with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
