import React, { Component, PropTypes } from "react";
import { Button, Card, CardHeader, CardTitle, CardBody, CardSubtitle,  CardFooter, CardText } from 'reactstrap';
import { Link } from 'gatsby';
import CardImg from 'reactstrap/es/CardImg';
class ImageCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const {cardImage} = this.props;
    return(
      <Card className="imageCard">
        <CardBody>
    <CardImg src={cardImage} />
        </CardBody>

      </Card>


    )
  }

}
export default ImageCard;