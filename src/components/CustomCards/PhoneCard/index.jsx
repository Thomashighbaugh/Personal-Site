import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';

class PhoneCard extends Component {
  render() {
    return (
      <div className="card phone-card">
        <div className="card-header">
          <h3 className="card-title">Phone</h3>
          <h4 className="card-subtitle">interested in having me on your team? Call me!</h4>
          <hr />
        </div>
        <div className="card-body">
To give me a call click the number (works on cell phone, but right click and Open With ... [your VOIP] may work as well.
          <button className="nav-btn"><Obfuscate tel="510-907-0654" /></button>
        </div>
      </div>
    );
  }
}
export default PhoneCard;
