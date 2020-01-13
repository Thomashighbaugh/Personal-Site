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
      <card className="card social-card">
        <div className="card-header">
          <h3 className="card-title">[social]</h3>
          <h4 className="card-subtitle">
            use the icons below to check out my social media profiles!
          </h4>
          <hr />
        </div>
        <CardBody className="card-body">
          <SocialIcons />
        </CardBody>
      </card>
    );
  }
}
export default SocialCard;
