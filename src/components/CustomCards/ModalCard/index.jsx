import React, { useState } from 'react';
import FrontEndModal from './FrontEndModal';
import DevOpsModal from './DevOpsModal';
function ModalCard() {

  return (
    <div className="card">

        <div className="card-header">
          <h3 className="card-title">[skills]</h3>
          <h4 className="card-subtitle">Some technologies I have experience with</h4>
          <hr />
        </div>


      <div className="card-body">
        {/*buttons*/}
        <p className="card-text">
          Click the buttons to see a modal with a list of the technologies in
          that category.
        </p>
<FrontEndModal />
<DevOpsModal />


        {/*end buttons*/}
      </div>
    </div>
  );
}
export default ModalCard;
