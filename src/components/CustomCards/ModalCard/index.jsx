import React, { useState } from 'react';
import FrontEndModal from './FrontEndModal';
import DevOpsModal from './DevOpsModal';
import SysAdModal from './SysAdModal';
import Card from 'react-bootstrap/Card';
import ServerSideModal from './ServerSideModal';
function ModalCard() {
  const [XShow, setXShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [xlShow, setXlShow] = useState(false);
  const [xxlShow, setXXlShow] = useState(false);
  return (
    <Card className="modalCard">
      <Card.Header>
        <Card.Title>[skills]</Card.Title>
        <Card.Subtitle>
          These are some of the technologies I have experience with!
        </Card.Subtitle>
      </Card.Header>
      <hr />
      <Card.Body>
        {/*buttons*/}
        <p>
          Click the buttons to see a modal with a list of the technologies in
          that category.
        </p>
        <main>
          <button className="modalNav" onClick={() => setXShow(true)}>
            [devOps]
          </button>
          <br />
          <br />
          <button className="modalNav" onClick={() => setLgShow(true)}>
            [frontEnd]
          </button>
        </main>
        <aside>
          <button className="modalNav" onClick={() => setXlShow(true)}>
            [sysAd]
          </button>
          <br />
          <br />
          <button className="modalNav" onClick={() => setXXlShow(true)}>
            [backEnd]
          </button>
        </aside>
        {/*end buttons*/}
        {/*Begin Modal Calls*/}
        <DevOpsModal
          size="xl"
          show={XShow}
          onHide={() => setXShow(false)}
          aria-labelledby="example-modal-sizes-title-X"
        />
        <FrontEndModal
          size="xl"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        />
        <SysAdModal
          size="xl"
          show={xlShow}
          onHide={() => setXlShow(false)}
          aria-labelledby="example-modal-sizes-title-xl"
        />
        <ServerSideModal
          size="xl"
          show={xxlShow}
          onHide={() => setXXlShow(false)}
          aria-labelledby="example-modal-sizes-title-xl"
        />
      </Card.Body>
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
