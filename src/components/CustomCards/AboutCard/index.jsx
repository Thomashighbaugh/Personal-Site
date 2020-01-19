import React, { Component} from 'react';
class AboutCard extends Component {
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText,
      cardText2,
      cardText3,
      cardText4
        } = this.props;
    return (
      <div className="about-card card">
        <div className="card-header">
          <h3 className="card-title">{cardTitle}</h3>
          <h4 className="card-subtitle">{cardSubtitle}</h4>
          <hr />
        </div>
        <hr className="hr-blue" />
        <div className="card-body">
            <p className="card-text">{cardText}</p>
            <h4 className="techs">{cardText2}</h4>
            <h4 className="techs">{cardText3}</h4>
            <h5 className="shoutout">{cardText4}</h5>

        </div>

      </div>
    );
  }
}
export default AboutCard;
