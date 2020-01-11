//
//The Footer Component
//
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div>
            <h3>Thomas Leon Highbaugh © {new Date().getFullYear()}</h3>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
