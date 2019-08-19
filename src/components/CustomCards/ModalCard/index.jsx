import Card from 'reactstrap/es/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'reactstrap/es/Row';
import React, { useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WebDevModal from './WebDevModal';
import CardHeader from 'reactstrap/es/CardHeader';
import CardSubtitle from 'reactstrap/es/CardSubtitle';
import CardTitle from 'reactstrap/es/CardTitle';
import DevOpsModal from './DevOpsModal';


function ModalCard() {
  //   const [smShow, setSmShow] = useState(false);
  //   const [lgShow, setLgShow] = useState(false);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [xlShow, setxlShow] = useState(false);

  return (
    <Card id="skills-card">

    </Card>
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


//
// <CardHeader>
//   <CardTitle>
//     [skills]
//   </CardTitle>
//   <CardSubtitle>
//     Click the buttons below to view modals listing topical skills I have obtained in the process of learning web development.
//   </CardSubtitle>
//   <hr/>
// </CardHeader>
// <ButtonToolbar>
// <Button onClick={() => setModalShow(true)}>
// [webdev]
// </Button>
// <WebDevModal
//   show={modalShow}
//   onHide={() => setModalShow(false)}
// />
// <Button onClick={() => setModalShow2(true)}>
// [devops]
// </Button>
// <DevOpsModal
//   show={modalShow2}
//   onHide={() => setModalShow2(false)}
// />
// </ButtonToolbar>