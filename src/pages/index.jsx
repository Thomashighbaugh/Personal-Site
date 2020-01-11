/*
* This page serves as the front page of the site. I opted to not overload the user with
* information from the onset, instead using some of my art and a few transitions to make
* the page attractive to users, demonstrative of my skillset and as a place to showcase my art
*
 */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CardBody from 'reactstrap/es/CardBody';
const IndexPage = () => (
  <Layout id="home">
    <div id="home">
      <SEO title="[welcome]"
      description="The front page of the developer portfolio of Thomas Leon Highbaugh. Featuring artwork by TLH himself."/>
      <div className="home-card">
        <div className="card-header">
          <h1 className="card-title">[developer portfolio]</h1>
          <h2 className="card-subtitle">thomas leon highbaugh</h2>
        </div>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/Thomashighbaugh/resurgens-iv/master/dogpatchcircuit.png"
                alt="dogpatch"
              />
            </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
