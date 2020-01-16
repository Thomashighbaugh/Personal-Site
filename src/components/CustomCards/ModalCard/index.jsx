import React, { useState } from 'react';
import WebDevModal from './WebDevModal';
import DevOpsModal from './DevOpsModal';
import OperationsModal from './OperationsModal';
function ModalCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">[skills]</h3>
        <h4 className="card-subtitle">
          click the buttons for a modal displaying some of the technologies I
          have experience with and skills I have cultivated.
        </h4>

        <hr />
      </div>

      <div className="card-body">
        {/*buttons*/}

        <WebDevModal />
        <DevOpsModal />
        <OperationsModal />
        {/*end buttons*/}
      </div>
    </div>
  );
}
export default ModalCard;
