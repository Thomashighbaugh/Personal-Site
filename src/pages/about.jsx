/* The About Page
*
* This page is to introduce myself to the visitor, what I do (as far as
* development) and go more in depth with the two other sites
*
that are part of this effort */

import React, { Component } from 'react';
import Layout from '../components/Layout';
import AboutCard from '../components/CustomCards/AboutCard';
import Col from 'reactstrap/es/Col';
import SocialCard from '../components/CustomCards/SocialCard';
import ImageCard from '../components/CustomCards/ImageCard';
import ModalCard from '../components/CustomCards/ModalCard';
import MoreCard from '../components/CustomCards/MoreCard';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1 | props.activeKey,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log('selected ' + key);
    this.setState({ key });
  }
  render() {
    //each card will pass in its data as arguments to the properties set up in the components themselves
    return (
      <Layout>
        <div id="about">
          <div className="grid grid-3 no--margin">
            <div className="col">
              <AboutCard
                id="1"
                cardTitle="[dev]"
                cardSubtitle="the developer behind this site"
                cardText="My name is Thomas Leon Highbaugh and I am an autodidactic web developer and Linux fanatic with an eye for design."
              />
            </div>
            <div className="col">
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/160.jpg" />
            </div>
            <div className="col">
              <AboutCard
                id="2"
                cardTitle="[site]"
                cardSubtitle="showcase React Portfolio Site"
                cardText="Built With"
                cardText2=" YEOMAN + REACT + GATSBY "
                cardText3=" SCSS + ESLINT + NETLIFY "
              />
            </div>
          </div>
          <div className="grid grid-3 no--margin">
            <div className="col">
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/020.jpg" />
            </div>
            <div className="col">
              <MoreCard
                cardTitle="[art]"
                cardSubtitle="about the graphics used on this site"
                cardText="All of the graphics, except for the backgrounds, were created by me, Thomas Leon Highbaugh. Like everything else about the site, they are OPEN SOURCE as long as you make sure to give me credit for them ."
                cardText3="If you like them, check out my Instagram for more!"
              />
            </div>
            <div className="col">
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/019.jpg" />
            </div>
          </div>
          <div className="grid grid-3 no--margin">
            <div className="col">
              <ModalCard />
            </div>
            <div className="col">
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/061.jpg" />
            </div>
            <div className="col">
              <SocialCard />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
