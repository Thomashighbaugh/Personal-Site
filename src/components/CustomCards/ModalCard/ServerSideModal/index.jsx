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
            <h4>[server side languages]</h4>
            <li>PHP</li>
            <li>Node.js</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>[databases]</h4>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>Redis</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>[back up]</h4>
            <li>NextCloud</li>
            <li>Sandstorm</li>
            <li>Borg</li>
            <li>RSync</li>
          </ul>
        </section>
        <section>
          <ul>
          <h4>[dev servers & stacks]</h4>
          <li>LAMP</li>
          <li>Apache</li>
          <li>Nginx</li>
            <li>WebPack Dev Server</li>
          </ul>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" onClick={props.onHide}>[close]</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ServerSideModal;
