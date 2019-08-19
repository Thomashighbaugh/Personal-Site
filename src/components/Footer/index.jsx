//
//The Footer Component
//
import React, { Component, PropTypes } from "react";
import { Link } from "gatsby";
import Col from "reactstrap/es/Col"
import Container from 'reactstrap/es/Container';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
        <h3 className="d-inline-flex w-25">Thomas Leon Highbaugh</h3>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <br/>
        <div className="float-right btn-group">
          <Link className="nav-btn footer-btn" to="https://netlify.com">Blog</Link>
          <Link className="nav-btn footer-btn" to="https://netlify.com">Gallery</Link>

        </div>
      </footer>

    );
  }
}

export default Footer;
