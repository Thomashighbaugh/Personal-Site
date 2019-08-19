import Card from 'reactstrap/es/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'reactstrap/es/Row';
import React, { useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      style={{opacity:1}}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-xl"
    >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body>
        <h4>Web Development Skills</h4>
   <h5>
    These are the languages, libraries and frameworks that I have
    experience with.
   </h5>
        <ul>
          <li>HTML5/CSS3</li>
          <li>Vanilla JS</li>
          <li>ECMAScript 6</li>
          <li>EMCAScript 7</li>
          <li>React</li>
          <li>SASS/SCSS</li>
          <li>LESS</li>
          <li>Redux</li>
          <li>WebPack</li>
          <li>Gatsby</li>
          <li>MaterialUI</li>
          <li>Bootstrap</li>
          <li>Markdown</li>
          <li>CSS Grid</li>
          <li>jQuery</li>
          <li>WordPress</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalCard() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
export default ModalCard;
//   <Card>
//   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//   <Tab eventKey="landing" title="Skills">
//   <h3>[ skills ]</h3>
// <p>Click the tabs to check out some of the technology skills I bring to projects I work on!</p>
// </Tab>
// <Tab eventKey="web-dev" title="[web dev]">

// </Tab>
// <Tab eventKey="dev-ops" title="[dev ops]">
//   <ul>
//   <li>Linux SysAd</li>
// <li>Shell Scripting</li>
// <li>Systems Administration</li>
// <li>'Ricing'</li>
// <li>Virtualization</li>
// <li>KVM/QEMU</li>
// <li>OpenVZ</li>
// <li>Xen</li>
// <li>SSH</li>
// <li>LAMP</li>
// <li>Containerization</li>
// <li>Docker</li>
// <li>Ansible</li>
// </ul>
// </Tab>
// </Tabs>
// // </Card>

//
// <ButtonToolbar>
//   <Button onClick={() => setSmShow(true)}>Web Development</Button>
//   <Button onClick={() => setLgShow(true)}>Systems Administration</Button>
//   <Button onClick={() => setLgShow(true)}>DevOps</Button>
//   <Modal
//     size="xl"
//     show={smShow}
//     style={{ opacity: 1 }}
//     onHide={() => setSmShow(false)}
//     aria-labelledby="example-modal-sizes-title-sm"
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="example-modal-sizes-title-sm">
//         Web Development
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//
//     </Modal.Body>
//   </Modal>
//
//   <Modal
//     style={{ opacity: 1 }}
//     size="xl"
//     show={lgShow}
//     onHide={() => setLgShow(false)}
//     aria-labelledby="example-modal-sizes-title-lg"
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="example-modal-sizes-title-lg">
//         Systems Administration{' '}
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>...</Modal.Body>
//   </Modal>
//   <Modal
//     size="xl"
//     show={lgShow}
//     onHide={() => setLgShow(false)}
//     aria-labelledby="example-modal-sizes-title-lg"
//   >
//     <Modal.Header closeButton>
//       <Modal.Title id="example-modal-sizes-title-lg">
//         DevOps
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>...</Modal.Body>
//   </Modal>
// </ButtonToolbar>
