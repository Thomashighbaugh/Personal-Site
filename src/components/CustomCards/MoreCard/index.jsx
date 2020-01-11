import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import Container from 'react-bootstrap/Container';
class MoreCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText3,
      cardText,
      cardText2,
    } = this.props;
    return (
      <Card className="moreCard">
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody>
          <CardText>
            <br />
            <Container fluid>
              <CardBody>
                <p className="moreText">{cardText}</p>
                <p className="moreText">{cardText2}</p>
                <em className="moreText">{cardText3}</em>
              </CardBody>
            </Container>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
export default MoreCard;
