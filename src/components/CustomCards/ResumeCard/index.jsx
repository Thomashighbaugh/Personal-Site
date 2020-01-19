import React, { Component } from 'react';
import { TiDocumentText } from 'react-icons';

class ResumeCard extends Component {
  render() {
    return (
      <div className="card social-card">
        <div className="card-header">
          <h3 className="card-title">Resume</h3>
          <h4 className="card-subtitle">check out my official resume!</h4>
          <hr />
        </div>
        <div className="card-body">
          To download my official resume, click the button below.
          <section>
            <a
              download="cv_highbaugh_latex.pdf"
              href="content/assets/cv_highbaugh_latex.pdf"
            >
              <button className="nav-btn">
CV Highbaugh              </button>
            </a>
          </section>{' '}
          <p>
            This resume was created by hand using Latex, which I learned
            specifically to craft this resume and maintain it.
          </p>
        </div>
      </div>
    );
  }
}
export default ResumeCard;
