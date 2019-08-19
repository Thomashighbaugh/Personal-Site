import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
// this implements the modal which lists devops skills
//Each modal is split up for ease of management
function DevOpsModal(props) {
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
        <hr/>
        <section>
        <ul>
          <h6>[technical skills]</h6>
        <li>Linux SysAd</li>
          <li>Linux Shell Scripting</li>
          <li>Linux Internals Customization ('Ricing')</li>
          <li>Git</li>
          <li>Docker</li>
          <li>LXC/LXD</li>

          <li>Bazaar</li>
          <li>Subversion</li>
          <li>Modal Editing & Emacs</li>
          <li>KVM + QEMU</li>
          <li>Web Development Skills (see other modal)</li>
          <li>Jenkins</li>
          <li>Travis CI</li>
          <li>Ansible</li>
        </ul></section>
        <section> <ul>
          <h6>Soft Skills</h6>
 <li>Communication</li>
          <li>Professional Relationship Cultivation</li>
          <li>Attentive Listening</li>
          <li>Source Code Management and Quality Assurance</li>
        </ul>
        </section>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  );
}
export default DevOpsModal;