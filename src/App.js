import './App.css';
import { useEffect, useState } from 'react';
import Page from './components/Page/Page';
import Editor from './components/Editor/Editor';
import Sidebar from './components/Sidebar/Sidebar';
import { PAGE_OPTIONS } from './constants/page';
import Draggable from './components/UI/Draggable/Draggable';

const App = () => {
  const initialPageState = PAGE_OPTIONS[3];
  const initialdraggableSize = { width: 10, height: 5 }

  const [pageState, setPageState] = useState(initialPageState);
  const [pageSize, setPageSize] = useState(pageState.value)
  const [draggableSize, setDraggableSize] = useState(initialdraggableSize);
  const [showDraggable, setShowDraggable] = useState(true);

  const handleChange = (selectedOption) => {
    setPageState(selectedOption);
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
        defaultValue={initialPageState.value}
      />
      <button>Print</button>
      <div style={{ padding: '20px 0 0 100px' }}>
        <Page state={pageSize}>
          <div style={{ position: 'relative', width: `${pageSize.width}cm`, height: `${pageSize.height}cm` }}>
            {
              showDraggable && <Draggable
                draggableSize={draggableSize}
                parentWidthInCm={pageSize.width}
                parentHeightInCm={pageSize.height}
              >
                <Editor />
              </Draggable>
            }
          </div>
        </Page>
      </div>
      <footer style={{ margin: '20px', textAlign: 'center' }}>© 2023 Serhii Staryk</footer>
    </>
  );
};

export default App;
