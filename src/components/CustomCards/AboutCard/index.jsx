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
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText,
      cardText2,
      cardText3
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
            <h4 className="techs">{cardText2}</h4>
            <h4 className="techs">{cardText3}</h4>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
export default AboutCard;
