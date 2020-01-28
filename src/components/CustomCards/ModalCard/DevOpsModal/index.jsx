import React from 'react';
// reactstrap components
import { Button, Modal } from 'reactstrap';
import { Container } from 'react-bootstrap';
import { FaGitAlt } from 'react-icons/all';

class DevOpsModal extends React.Component {
  state = {
    DevOpsModal: false,
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <div>
        {/* Button trigger modal */}
        <button type="button" onClick={() => this.toggleModal('DevOpsModal')}>
          <FaGitAlt size={70} />
        </button>
        {/* Modal */}
        <Modal
          className="modal modal-dialog-centered"
          isOpen={this.state.DevOpsModal}
          toggle={() => this.toggleModal('DevOpsModal')}
        >
          <div className="modal-header">
            <h2 className="modal-title" id="DevOpsModalLabel">
              DevOps
            </h2>
            <Button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('DevOpsModal')}
            >
              <span aria-hidden={true}>X</span>
            </Button>
          </div>
          <br />
          <Container className="modal-body w-100 content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Clouds // Serverless</h3>
              <li className="modal-list-item">AWS</li>
              <li className="modal-list-item">Azure</li>
              <li className="modal-list-item">Firebase</li>
              <li className="modal-list-item">Netlify</li>
              <li className="modal-list-item">Github/GitLab Pages</li>
              <li className="modal-list-item">Surge</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Web Servers & Stacks</h3>
              <li className="modal-list-item">LAMP</li>
              <li className="modal-list-item">LEMP</li>
              <li className="modal-list-item">Nginx</li>
              <li className="modal-list-item">WebPack Development Server</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">CI/CD</h3>
              <li className="modal-list-item">Jenkins</li>
              <li className="modal-list-item">Travis</li>
              <li className="modal-list-item">GitLab Pipelines</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Databases</h3>
              <li className="modal-list-item">MySQL</li>
              <li className="modal-list-item">NoSQL</li>
              <li className="modal-list-item">PostgreSQL</li>
              <li className="modal-list-item">Redis</li>
            </ul>
          </Container>
          <br />
          <Container className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('DevOpsModal')}
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

export default DevOpsModal;
