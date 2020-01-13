//
//The Footer Component
//
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
class Footer extends Component {
  render() {
    return (
      <footer className="footer container-fluid">
          <div>
            <h3>Thomas Leon Highbaugh © {new Date().getFullYear()}</h3>
          </div>
      </footer>
    );
  }
}

export default Footer;
