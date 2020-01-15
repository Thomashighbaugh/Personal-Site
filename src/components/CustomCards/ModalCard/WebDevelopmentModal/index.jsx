import React, { useState } from 'react';
import Popup from "reactjs-popup";

function WebDevelopmentModal() {

  return (
    <Popup trigger={<button className="modal-button"> web dev </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Web Development </div>

          <div className="content">
          <ul className="modal-list">
            <h3 className="modal-list-heading">Languages</h3>
            <li className="modal-list-item">HTML5</li>
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
            </ul>
          </div>
          <br/>
          <div className="actions">
            <Popup
              trigger={<button className="button"> User Focused Development</button>}
              position="top center"
              closeOnDocumentClick
            >
            <span>
          Approaching front end development from the perspective of a user has helped me shape interfaces that are inuitative and accessible without loosing the flare for design that I discovered in the process of learning these technologies.
            </span>
            </Popup>

          </div>
        </div>
      )}
    </Popup>

  );
}
export default WebDevelopmentModal;
