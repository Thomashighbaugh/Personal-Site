/******************************************************************************
 * Social Card
 *
 *
 * Provides social card for about page
 *******************************************************************************/

import React, { Component } from 'react';
import SocialIcons from './SocialIcons';
class SocialCard extends Component {
  render() {
    return (
      <div className="card social-card">
        <div className="card-header">
          <h3 className="card-title">[social]</h3>
          <h4 className="card-subtitle">
            use the icons below to check out my social media profiles!
          </h4>
          <hr />
        </div>
        <hr className="hr-blue" />
        <SocialIcons />
      </div>
    );
  }
}
export default SocialCard;
