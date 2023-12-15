import React, { useRef, useState } from 'react';

import { PAGE_OPTIONS } from './constants/page';
import { TEMPLATE_OPTIONS } from './constants/editor';

import Footer from './components/Footer/Footer';
import Modal from './components/UI/Modal/Modal';
import Sidebar from './components/Sidebar/Sidebar';
import DraftEditor from './components/DraftEditor/DraftEditor';
import ControlPanel from './components/ControlPanel/ControlPanel';
import ComponentToPrint from './components/ComponentToPrint/ComponentToPrint';

import { createEditorState } from './helpers/editor';
import AppContextProvider from './store/app-context';

const App = () => {
  const initialState = {
    pageSize: PAGE_OPTIONS[3],
    selectedTemplate: TEMPLATE_OPTIONS[0],
    optionForPdf: {
      orientation: 'landscape',
      unit: 'cm',
      format: [21, 29.7],
    },
    content: createEditorState(TEMPLATE_OPTIONS[0].value),
  };

  const [state, setState] = useState(initialState);

  const [showModal, setShowModal] = useState(false);

  const printSettings = {
    pageSize: state.pageSize.value,
  };

  const componentRef = useRef(printSettings);

  const changePageHandler = selectedOption => {
    const { label, value } = selectedOption;

    const newOptionForPdf = {
      orientation: label.includes('landscape') ? 'landscape' : 'portrait',
      unit: 'cm',
      format: [value.height, value.width],
    };

    setState(prev => ({
      ...prev,
      pageSize: selectedOption,
      optionForPdf: newOptionForPdf,
    }));
  };

  const changeTemplateHandler = selectedOption => {
    setState(prev => ({
      ...prev,
      content: createEditorState(selectedOption.value),
      selectedTemplate: selectedOption,
    }));
  };

  const setContentHtmlHandler = content => {
    setState(prev => ({
      ...prev,
      content,
    }));
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContextProvider>
      {
        showModal &&
        <Modal onClose={handleShowModal}>
          <DraftEditor
            // TODO: need to get currunt state
            editorState={state.content}
            setEditorState={setContentHtmlHandler}
          />
        </Modal>
      }

      <Sidebar
        selectedPage={state.pageSize}
        templateOptions={TEMPLATE_OPTIONS}
        selectedTemplate={state.selectedTemplate}
        selectedFileName={state.selectedFileName}
        onChangePage={changePageHandler}
        onChangeTemplate={changeTemplateHandler}
      />

      <main className='main'>
        <ComponentToPrint
          ref={componentRef}
          content={state.content}
          printSettings={printSettings}
          template={state.selectedTemplate.value}
        />
      </main>

      <Footer />

      <ControlPanel
        onEdit={handleShowModal}
        componentRef={componentRef}
      />
    </AppContextProvider>
  );
};

export default App;
