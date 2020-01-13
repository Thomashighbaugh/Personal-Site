import React, { Component } from 'react';
class MoreCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      cardTitle,
      cardSubtitle,
      cardText3,
      cardText,
      cardText2,
    } = this.props;
    return (
      <div className="card more-card">
        <div className="card-header">
          <div className="card-title">{cardTitle}</div>
          <div className="card-subtitle">{cardSubtitle}</div>
          <hr />
        </div>
        <div className="card-body">
            <br />
                <p className="moreText">{cardText}</p>
                <p className="moreText">{cardText2}</p>
                <em className="moreText">{cardText3}</em>
        </div>
      </div>
    );
  }
}
export default MoreCard;
