import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';
import 'font-awesome/css/font-awesome.min.css';
import { FaPhoneSquare } from 'react-icons/all';
class PhoneCard extends Component {
  render() {
    return (
      <div className="card phone-card">
        <div className="card-header">
          <h3 className="card-title">Phone</h3>
          <h4 className="card-subtitle">interested in having me on your team? Call me!</h4>
          <hr />
        </div>
        <hr className="hr-blue"/>
        <div className="card-body">
          <p className="card-text">
            To give me a call click the number (works on cell phone, but right click and Open With ... [your VOIP] may work as well.
          </p>
          <button className="nav-btn`"><Obfuscate tel="510-907-0654"><FaPhoneSquare size={50} /> </Obfuscate></button>
        </div>
      </div>
    );
  }
}
export default PhoneCard;
