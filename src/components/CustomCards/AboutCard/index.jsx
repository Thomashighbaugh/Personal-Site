import React, { Component} from 'react';
class AboutCard extends Component {
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText,
      cardText2,
      cardText3
        } = this.props;
    return (
      <div className="card about-card">
        <div className="card-header">
          <h3 className="card-title">{cardTitle}</h3>
          <h4 className="card-subtitle">{cardSubtitle}</h4>
          <hr />
        </div>
        <div className="card-body">
            <br />
            <p>{cardText}</p>
            <h4 className="techs">{cardText2}</h4>
            <h4 className="techs">{cardText3}</h4>

        </div>
      </div>
    );
  }
}
export default AboutCard;
