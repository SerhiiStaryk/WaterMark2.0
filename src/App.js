import { useRef, useState } from 'react';

import { PAGE_OPTIONS } from './constants/page';
import { TEMPLATE_OPTIONS } from './constants/editor'

import Sidebar from './components/Sidebar/Sidebar';
import ControlPanel from './components/ControlPanel/ControlPanel';
import ComponentToPrint from './components/ComponentToPrint/ComponentToPrint';
import Footer from './components/Footer/Footer';

const App = () => {
  const initialState = {
    imageSourse: null,
    showDraggable: false,
    selectedFileName: '',
    pageSize: PAGE_OPTIONS[3],
    selectedTemplate: TEMPLATE_OPTIONS[0],
    draggableSize: { width: 9, height: 4 },
    optionForPdf: {
      orientation: 'landscape',
      unit: 'cm',
      format: [21, 29.7]
    }
  }

  const [state, setState] = useState(initialState)

  const printSettings = {
    pageSize: state.pageSize.value,
    imageSourse: state.imageSourse,
    showDraggable: state.showDraggable,
    draggableSize: state.draggableSize,
  }

  const componentRef = useRef(printSettings);

  const changeDraggableSizeHandler = (value, name) => {
    setState(prev => ({
      ...prev,
      draggableSize: {
        ...prev.draggableSize,
        [name]: +value
      }
    }))
  };

  const showDraggableHandler = () => {
    setState(prev => ({
      ...prev,
      showDraggable: !prev.showDraggable
    }))
  };

  const changeBackgroundHandler = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setState(prev => ({
      ...prev,
      imageSourse: url,
      selectedFileName: file.name
    }))
  };

  const changePageHandler = (selectedOption) => {
    const { label, value } = selectedOption;

    const newOptionForPdf = {
      orientation: label.includes('landscape') ? 'landscape' : 'portrait',
      unit: 'cm',
      format: [value.height, value.width]
    }

    setState(prev => ({
      ...prev,
      pageSize: selectedOption,
      optionForPdf: newOptionForPdf,
    }))
  };

  const changeTemplateHandler = (selectedOption) => {
    setState(prev => ({
      ...prev,
      showDraggable: false,
      selectedTemplate: selectedOption
    }))
  };

  const resetAppHandler = () => {
    setState({
      ...initialState,
      showDraggable: false,
    })
  }

  const printHandler = () => {
    window.print();
  };

  return (
    <>
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

      <div style={{ padding: '20px 0 0 100px' }}>
        <ComponentToPrint
          ref={componentRef}
          printSettings={printSettings}
          template={state.selectedTemplate.value}
        />
      </div>

      <Footer />

      <ControlPanel
        options={state.optionForPdf}
        componentRef={componentRef}
        onPrint={printHandler}
        onResetApp={resetAppHandler}
      />
    </>
  );
};

export default App;
