import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
function ServerSideModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      style={{ opacity: 1 }}
      aria-labelledby="contained-modal-title-center"
      centered
      className="modal4"
    >
      <Modal.Header className="modal-header">
        <Modal.Title>
          <h4 className="text-center">[server side skills]</h4>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <section>
          <ul>
            <h4>Server Side Languages</h4>
            <li>PHP</li>
            <li>Node.js</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>Databases</h4>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>Redis</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>Back Up and Personal Clouds</h4>
            <li>NextCloud</li>
            <li>Borg</li>
            <li>RSync</li>
          </ul>
        </section>
        <section>
          <h4>Development Servers & Stacks</h4>
          <li>LAMP</li>
          <li>Apache</li>
          <li>Nginx</li>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" onClick={props.onHide}>[close]</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ServerSideModal;
