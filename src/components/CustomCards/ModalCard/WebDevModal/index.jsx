import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
//This implements the Web Development Modal
// Each modal is split for ease of reading/management
function WebDevModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      style={{opacity:1}}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-xl"
    >

      <Modal.Body>
        <h4>Web Development Skills</h4>
        <h5>
          These are the languages, libraries and frameworks that I have
          experience with.
        </h5>
        <ul>
          <li>HTML5/CSS3</li>
          <li>Vanilla JS</li>
          <li>ECMAScript 6</li>
          <li>EMCAScript 7</li>
          <li>React</li>
          <li>SASS/SCSS</li>
          <li>LESS</li>
          <li>Redux</li>
          <li>WebPack</li>
          <li>Gatsby</li>
          <li>MaterialUI</li>
          <li>Bootstrap</li>
          <li>Markdown</li>
          <li>CSS Grid</li>
          <li>jQuery</li>
          <li>WordPress</li>
        </ul>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>

    </Modal>
  );
}
export default WebDevModal;