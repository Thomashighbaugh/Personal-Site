import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
//This implements the Web Development Modal
// Each modal is split for ease of reading/management
function FrontEndModal(props) {
  return (
    <Modal
      {...props}
      style={{ opacity: 1 }}
      aria-labelledby="example-custom-modal-styling-title"
      centered
      scrollable
      backdropClassName="bg-dark"
      dialogClassName="modal-90w"
    >
      <Modal.Header className="modal-header">
        <Modal.Title>
          <h4 className="text-center">Front End Skills</h4>{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section>
          <ul>
            <h4>Languages</h4>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Vanilla JS</li>
            <li>Typescript</li>
            <li>Lua</li>
            <li>GraphQL</li>
          </ul>
        </section>

        <section>
          <ul>
            <h4>Frameworks && Libraries</h4>
            <li>React</li>
            <li>TSReact</li>
            <li>MaterialUI</li>
            <li>Bootstrap</li>
            <li>CSS Grid</li>
            <li>jQuery</li>
            <li>LESS</li>
            <li>SASS/SCSS</li>
          </ul>
        </section>

        <section>
          <ul>
            <h4>[transpilers, bundlers && site generators]</h4>
            <li>Babel</li>
            <li>Webpack</li>
            <li>Gatsby</li>
            <li>Gulp.js</li>
          </ul>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" onClick={props.onHide}>
          [close]
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default FrontEndModal;
