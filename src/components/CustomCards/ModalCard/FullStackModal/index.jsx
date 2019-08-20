import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
// this implements the modal which lists devops skills
//Each modal is split up for ease of management
function FullStackModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      style={{opacity:1}}
      className="fullStackModal"
    >
      <Modal.Header>
        <h1>[full stack technologies]</h1>

      </Modal.Header>

      <Modal.Body className="container-fluid">
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
          </ul>
        </section>
        <section>
       <ul>
          <h4>Servers Side</h4>
          <li>PHP</li>
          <li>NodeJS</li>
          <li>LAMP Stack</li>
          <li>Nginx Server</li>
       </ul>
       </section>
<section>
  <ul>
        <h4>Databases</h4>
        <li>MySQL</li>
        <li>Redis</li>
  </ul>
</section>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>

      </Modal.Footer>
    </Modal>
  );
}
export default FullStackModal;