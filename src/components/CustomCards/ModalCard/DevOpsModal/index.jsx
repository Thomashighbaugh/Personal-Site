import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { FaGitAlt } from 'react-icons/all';

function DevOpsModal() {
  return (
    <Popup trigger={<button className="modal-button"> <FaGitAlt size={70}/></button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <h3 className="header">DevOps</h3>

          <div className="content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Clouds // Serverless</h3>
              <li className="modal-list-item">AWS</li>
              <li className="modal-list-item">Azure</li>
              <li className="modal-list-item">Firebase</li>
              <li className="modal-list-item">Netlify</li>
              <li className="modal-list-item">Github/GitLab Pages</li>
              <li className="modal-list-item">Surge</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Web Servers & Stacks</h3>
              <li className="modal-list-item">LAMP</li>
              <li className="modal-list-item">LEMP</li>
              <li className="modal-list-item">Nginx</li>
              <li className="modal-list-item">WebPack Development Server</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">CI/CD</h3>
              <li className="modal-list-item">Jenkins</li>
              <li className="modal-list-item">Travis</li>
              <li className="modal-list-item">GitLab Pipelines</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Databases</h3>
              <li className="modal-list-item">MySQL</li>
              <li className="modal-list-item">NoSQL</li>
              <li className="modal-list-item">PostgreSQL</li>
              <li className="modal-list-item">Redis</li>
            </ul>
          </div>
          <br />
          <div className="actions">
            <Popup
              trigger={<button className="button">Experience Driven</button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                All of these skills are born of my needs and subsequent
                experimentation within my own network environment in which I
                have several systems with varied use cases ranging from
                workstations to hypervisors to network access points. Utilizing
                these tools within my own environment, for my own operations,
                gives me a robust understanding of them and their use cases as
                well as their implementation in production.
              </span>
            </Popup>
            <Popup
              trigger={<button className="button">Linux Aware</button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                All of my development and operations efforts have occurred since
                becoming a user of Linux within the desktop context that
                expanded beyond the simple use case of daily OS use. Thus
                implementation of the tools typical within DevOps and the
                systems used in typical operations are already within the scope
                of things I have considerable experience with thus having
                already surmounted the learning curve.{' '}
              </span>
            </Popup>

            <Popup
              trigger={<button className="button"> Hobbyist at Heart</button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                As strange as it may seem, I happen to find these technologies
                highly interesting, setting up a homelab and experimenting with
                them being a past time for me that has swelled to occupy a
                consideration portion of my freetime. Thus I bring the interest
                and dedication to my DevOps efforts that one expects more of a
                hobbyist and as always I am enthusiastically thorough!{' '}
              </span>
            </Popup>
          </div>
        </div>
      )}
    </Popup>
  );
}
export default DevOpsModal;
