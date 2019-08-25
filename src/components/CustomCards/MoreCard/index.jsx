import React, { Component, PropTypes } from "react";
import { Button, Card, CardHeader, CardTitle, CardBody, CardSubtitle,  CardFooter, CardText } from 'reactstrap';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
class MoreCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const {cardTitle, cardSubtitle, cardText, cardText2, cardText3,cardLink1, cardLinkLabel1,cardLink2, cardLinkLabel2 } = this.props;
    return(
      <Card className="moreCard">
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody>
          <CardText>
            <br /><p>{cardText}</p>
        <Container fluid className="d-inline-flex">
            <br/><a className="nav-btn" href={cardLink1}>{cardLinkLabel1}</a>
            <a className="nav-btn" href={cardLink2}>{cardLinkLabel2}</a>
        </Container>
        </CardText>
        </CardBody>

      </Card>


    )
  }

}
export default MoreCard;