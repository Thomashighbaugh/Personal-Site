import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from './Logo'
import Navbar from 'reactstrap/es/Navbar';
import NavbarBrand from 'reactstrap/es/NavbarBrand';
class Header extends Component {
  render() {
    return (
      <header>
        <Navbar className="nav-fill navbar-expand">
          <NavbarBrand><Link to="/">[ tlh development portfolio ]</Link></NavbarBrand>
          <div className="links">
            <div className="row">
              <br className="d-md-none"/>
             <div className="col-12 btn-group">

              <Link
                to="/about/"
                onlyActiveOnIndex
                className="nav-btn nav-link col-lg-3 nav-btn-pill"
                id="nav1"
              >
                [about]
              </Link>
              <Link
                to="/projects/"
                onlyActiveOnIndex
                className="nav-btn nav-link col-lg-3 nav-btn-pill"
                id="nav2"
              >
                [projects]
              </Link>
              <Link
                to="/resume/"
                onlyActiveOnIndex
                className="nav-btn nav-link col-lg-3 nav-btn-pill"
                id="nav3"
              >
                [resume]
              </Link>
            </div>
          </div>
          </div>
        </Navbar>
      </header>
    );
  }
}

export default Header;
