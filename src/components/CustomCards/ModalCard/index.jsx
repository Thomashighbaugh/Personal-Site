import React, { useState } from 'react';
import SkillsModal from './SkillsModal';

function ModalCard() {

  return (
    <div className="modal-card card">
      <div className="card-header">
        <div className="card-title">[skills]</div>
        <div className="card-subtitle">
          These are some of the technologies I have experience with!
        </div>
      </div>
      <hr />
      <div className="card-body">
        {/*buttons*/}

        <p>
          Click the buttons to see a modal with a list of the technologies in
          that category.
        </p>
<SkillsModal />
      </div>
    </div>
  );
}
export default ModalCard;
