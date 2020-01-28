import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";
import { Container } from 'react-bootstrap';
import { FaPenSquare } from 'react-icons/all';

class Modals extends React.Component {
  state = {
    WebDevModal: false
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
          onClick={() => this.toggleModal("WebDevModal")}
        >
          <FaPenSquare size={70} />{' '}

        </button>
        {/* Modal */}
        <Modal
          className="modal modal-dialog-centered"
          isOpen={this.state.WebDevModal}
          toggle={() => this.toggleModal("WebDevModal")}
        >
          <div className="modal-header">
            <h2 className="modal-title" id="WebDevModalLabel">
              Web Development
            </h2>
            <Button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("WebDevModal")}
            >
              <span aria-hidden={true}>X</span>
            </Button>
          </div>
          <br/>
          <Container className="modal-body content w-100">
            <ul className="modal-list">
              <h3 className="modal-list-heading">Languages</h3>
              <li className="modal-list-item">HTML5</li>
              <li className="modal-list-item">Pug</li>
              <li className="modal-list-item">CSS3</li>
              <li className="modal-list-item">Javascript</li>
              <li className="modal-list-item">GraphQL</li>
              <li className="modal-list-item">Typescript</li>
              <li className="modal-list-item">PHP</li>
              <li className="modal-list-item">Node.js</li>
              <li className="modal-list-item">Ruby</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Frameworks && Libraries</h3>
              <li className="modal-list-item">React.js</li>
              <li className="modal-list-item">Redux</li>
              <li className="modal-list-item">Bootstrap</li>
              <li className="modal-list-item">jQuery</li>
              <li className="modal-list-item">SASS</li>
              <li className="modal-list-item">LESS</li>
              <li className="modal-list-item">TSReact</li>
              <li className="modal-list-item">MaterialUI</li>
            </ul>
            <ul className="modal-list">
              <h3 className="modal-list-heading">Front End Tools</h3>
              <li className="modal-list-item">Babel</li>
              <li className="modal-list-item">Webpack</li>
              <li className="modal-list-item">Gatsby</li>
              <li className="modal-list-item">Gulp.js</li>
              <li className="modal-list-item">Yeoman</li>
              <li className="modal-list-item">ESLint</li>
              <li className="modal-list-item">SonarLint</li>
            </ul>
          </Container>
          <br/>
          <Container className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("WebDevModal")}
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

export default Modals;
