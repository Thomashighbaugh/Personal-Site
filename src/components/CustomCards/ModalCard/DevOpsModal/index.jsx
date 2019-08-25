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
      aria-labelledby="contained-modal-title-center"
      centered
      className="modal2"
    >
<Modal.Header>
  <Modal.Title><h4>Systems Administration</h4></Modal.Title>
</Modal.Header>

      <Modal.Body>
        <section>
      <ul>
          <h4>Linux</h4>
        <li>Linux SysAd</li>
          <li>Linux Shell Scripting</li>
          <li>Linux Internals Customization ('Ricing')</li>
          <li>Modal Editing & Emacs</li>
        </ul>
     </section>
          <section>
          <ul>
          <h4>Containerization & Virtualization</h4>
          <li>Docker</li>
          <li>LXC/LXD</li>
          <li>KVM + QEMU</li>
          <li>OpenVZ</li>
          <li>CoreOS && rkt</li>
          <li>Proxmox</li>
          </ul>
          </section>
  <section>
       <ul>
          <h4>Infrastructure && Automation</h4>
          <li>Ansible</li>
          <li>Puppet</li>
          <li>Chef</li>
         <li>Terraform</li>
       </ul>
</section>
  <section>
    <ul>
          <h6>Security</h6>
          <li>Kali Linux</li>
          <li>Black Arch</li>
    </ul>
    </section>
<section>
          <h6>Deployment && Orchestration</h6>
          <li>Kubernetes</li>
          <li>Docker Swarm</li>
          <li>Apache Mesos</li>
</section>
        <section> <ul>

        </ul>
        </section>
          <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  );
}
export default DevOpsModal;