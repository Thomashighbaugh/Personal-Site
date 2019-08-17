import React, { Component, PropTypes } from "react";
import { Button, Card, CardHeader, CardTitle, CardBody, CardSubtitle,  CardFooter, CardText } from 'reactstrap';
import { Link } from 'gatsby';
import SocialIcons from './SocialIcons';
class SocialCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const {cardTitle, cardSubtitle, cardText, cardText2, cardText3,cardLink, cardLinkLabel } = this.props;
    return(
      <Card className="aboutCard">
        <CardHeader>
          <CardTitle>[social]</CardTitle>
          <CardSubtitle>use the icons below to check out my social media profiles!</CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody>
        <SocialIcons />
        </CardBody>

      </Card>


    )
  }

}
export default SocialCard;