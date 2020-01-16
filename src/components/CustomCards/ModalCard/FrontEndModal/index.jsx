import React, { useState } from 'react';
import Popup from "reactjs-popup";

function FrontEndModal() {

  return (
    <Popup trigger={<button className="modal-button"> front end </button>} modal>
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
              trigger={<button className="button"> User Focused</button>}
              position="top center"
              closeOnDocumentClick
            >
            <span>
          Approaching front end development from the perspective of a user has helped me shape interfaces that are inuitative and accessible without loosing the flare for design that I discovered in the process of learning these technologies.
            </span>
            </Popup>
            <Popup
              trigger={<button className="button">Distinctive Style</button>}
              position="top center"
              closeOnDocumentClick
            >
            <span>
          From custom made icons to the color scheme of the site, all of my sites benefit from my passion for graphics design. This extends to the organization of the content.
            </span>
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
export default FrontEndModal;
