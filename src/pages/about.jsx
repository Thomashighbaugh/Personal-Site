import React, { Component } from 'react';
import Layout from '../components/Layout';
import CardTitle from 'reactstrap/es/CardTitle';
import CardBody from 'reactstrap/es/CardBody';
import Card from 'reactstrap/es/Card';
import PageTransition from 'gatsby-plugin-page-transitions';
import Navbar from 'reactstrap/es/Navbar';
import CardDeck from 'reactstrap/es/CardDeck';
import CardSubtitle from 'reactstrap/es/CardSubtitle';
import CardText from 'reactstrap/es/CardText';
import CardFooter from 'reactstrap/es/CardFooter';
import CardLink from 'reactstrap/es/CardLink';
import { Link } from 'gatsby';
import AboutCard from '../components/CustomCards/AboutCard';
import Container from 'reactstrap/es/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

// The About Page

// This page is to introduce myself to the visitor, what I do (as far as
// development) and go more in depth with the two other sites

// that are part of this effort

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageTransition>
        <Header />
        <Row className="grid grid-3 no--margin">
          <Col className="col">
            <AboutCard
              id="1"
              cardTitle="[dev]"
              cardSubtitle="the developer behind this effort"
              cardText="My name is Thomas Leon Highbaugh and I am an autodidactic web developer and Linux fanatic with an eye for design."
            />
          </Col>
          <Col className="col">
            <AboutCard
              id="2"
              cardTitle="[site]"
              cardSubtitle="the showcase React portfolio featuring Gatsby"
              cardText="This site is the centerpiece of a series of three Gatsby generated static sites all written in React and SASS. This site being the most important of the three as it serves as a landing page for any potential clients or employers who are intrigued by my proposal/resume."
            />
          </Col>
          <Col className="col">
            <SocialCard />
          </Col>
        </Row>
        <Row className="grid grid-3 no--margin">
          <Col>
<ImageCard
cardImage=""/>
          </Col>
          <Col>
            <Card/>
          </Col>
          <Col>
            <Card/>
          </Col>
        </Row>
        <Footer />
      </PageTransition>
    );
  }
}

export default About;
