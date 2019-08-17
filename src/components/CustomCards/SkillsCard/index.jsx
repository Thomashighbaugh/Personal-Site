import React, { Component, PropTypes } from "react";
import { Button, Card, CardHeader, CardTitle, CardBody, CardSubtitle,  CardFooter, CardText } from 'reactstrap';
import { Link } from 'gatsby';
import SkillsModal from './SkillsModal';
class SkillsCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Card className="SkillsCard">
        <CardHeader>
          <CardTitle>cardTitle</CardTitle>
          <CardSubtitle>cardSubtitle</CardSubtitle>
          <hr />
        </CardHeader>
        <CardBody>
    <SkillsModal/>
        </CardBody>

      </Card>


    )
  }

}
export default SkillsCard;