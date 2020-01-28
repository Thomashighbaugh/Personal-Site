/******************************************************************************
 * Resume Card
 *
 *
 *  Provides download link to resume for about page
 *******************************************************************************/
import React, { Component } from 'react';
import { FaListAlt } from 'react-icons/all';

class ResumeCard extends Component {
  render() {
    return (
      <div className="card resume-card">
        <div className="card-header">
          <h3 className="card-title">[resume]</h3>
          <h4 className="card-subtitle">check out my resume!</h4>
          <hr />
        </div>
        <hr className="hr-blue" />
        <div className="card-body">
          <p className="techs"> Made with XeLaTex</p>{' '}
        </div>

        <a
          download="cv_highbaugh_latex.pdf"
          href="content/assets/cv_highbaugh_latex.pdf"
        >
          <button className="nav-btn">
            <FaListAlt size={70} />{' '}
          </button>
        </a>
      </div>
    );
  }
}
export default ResumeCard;
