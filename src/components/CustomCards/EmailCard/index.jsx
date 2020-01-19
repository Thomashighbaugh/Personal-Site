import React, { Component } from 'react';
import Obfuscate from 'react-obfuscate';
import 'font-awesome/css/font-awesome.min.css';
import { FaEnvelope } from 'react-icons/all';

class EmailCard extends Component {
  render() {
    return (
      <div className="card Email-card">
        <div className="card-header">
          <h3 className="card-title">Email</h3>
          <h4 className="card-subtitle">take your pick</h4>
          <hr />
        </div>
        <hr className="hr-blue" />
        <div className="card-body">
          <button className="nav-btn">
            <Obfuscate email="thighbaugh@zoho.com">  <FaEnvelope size={50}/></Obfuscate>
          </button>
          <button className="nav-btn">
            {' '}
            <Obfuscate email="thighbaugh510@gmail.com">  <FaEnvelope size={50}/></Obfuscate>
          </button>
          <button className="nav-btn">
            {' '}
            <Obfuscate email="thomasleonhighbaugh@gmail.com"> <FaEnvelope size={50}/> </Obfuscate>
          </button>
        </div>
      </div>
    );
  }
}
export default EmailCard;
