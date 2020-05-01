import React, { Component } from "react";
import Banner from "./layout/Banner";

class Home extends Component {
  constructor(props) {
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {
    return (
      <div className="posts">
        <div className="post banner">
          <h1 className="post-title">
            I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em>{" "}
            enterprise web applications.
          </h1>
          <p>
            for <em>agencies</em>, <em>bluechips</em>, <em>start-ups</em> and
            sometimes, <em>myself</em>.{" "}
            <a href="#" onClick={this.eventToggleSidebar}>
              {" "}
              Find out More
            </a>
          </p>
        </div>

        <div className="post clearfix">
          <h2>My Dev Toolkit:</h2>

          <div className="skill-item clearfix">
            <h4>Development</h4>
            <ul className="">
              <li>
                <em>HTML5</em>
              </li>
              <li>
                <em>CSS</em>
                <ul>
                  <li>
                    <em>CSS3</em>
                  </li>
                  <li>
                    <em>LESS</em>
                  </li>
                  <li>
                    <em>SCSS // SASS</em>
                  </li>
                  <li>
                    <em>SCSS Animations</em>
                  </li>
                </ul>
              </li>
              <li>
                <em>Javascript</em>
                <ul>
                  <li>
                    <em>ES6//ES7</em>
                  </li>
                  <li>
                    <em>D3</em>
                  </li>
                  <li>
                    <em>React*</em>
                    <ul>
                      <li>
                        <em>MaterialUI</em>
                      </li>
                      <li>
                        <em>ReactStrap</em>
                      </li>
                      <li>
                        <em>ReactBootstrap</em>
                      </li>
                      <li>
                        <em>GatsbyJS</em>
                      </li>
                      <li>
                        <em>Redux</em>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="skill-item clearfix">
            <h4>Production</h4>
            <ul>
              <li>
                <em>Webpack</em>
              </li>
              <li>
                <em>SQLite</em>
              </li>
              <li>
                <em>MySQL</em>
              </li>
              <li>
                <em>PHP</em>
              </li>
              <li>
                <em>MongoDB</em>
              </li>
              <li>
                <em>
                  <b>*</b>Node
                </em>
                <ul>
                  <li>
                    <em>
                      <b>*</b>Express
                    </em>
                  </li>
                  <li>
                    <em>Hapi</em>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="skill-item clearfix">
            <h4>DevOps</h4>
            <ul className="clearfix">
              <li>
                <em>
                  <b>*</b>Travis CI
                </em>
              </li>
              <li>
                <em>
                  <b>*</b>
                </em>
              </li>
              <li>
                <em>Gulp</em>
              </li>
              <li>
                <em>Grunt</em>
              </li>
            </ul>
          </div>

          <div className="exclaimation">
            <em>
              <b>*</b> React can also be rendered server side as well such as in
              the case of this site. This is known as Isomorphical Rendering.{" "}
            </em>
          </div>
        </div>

        <div className="post clearfix"></div>

        <Banner />
      </div>
    );
  }
}

export default Home;
