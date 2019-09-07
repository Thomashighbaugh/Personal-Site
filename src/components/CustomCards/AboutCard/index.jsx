import React, { Component, PropTypes } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardFooter,
  CardText,
} from 'reactstrap';
import { Link } from 'gatsby';
class AboutCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText,
      cardText2,
      cardText3,
      cardLink,
      cardLinkLabel,
    } = this.props;
    return (
      <Card className="aboutCard">
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody>
          <CardText>
            <br />
            <p>{cardText}</p>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
export default AboutCard;
