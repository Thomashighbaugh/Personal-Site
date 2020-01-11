/*
* This page serves as the front page of the site. I opted to not overload the user with
* information from the onset, instead using some of my art and a few transitions to make
* the page attractive to users, demonstrative of my skillset and as a place to showcase my art
*
 */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CardTitle from 'reactstrap/es/CardTitle';
import CardHeader from 'reactstrap/es/CardHeader';
import CardBody from 'reactstrap/es/CardBody';
import Card from 'react-bootstrap/Card';
import CardSubtitle from 'reactstrap/es/CardSubtitle'
const IndexPage = () => (
  <Layout id="home">
    <div id="home">
      <SEO title="[welcome]"
      description="The front page of the developer portfolio of Thomas Leon Highbaugh. Featuring artwork by TLH himself."/>
      <Card>
        <CardHeader>
          <CardTitle>[developer portfolio]</CardTitle>
          <CardSubtitle className="card-subtitle">[thomas leon highbaugh]</CardSubtitle>
        </CardHeader>
        <CardBody>
          <section>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/Thomashighbaugh/resurgens-iv/master/dogpatchcircuit.png"
                alt="dogpatch"
              />
            </div>
          </section>
        </CardBody>
      </Card>
    </div>
  </Layout>
);

export default IndexPage;
