import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';
class EmailCard extends Component {
  render() {
    return (
      <div className="card Email-card">
        <div className="card-header">
          <h3 className="card-title">Email</h3>
          <h4 className="card-subtitle">check out my official Email!</h4>
          <hr />
        </div>
        <hr className="hr-blue"/>
        <div className="card-body">
          To download my official Email, click the button below.
<button className="nav-btn">
  <Obfuscate email="thighbaugh@zoho.com" />
</button>
        </div>
      </div>
    );
  }
}
export default EmailCard;

