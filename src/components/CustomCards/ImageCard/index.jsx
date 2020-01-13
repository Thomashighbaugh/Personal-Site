import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import CardImg from 'reactstrap/es/CardImg';
class ImageCard extends Component {
  render() {
    const { cardImage } = this.props;
    return (
      <Card className="image-card card">
        <CardBody>
          <CardImg className="img-fluid" src={cardImage} />
        </CardBody>
      </Card>
    );
  }
}
export default ImageCard;
