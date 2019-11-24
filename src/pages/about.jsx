/* The About Page
*
* This page is to introduce myself to the visitor, what I do (as far as
* development) and go more in depth with the two other sites
*
that are part of this effort */

import React, { Component } from 'react';
import Layout from '../components/Layout';
import AboutCard from '../components/CustomCards/AboutCard';
import '../styles/main.scss';
import Col from 'reactstrap/es/Col';
import SocialCard from '../components/CustomCards/SocialCard';
import Row from 'reactstrap/es/Row';
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
  render() {//each card will pass in its data as arguments to the properties set up in the components themselves
    return (
      <Layout>
        <div id="about">
          <Row className="grid grid-3 no--margin">
            <Col className="col">
              <AboutCard
                id="1"
                cardTitle="[dev]"
                cardSubtitle="the developer behind this site"
                cardText="My name is Thomas Leon Highbaugh and I am an autodidactic web developer and Linux fanatic with an eye for design."
              />
            </Col>
            <Col className="col">
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/160.jpg" />
            </Col>
            <Col className="col">
              <AboutCard
                id="2"
                cardTitle="[site]"
                cardSubtitle="my showcase React portfolio featuring Gatsby"
                cardText="This site is the centerpiece of a series of three Gatsby generated static sites all written in React and SASS. This site being the most important of the three as it serves as a landing page for any potential clients or employers who are intrigued by my proposal/resume."
              />
            </Col>
          </Row>
          <Row className="grid grid-3 no--margin">
            <Col>
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/020.jpg" />
            </Col>
            <Col>
              <ImageCard
                cardImage="https://avatars3.githubusercontent.com/u/32242061?s=460&v=4"
              />
            </Col>
            <Col className="col">
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/019.jpg" />
            </Col>
          </Row>
          <Row className="grid grid-3 no--margin">
            <Col>
              <ModalCard />
            </Col>
            <Col>
              <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/061.jpg" />
            </Col>
            <Col>
              <SocialCard />
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default About;
