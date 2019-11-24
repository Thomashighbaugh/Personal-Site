import React, { Component, PropTypes } from 'react';
import { Card, CardBody} from 'reactstrap';
import CardImg from 'reactstrap/es/CardImg';
class ImageCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cardImage } = this.props;
    return (
      <Card className="image-card" style={{ width: '100%' }}>
        <CardBody>
          <CardImg className="img-fluid" src={cardImage} />
        </CardBody>
      </Card>
    );
  }
}
export default ImageCard;
