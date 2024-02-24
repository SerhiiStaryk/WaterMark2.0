import React, { useRef, useState } from 'react';

import Footer from './components/Footer/Footer';
import Modal from './components/UI/Modal/Modal';
import Sidebar from './components/Sidebar/Sidebar';
import DraftEditor from './components/DraftEditor/DraftEditor';
import ControlPanel from './components/ControlPanel/ControlPanel';
import ComponentToPrint from './components/ComponentToPrint/ComponentToPrint';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const targetRef = useRef();

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      {showModal && (
        <Modal onClose={handleShowModal}>
          <DraftEditor />
        </Modal>
      )}
      <Sidebar />
      <main className='main'>
        <ComponentToPrint ref={targetRef} />
      </main>
      <Footer />
      <ControlPanel
        targetRef={targetRef}
        onEdit={handleShowModal}
      />
    </React.Fragment>
  );
};

export default App;
