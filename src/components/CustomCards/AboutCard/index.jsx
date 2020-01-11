import React, { Component} from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from 'reactstrap';
class AboutCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText,
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
