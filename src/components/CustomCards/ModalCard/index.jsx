import React, { useState } from 'react';
import WebDevModal from './WebDevModal';
import DevOpsModal from './DevOpsModal';
import OperationsModal from './OperationsModal';
import DesktopModal from './DesktopModal';
function ModalCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">[skills]</h3>
        <h4 className="card-subtitle">
          click the buttons for a modal displaying some of my skills
        </h4>

        <hr />
      </div>

        {/*buttons*/}

        <WebDevModal />
        <DesktopModal />
        <DevOpsModal />
        <OperationsModal />
        {/*end buttons*/}
    </div>
  );
}
export default ModalCard;
