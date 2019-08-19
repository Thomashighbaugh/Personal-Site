import Card from 'reactstrap/es/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'reactstrap/es/Row';
import React, { useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function DropDownCard(){

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <Card>
  <ButtonToolbar>
    <Button onClick={() => setSmShow(true)}>Web Development</Button>
    <Button onClick={() => setLgShow(true)}>Systems Administration</Button>
    <Button onClick={() => setLgShow(true)}>Desktop Development</Button>
    <Modal
      size="xl"
      show={smShow}
      style={{opacity:1}}
      onHide={() => setSmShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
      Web Development
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>

    <Modal
      style={{opacity:1}}
      size="xl"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
Systems Administration        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
    <Modal
      style={{opacity:1}}
      size="xl"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
Systems Administration        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  </ButtonToolbar>
    </Card>
  )
  }

  export default DropDownCard
//   <Card>
//   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//   <Tab eventKey="landing" title="Skills">
//   <h3>[ skills ]</h3>
// <p>Click the tabs to check out some of the technology skills I bring to projects I work on!</p>
// </Tab>
// <Tab eventKey="web-dev" title="[web dev]">
//   <ul>
//     <li>HTML5/CSS3</li>
//     <li>Vanilla JS</li>
//     <li>React</li>
//     <li>Redux</li>
//     <li>WebPack</li>
//     <li>Gatsby</li>
//   </ul>
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
// </Card>