import React from 'react';
// reactstrap components
import { Button, Modal } from 'reactstrap';
import { Container } from 'react-bootstrap';
import { FaDesktop} from 'react-icons/all';

class DesktopModal extends React.Component {
  state = {
    DesktopModal: false,
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
        <button type="button" onClick={() => this.toggleModal('DesktopModal')}>
          <FaDesktop size={70} />
        </button>
        {/* Modal */}
        <Modal
          className="modal modal-dialog-centered"
          isOpen={this.state.DesktopModal}
          toggle={() => this.toggleModal('DesktopModal')}
        >
          <div className="modal-header">
            <h2 className="modal-title" id="DesktopModalLabel">
              DevOps
            </h2>
            <Button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('DesktopModal')}
            >
              <span aria-hidden={true}>X</span>
            </Button>
          </div>
          <br />
          <Container className="modal-body w-100 content">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Languages && Platforms</h3>
              <li className="modal-list-item">C</li>
              <li className="modal-list-item">C++</li>
              <li className="modal-list-item">Java</li>
              <li className="modal-list-item">Rust</li>
              <li className="modal-list-item">Electron</li>
              <li className="modal-list-item">Lua</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">IDEs</h3>
              <li className="modal-list-item">JetBrains</li>
              <li className="modal-list-item">Eclipse</li>
              <li className="modal-list-item">EMacs</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Packaging</h3>
              <li className="modal-list-item">DEB</li>
              <li className="modal-list-item">APPIMAGE</li>
              <li className="modal-list-item">Snap</li>
              <li className="modal-list-item">RPM</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">UI Libraries</h3>
              <li className="modal-list-item">QT</li>
              <li className="modal-list-item">GTK</li>
              <li className="modal-list-item">Zenity</li>
            </ul>
          </Container>
          <br />
          <Container className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal('DesktopModal')}
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

export default DesktopModal;
