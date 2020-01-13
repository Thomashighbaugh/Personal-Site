import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
function DevOpsModal(props) {
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
        <Modal.Title id="example-custom-modal-styling-title">
          <h4>Development Operations</h4>{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section>
          <ul>
            <h4>Cloud/Serverless Services</h4>
            <li>AWS</li>
            <li>Azure</li>
            <li>GitHub/GitLab Pages</li>
            <li>Surge</li>
            <li>Netlify</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>Version Control</h4>
            <li>Git</li>
            <li>Bazaar</li>
            <li>Subversion</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>Continuous Integration</h4>
            <li>Jenkins</li>
            <li>Travis CI</li>
            <li>GitLab Pipelines</li>
          </ul>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" onClick={props.onHide}>
      close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default DevOpsModal;
