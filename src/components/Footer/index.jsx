/******************************************************************************
 * Footer
 *
 *
 * Provides copyright bar at the bottom of the page
 *******************************************************************************/
import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <footer className="footer container-fluid">
        <h3 className="footer-title">
          Thomas Leon Highbaugh © {new Date().getFullYear()}
        </h3>
      </footer>
    );
  }
}

export default Footer;
