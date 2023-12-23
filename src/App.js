import React, { useRef, useState } from 'react';

import Footer from './components/Footer/Footer';
import Modal from './components/UI/Modal/Modal';
import Sidebar from './components/Sidebar/Sidebar';
import DraftEditor from './components/DraftEditor/DraftEditor';
import ControlPanel from './components/ControlPanel/ControlPanel';
import ComponentToPrint from './components/ComponentToPrint/ComponentToPrint';

import AppContextProvider from './store/app-context';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const targetRef = useRef();

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContextProvider>{showModal && <Modal onClose={handleShowModal}><DraftEditor /></Modal>}
      <Sidebar />
      <main className='main'><ComponentToPrint ref={targetRef} /></main>
      <Footer />
      <ControlPanel onEdit={handleShowModal} targetRef={targetRef} />
    </AppContextProvider>
  );
};

export default App;
