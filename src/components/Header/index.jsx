import React, { Component } from "react"
import { Link } from "gatsby"
class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link className="navbar-brand" to="/">
              [tlh development portfolio]
            </Link>
          </div>
          <div className="links">
              <Link
                to="/about/"
                onlyActiveOnIndex
                className="nav-btn nav-link "
                id="nav1"

              >
                [about]
              </Link>
              <Link
                to="/projects/"
                onlyActiveOnIndex
                className="nav-btn nav-link "
                id="nav2"
              >
                [projects]
              </Link>
              <Link
                to="/resume/"
                onlyActiveOnIndex
                className="nav-btn nav-link "
                id="nav3"
                asModal      >
                [resume]
              </Link>
            </div>
        </nav>
      </header>
    )
  }
}

export default Header
