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
      <div className="about-card card">
        <div className="card-header">
          <h3 className="card-title">{cardTitle}</h3>
          <h4 className="card-subtitle">{cardSubtitle}</h4>
          <hr />
        </div>
        <hr />
        <div className="card-body">
            <br />
            <p className="card-text">{cardText}</p>
            <h4 className="techs">{cardText2}</h4>
            <h4 className="techs">{cardText3}</h4>

        </div>
        <div className="card-footer">
        <hr />
        </div>
      </div>
    );
  }
}
export default AboutCard;
