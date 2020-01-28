import React from "react";
// reactstrap components
import {
  Button,
  Modal,

} from "reactstrap";
import { Container } from 'react-bootstrap';
import {  FiCpu } from 'react-icons/all';

class OperationsModal extends React.Component {
  state = {
    OperationsModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          onClick={() => this.toggleModal("OperationsModal")}
        >
          <FiCpu size={70} />{' '}

        </button>
        {/* Modal */}
        <Modal
          className="modal modal-dialog-centered"
          isOpen={this.state.OperationsModal}
          toggle={() => this.toggleModal("OperationsModal")}
        >
          <div className="modal-header">
            <h2 className="modal-title" id="OperationsModalLabel">
              Operations
            </h2>
            <Button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("OperationsModal")}
            >
              <span aria-hidden={true}>X</span>
            </Button>
          </div>
          <br/>
          <Container className="modal-body w-100 content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Linux</h3>
              <li className="modal-list-item">Ubuntu</li>
              <li className="modal-list-item">RedHat/CentOS</li>
              <li className="modal-list-item">Arch</li>
              <li className="modal-list-item">Alpine</li>
              <li className="modal-list-item">Scripting</li>
              <li className="modal-list-item">Remote Administration</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Containers && VM</h3>
              <li className="modal-list-item">Docker</li>
              <li className="modal-list-item">LXC/LXD</li>
              <li className="modal-list-item">KVM + QEMU</li>
              <li className="modal-list-item">CoreOS && rkt</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Provisioning</h3>
              <li className="modal-list-item">Ansible</li>
              <li className="modal-list-item">Chef</li>
              <li className="modal-list-item">Terraform</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">
                Deployment && Orchestration
              </h3>
              <li className="modal-list-item">Kubernetes</li>
              <li className="modal-list-item">Docker Swarm</li>
              <li className="modal-list-item">Apache Mesos</li>
            </ul>
          </Container>
          <br/>
          <Container className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("OperationsModal")}
            >
              Close
            </Button>
            <Button color="primary" type="button">
              Save changes
            </Button>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default OperationsModal;
