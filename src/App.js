import { useRef, useState } from 'react';

import { PAGE_OPTIONS } from './constants/page';
import { TEMPLETE_OPTIONS } from './constants/editor'

import Sidebar from './components/Sidebar/Sidebar';
import ControlPanel from './components/ControlPanel/ControlPanel';
import ComponentToPrint from './components/ComponentToPrint/ComponentToPrint';

const App = () => {
  const initialState = {
    imageSourse: null,
    showDraggable: true,
    selectedFileName: '',
    pageSize: PAGE_OPTIONS[3],
    initialDraggableSize: { width: 11, height: 5 },
  }

  const [imageSourse, setImageSrc] = useState(initialState.imageSourse);
  const [selectedPage, setSelectedPage] = useState(initialState.pageSize);
  const [selectedTemplete, setSelectedTemplete] = useState(TEMPLETE_OPTIONS[0]);
  const [showDraggable, setShowDraggable] = useState(initialState.showDraggable);
  const [draggableSize, setDraggableSize] = useState(initialState.initialDraggableSize);
  const [selectedFileName, setSelectedFileName] = useState(initialState.selectedFileName);

  const componentRef = useRef({ pageSize: selectedPage.value, imageSourse, showDraggable, draggableSize });

  const changeDraggableSizeHandler = (value, name) => {
    setDraggableSize(prev => ({
      ...prev,
      [name]: +value
    }))
  }

  const showDraggableHandler = () => {
    setShowDraggable((prev) => !prev)
  }

  const changeBackgroundHandler = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setSelectedFileName(file.name);
    setImageSrc(url)
  }

  const handleChangePage = (selectedOption) => {
    setSelectedPage(selectedOption);
  }

  const handleChangeTemplete = (selectedOption) => {
    //templete or template
    setSelectedTemplete(selectedOption);
    setShowDraggable(false)
  }

  const printHandler = () => {
    window.print();
  }

  return (
    <>
      <Sidebar
        pageOptions={PAGE_OPTIONS}
        templeteOptions={TEMPLETE_OPTIONS}
        selectedPage={selectedPage}
        selectedTemplete={selectedTemplete}
        showDraggable={showDraggable}
        draggableSize={draggableSize}
        selectedFileName={selectedFileName}
        onChangePage={handleChangePage}
        onChangeTemplete={handleChangeTemplete}
        onShowDraggable={showDraggableHandler}
        onChangeBackground={changeBackgroundHandler}
        onChangeDraggableSize={changeDraggableSizeHandler}
      />

      <div style={{ padding: '20px 0 0 100px' }}>
        <ComponentToPrint
          ref={componentRef}
          templete={selectedTemplete.value}
          printSettings={{
            pageSize: selectedPage.value,
            imageSourse,
            showDraggable,
            draggableSize,
          }}
        />
      </div>

      <footer style={{ margin: '20px', textAlign: 'center' }}>© 2023 Serhii Staryk</footer>

      <ControlPanel onPrint={printHandler} componentRef={componentRef} />
    </>
  );
};

export default App;
