import React, { Component } from 'react';
import { FaListAlt } from 'react-icons/all';

class ResumeCard extends Component {
  render() {
    return (
      <div className="card resume-card">
        <div className="card-header">
          <h3 className="card-title">[Resume]</h3>
          <h4 className="card-subtitle">check out my resume!</h4>
          <hr  />
        </div>
        <hr className="hr-blue"/>
        <div className="card-body">
          Download the resume I learned Latex to make by clicking the button below.

          <a
              download="cv_highbaugh_latex.pdf"
              href="content/assets/cv_highbaugh_latex.pdf"
            >
              <button className="nav-btn">
<FaListAlt size={50}/>        </button>
            </a>

        </div>
      </div>
    );
  }
}
export default ResumeCard;

