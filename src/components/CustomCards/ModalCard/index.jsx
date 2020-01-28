/******************************************************************************
 * Modal Card
 *
 *
 * Provides card from which skill modals are launched for about page
 *******************************************************************************/

import React from 'react';
import WebDevModal from './WebDevModal';
import DevOpsModal from './DevOpsModal';
import OperationsModal from './OperationsModal';
import DesktopModal from './DesktopModal';
function ModalCard() {
  return (
    <div className="card" id="modal-card">
      <div className="card-header">
        <h3 className="card-title">[skills]</h3>
        <h4 className="card-subtitle">
          click the buttons for a modal displaying some of my skills
        </h4>

        <hr />
      </div>
      <hr className="hr-blue" />
      {/*buttons*/}
      <div className="modal-box">
      <WebDevModal />
      <DesktopModal />
      </div>
      <div className="modal-box">
    <OperationsModal />
<DevOpsModal />
      </div>
      {/*end buttons*/}

    </div>
  );
}
export default ModalCard;
