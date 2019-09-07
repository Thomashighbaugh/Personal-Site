import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTitle from 'reactstrap/es/CardTitle';
import CardBody from 'reactstrap/es/CardBody';
import Card from 'reactstrap/es/Card';

import AboutCard from '../components/CustomCards/AboutCard';
import '../styles/main.scss';
import Col from 'reactstrap/es/Col';
import {
  FaLinkedin,
  FaGithubSquare,
  FaStackOverflow,
  FaFreeCodeCamp,
  FaTwitterSquare,
} from 'react-icons/fa';
import SocialIcons from '../components/CustomCards/SocialCard/SocialIcons';
import SocialCard from '../components/CustomCards/SocialCard';
import Row from 'reactstrap/es/Row';
import ImageCard from '../components/CustomCards/ImageCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ModalCard from '../components/CustomCards/ModalCard';
import Container from 'react-bootstrap/Container';
import MoreCard from '../components/CustomCards/MoreCard';

// The About Page

// This page is to introduce myself to the visitor, what I do (as far as
// development) and go more in depth with the two other sites

// that are part of this effort

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
              <MoreCard
                id="3"
                cardTitle="[sites]"
                cardSubtitle="More by TLH, in case you haven't had enough yet"
                cardText="Follow the links below to see what else I am up to!"
                cardLink1="https://netlify.com"
                cardLinkLabel1="[blog]"
                cardLink2="https://netlify.com"
                cardLinkLabel2="[gallery]"
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
