import React, { Component } from 'react';
import AboutCard from '../components/CustomCards/AboutCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/main.scss';
import SocialCard from '../components/CustomCards/SocialCard';
import ImageCard from '../components/CustomCards/ImageCard';
import SkillsCard from '../components/CustomCards/SkillsCard';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Layout>
        <SEO
          title="[about]"
          description="Details the author and content of the site as well as providing contact information"
        />
        <div id="about grid ">
        <Row>
          <Col className="col">
            <AboutCard
              id="1"
              cardTitle="[dev]"
              cardSubtitle="the developer behind this effort"
              cardText="My name is Thomas Leon Highbaugh and I am a self-educated web developer and Linux fanatic with an eye for design. I am looking for a team with which I can continue to grow from the experience of while contributing the unique approach and thorough diligence that characterize all of my development efforts. "
            />
          </Col>
          <Col className="col">
          <ImageCard
            cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/061.jpg"/>
          </Col>
          <Col className="col">
            <SocialCard />
          </Col>
        </Row>
        <Row>
          <Col className="col">
<ImageCard
cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/070.jpg"/>
          </Col>
          <Col className="col">
            <AboutCard
              id="4"
            cardTitle="[art]"
            cardSubtitle="about the images on this site"
            cardText="One of the things I do other than develop is take pictures that I later make into digital art. Like the websites that I create, there tends to be a balance of bright colors and dark backgrounds as the predominant feature in this artwork. Several pieces are used on this site and more are available on my gallery site or Instagram"
              />
          </Col>
          <Col>
<ImageCard
cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/003.jpg"
/>          </Col>
        </Row>
        <Row>
        <Col className="col">
          <AboutCard
            id="2"
            cardTitle="[site]"
            cardSubtitle="the showcase React portfolio featuring Gatsby"
            cardText="This site is the centerpiece of a series of three Gatsby generated static sites all written in React and SASS. This site being the most important of the three as it serves as a landing page for any potential clients or employers who are intrigued by my proposal/resume."
          />
        </Col>
        <Col className="col">
<ImageCard
  cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/022.jpg"/>
        </Col>
        <Col className="col">
          <SkillsCard />
        </Col>
        </Row>
        </div>

      </Layout>    );
  }
}

export default About;
