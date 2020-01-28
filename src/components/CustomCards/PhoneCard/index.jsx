/******************************************************************************
 * Phone Card
 *
 *
 * Creates a link to allow mobile and VOIP users an option to call me
 *******************************************************************************/
import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';
import 'font-awesome/css/font-awesome.min.css';
import { FaPhoneSquare } from 'react-icons/all';
class PhoneCard extends Component {
  render() {
    return (
      <div className="card phone-card">
        <div className="card-header">
          <h3 className="card-title">[phone]</h3>
          <h4 className="card-subtitle">interested in having me on your team? Call me!</h4>
          <hr />
        </div>
        <hr className="hr-blue"/>
        <div className="card-body">
          <p className="techs">
            works on cell phones or VOIP
          </p>

        </div>
        <br/>
        <button className="nav-btn`"><Obfuscate tel="510-907-0654"><FaPhoneSquare size={90} /> </Obfuscate></button>
      </div>
    );
  }
}
export default PhoneCard;
