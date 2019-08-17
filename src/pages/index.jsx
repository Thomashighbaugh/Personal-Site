import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CardTitle from 'reactstrap/es/CardTitle';
import CardHeader from 'reactstrap/es/CardHeader';
import CardBody from 'reactstrap/es/CardBody';
import Card from 'react-bootstrap/Card';
const IndexPage = () => (
  <Layout id="home">
      <div id="home">
    <SEO title="[welcome]" />
    <Card>
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
    </Card>
        </div>


    </Layout>
);

export default IndexPage
