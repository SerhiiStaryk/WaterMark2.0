import './App.css';
import { useEffect, useRef, useState } from 'react';
import { PAGE_OPTIONS } from './constants/page';

import Sidebar from './components/Sidebar/Sidebar';
import ControlPanel from './components/ControlPanel/ControlPanel';
import ComponentToPrint from './components/ComponentToPrint/ComponentToPrint';

const App = () => {
  const initialPageState = PAGE_OPTIONS[3];
  const initialDraggableSize = { width: 10, height: 5 }

  const [pageState, setPageState] = useState(initialPageState);
  const [draggableSize, setDraggableSize] = useState(initialDraggableSize);
  const [pageSize, setPageSize] = useState(pageState.value)
  const [showDraggable, setShowDraggable] = useState(true);
  const [imageSourse, setImageSrc] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const componentRef = useRef({ pageSize, imageSourse, showDraggable, draggableSize });

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

  const handleChange = (selectedOption) => {
    setPageState(selectedOption);
  }

  const printHandler = () => {
    window.print();
  }

  useEffect(() => {
    setPageSize(pageState.value);

  }, [pageState]);

  return (
    <>
      <Sidebar
        options={PAGE_OPTIONS}
        onChange={handleChange}
        selectedOption={pageState}
        showDraggable={showDraggable}
        draggableSize={draggableSize}
        defaultValue={initialPageState.value}
        selectedFileName={selectedFileName}
        onShowDraggable={showDraggableHandler}
        onChangeBackground={changeBackgroundHandler}
        onChangeDraggableSize={changeDraggableSizeHandler}
      />

      <div style={{ padding: '20px 0 0 100px' }}>
        <ComponentToPrint ref={componentRef} printSettings={{
          pageSize,
          imageSourse,
          showDraggable,
          draggableSize,
        }} />
      </div>

      <footer style={{ margin: '20px', textAlign: 'center' }}>© 2023 Serhii Staryk</footer>

      <ControlPanel onPrint={printHandler} componentRef={componentRef} />
    </>
  );
};

export default App;
