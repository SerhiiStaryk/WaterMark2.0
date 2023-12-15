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
    showEditor: false,
    imageSourse: null,
    showDraggable: true,
    selectedFileName: '',
    pageSize: PAGE_OPTIONS[3],
    selectedTemplate: TEMPLATE_OPTIONS[0],
    draggableSize: { width: 8, height: 4 },
    optionForPdf: {
      orientation: 'landscape',
      unit: 'cm',
      format: [21, 29.7],
    },
    content: createEditorState(TEMPLATE_OPTIONS[0].value),
  };

  const [state, setState] = useState(initialState);

  const printSettings = {
    pageSize: state.pageSize.value,
    imageSourse: state.imageSourse,
    showDraggable: state.showDraggable,
    draggableSize: state.draggableSize,
  };

  const componentRef = useRef(printSettings);

  const changeDraggableSizeHandler = (value, name) => {
    setState(prev => ({
      ...prev,
      draggableSize: {
        ...prev.draggableSize,
        [name]: +value,
      },
    }));
  };

  const showDraggableHandler = () => {
    setState(prev => ({
      ...prev,
      showDraggable: !prev.showDraggable,
    }));
  };

  const changeBackgroundHandler = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setState(prev => ({
      ...prev,
      imageSourse: url,
      selectedFileName: file.name,
    }));
  };

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

  const resetAppHandler = () => {
    setState(initialState);
  };

  const triggerModal = () => {
    setState(prev => ({
      ...prev,
      showEditor: !prev.showEditor,
    }));
  };

  const setContentHtmlHandler = content => {
    setState(prev => ({
      ...prev,
      content,
    }));
  };

  return (
    <AppContextProvider>
      {
        state.showEditor &&
        <Modal onClose={triggerModal}>
          <DraftEditor
            // TODO: need to get currunt state
            editorState={state.content}
            setEditorState={setContentHtmlHandler}
          />
        </Modal>
      }

      <Sidebar
        pageOptions={PAGE_OPTIONS}
        templateOptions={TEMPLATE_OPTIONS}
        selectedPage={state.pageSize}
        showDraggable={state.showDraggable}
        draggableSize={state.draggableSize}
        selectedTemplate={state.selectedTemplate}
        selectedFileName={state.selectedFileName}
        onChangePage={changePageHandler}
        onShowDraggable={showDraggableHandler}
        onChangeTemplate={changeTemplateHandler}
        onChangeBackground={changeBackgroundHandler}
        onChangeDraggableSize={changeDraggableSizeHandler}
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
        componentRef={componentRef}
        onResetApp={resetAppHandler}
        onEdit={triggerModal}
      />
    </AppContextProvider>
  );
};

export default App;
