import React, { useState } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WebDevModal from './WebDevModal';
import DevOpsModal from './DevOpsModal';
import Card from 'react-bootstrap/Card';
import FullStackModal from './FullStackModal';

function ModalCard() {
  const [XShow, setXShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
const[xlShow, setXlShow] = useState(false);
  return (
    <Card className="modal-about-card">
      <Card.Header>
        <Card.Title>
          [skills]
        </Card.Title>
        <Card.Subtitle>
        click the buttons below to see modals
        </Card.Subtitle>

      </Card.Header>
      <hr/>
      <ButtonToolbar>
        <Button className="nav-btn" onClick={() => setXShow(true)}>DevOps</Button>
        <Button className="nav-btn" onClick={() => setLgShow(true)}>WebDev</Button>
        <Button className="nav-btn" onClick={() => setXlShow(true)}>FullStack</Button>

        <DevOpsModal
          size="xl"
          show={XShow}
          onHide={() => setXShow(false)}
          aria-labelledby="example-modal-sizes-title-X"
        />
        <WebDevModal
          size="xl"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        />
        <FullStackModal
          size="xl"
          show={xlShow}
          onHide={() => setXlShow(false)}
          aria-labelledby="example-modal-sizes-title-xl"
        />

      </ButtonToolbar>
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
