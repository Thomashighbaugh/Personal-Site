import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from 'reactstrap';
import SocialIcons from './SocialIcons';
class SocialCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="socialCard">
        <CardHeader>
          <CardTitle>[social]</CardTitle>
          <CardSubtitle>
            use the icons below to check out my social media profiles!
          </CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody className="socialBody">
          <SocialIcons />
        </CardBody>
      </Card>
    );
  }
}
export default SocialCard;
