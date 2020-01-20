import React, { useState } from 'react';
import Popup from "reactjs-popup";
import { FaDesktop, FaGitAlt } from 'react-icons/all';

function DesktopModal() {

  return (
    <Popup
      trigger={<button className="modal-button"> <FaDesktop size={70} /> </button>}
      modal
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <h3 className="header"> Desktop Software Development</h3>

          <div className="content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Languages && Platforms</h3>
              <li className="modal-list-item">C</li>
              <li className="modal-list-item">C++</li>
              <li className="modal-list-item">Java</li>
              <li className="modal-list-item">Rust</li>
              <li className="modal-list-item">Electron</li>
              <li className="modal-list-item">Lua</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">IDEs</h3>
              <li className="modal-list-item">JetBrains</li>
              <li className="modal-list-item">Eclipse</li>
              <li className="modal-list-item">EMacs</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Packaging</h3>
              <li className="modal-list-item">DEB</li>
              <li className="modal-list-item">APPIMAGE</li>
              <li className="modal-list-item">Snap</li>
              <li className="modal-list-item">RPM</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">UI Libraries</h3>
              <li className="modal-list-item">QT</li>
              <li className="modal-list-item">GTK</li>
              <li className="modal-list-item">Zenity</li>
            </ul>
          </div>
          <br />
          <div className="actions">
            <Popup
              trigger={<button className="button"> Cross Platform </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Due to the variance within Linux alone, I try to insure that my
                work products are easily utilized in as wide a context as
                possible as a matter of design and implementation thus enabling
                as many users as possible to use them without additional
                configuration.{' '}
              </span>
            </Popup>
            <Popup
              trigger={
                <button className="button"> Functional Commenting</button>
              }
              position="top center"
              closeOnDocumentClick
            >
              <span>
                As with web development, I cannot stand looking at code where
                the functionality is unknown to other developers because of a
                lack of commenting. Thus I try to insure that comments are
                placed at least above various sections to describe the
                functionality of that block to anyone else maintaining it.{' '}
              </span>
            </Popup>

            <Popup
              trigger={<button className="button"> Work Ethic</button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                All of my sites that are built utilizing front end technologies
                are still subject to the work ethic that I bring to teams and my
                efforts freelancing. This work ethic is defined by thoroughness,
                as in I don't cut corners and will put in the extra time for an
                optimal and optimized result. This makes the website a more
                reliable and meaningful work product, with better documentation
                and commenting, that is easier to maintain and upgrade.
              </span>
            </Popup>
          </div>
        </div>
      )}
    </Popup>
  );
}
export default DesktopModal;
