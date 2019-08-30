import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
function SysAdModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      style={{ opacity: 1 }}
       aria-labelledby="contained-modal-title-center"
       centered
      className="modal2"
    >
      <Modal.Header  className="modal-header">
        <Modal.Title>
          <h4 className="text-center">[systems administration]</h4>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <section>
          <ul>
            <h4>Linux</h4>
            <li>Linux SysAd</li>
            <li>Linux Shell Scripting</li>
            <li>Linux Internals Customization</li>
            <li>Modal Editing & Emacs</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>Containerization && Virtualization</h4>
            <li>Docker</li>
            <li>LXC/LXD</li>
            <li>KVM + QEMU</li>
            <li>CoreOS && rkt</li>
          </ul>
        </section>
        <section>
          <ul>
            <h4>Infrastructure && Automation</h4>
            <li>Ansible</li>
            <li>Chef</li>
            <li>Terraform</li>
          </ul>
        </section>
        <section>
          <ul>
          <h4>Deployment && Orchestration</h4>
          <li>Kubernetes</li>
          <li>Docker Swarm</li>
          <li>Apache Mesos</li>
          </ul>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-btn" onClick={props.onHide}>[close]</Button>

      </Modal.Footer>
    </Modal>
  );
}
export default SysAdModal;
