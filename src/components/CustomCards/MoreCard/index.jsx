import React, { Component, PropTypes } from 'react';
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
      cardText,
      cardText2,
      cardText3,
      cardLink1,
      cardLinkLabel1,
      cardLink2,
      cardLinkLabel2,
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

            <p>{cardText}</p>
             <a className="nav-btn" href={cardLink1}>
                {cardLinkLabel1}
              </a>
            <br />
            <p>{cardText2}</p>
             <a className="nav-btn" href={cardLink2}>
                {cardLinkLabel2}
              </a>

          </CardText>
        </CardBody>
      </Card>
    );
  }
}
export default MoreCard;
