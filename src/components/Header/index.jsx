import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarBrand } from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Navbar className="navbar">
            <NavbarBrand className="navbar-brand">
              <Link className="navbar-brand" to="/">
                [tlh development portfolio]
              </Link>
            </NavbarBrand>
            <div className="links">
              <br className="d-md-none" />
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
          </Navbar>
        </nav>
      </header>
    );
  }
}

export default Header;
