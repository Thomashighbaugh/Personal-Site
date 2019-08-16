import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Card from 'reactstrap/es/Card';
import CardSubtitle from 'reactstrap/es/CardSubtitle';
import CardTitle from 'reactstrap/es/CardTitle';
import Container from 'reactstrap/es/Container';
import CardImg from 'reactstrap/es/CardImg';
import CardImgOverlay from 'reactstrap/es/CardImgOverlay';
import PageTransition from 'gatsby-plugin-page-transitions';
import CardHeader from 'reactstrap/es/CardHeader';
import CardBody from 'reactstrap/es/CardBody';
const IndexPage = () => (
  <PageTransition>
  <Layout id="home">
      <div id="home">
    <SEO title="Home" />
    <CardHeader>
    <CardTitle>
    [ welcome ]
    </CardTitle>
    </CardHeader>
        <CardBody>
      <section>
    <div className='media'>
    <img src="https://raw.githubusercontent.com/Thomashighbaugh/resurgens-iv/master/dogpatchcircuit.png" alt="dog[atch"/>
</div>
      </section>
        </CardBody>

        <Link to="/page-2/">Go to page 2</Link>
</div>

    </Layout>
  </PageTransition>
);

export default IndexPage
