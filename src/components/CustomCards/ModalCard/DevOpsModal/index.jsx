import React, { useState } from 'react';
import Popup from "reactjs-popup";

function DevOpsModal() {

  return (
    <Popup trigger={<button className="modal-button"> back end </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <h3 className="header">Web Development</h3>

          <div className="content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Languages</h3>
              <li className="modal-list-item">HTML5</li>
              <li className="modal-list-item">Pug</li>
              <li className="modal-list-item">CSS3</li>
              <li className="modal-list-item">Javascript</li>
              <li className="modal-list-item">GraphQL</li>
              <li className="modal-list-item">Typescript</li>
              <li className="modal-list-item">PHP</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Frameworks && Libraries</h3>
              <li className="modal-list-item">React</li>
              <li className="modal-list-item">Bootstrap</li>
              <li className="modal-list-item">jQuery</li>
              <li className="modal-list-item">SASS</li>
              <li className="modal-list-item">LESS</li>
              <li className="modal-list-item">TSReact</li>
              <li className="modal-list-item">MaterialUI</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Front End Tools</h3>
              <li className="modal-list-item">Babel</li>
              <li className="modal-list-item">Webpack</li>
              <li className="modal-list-item">Gatsby</li>
              <li className="modal-list-item">Gulp.js</li>
              <li className="modal-list-item">Yeoman</li>
              <li className="modal-list-item">ESLint</li>
              <li className="modal-list-item">SonarLint</li>
            </ul>
          </div>
          <br/>
          <div className="actions">
            <Popup
              trigger={<button className="button">Experience Driven</button>}
              position="top center"
              closeOnDocumentClick
            >
            <span>
            All of these skills are born of my needs and subsequent experimentation within my own network environment in which I have several systems with varied use cases ranging from workstations to hypervisors to network access points. Utilizing these tools within my own environment, for my own operations, gives me a robust understanding of them and their use cases as well as their implementation in production.
            </span>
            </Popup>
            <Popup
              trigger={<button className="button">Linux Aware</button>}
              position="top center"
              closeOnDocumentClick
            >
            <span>
All of my development and operations efforts have occurred since becoming a user of Linux within the desktop context that expanded beyond the simple use case of daily OS use. Thus implementation of the tools typical within DevOps and the systems used in typical operations are already within the scope of things I have considerable experience with thus having already surmounted the learning curve.           </span>
            </Popup>

            <Popup
              trigger={<button className="button"> Work Ethic</button>}
              position="top center"
              closeOnDocumentClick
            >
            <span>
          All of my sites that are built utilizing front end technologies are still subject to the work ethic that I bring to teams and my efforts freelancing. This work ethic is defined by thoroughness, as in I don't cut corners and will put in the extra time for an optimal and optimized result. This makes the website a more reliable and meaningful work product, with better documentation and commenting, that is easier to maintain and upgrade.
            </span>
            </Popup>

          </div>
        </div>
      )}
    </Popup>

  );
}
export default DevOpsModal;
