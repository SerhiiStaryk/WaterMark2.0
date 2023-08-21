import React from 'react';

import Page from '../Page/Page';
import Editor from '../Editor/Editor';
import Draggable from '../UI/Draggable/Draggable';

const ComponentToPrint = React.forwardRef((props, ref) => {
  const { pageSize, imageSourse, showDraggable, draggableSize } = props.printSettings;

  return (
    <div ref={ref}>
      <Page state={pageSize} imageSourse={imageSourse}>
        <div style={{ position: 'relative', width: `${pageSize.width}cm`, height: `${pageSize.height}cm` }}>
          {
            showDraggable && <Draggable
              draggableSize={draggableSize}
              parentWidthInCm={pageSize.width}
              parentHeightInCm={pageSize.height}
            >
              <Editor value={props.templete}/>
            </Draggable>
          }
        </div>
      </Page>
    </div>
  );
});

export default ComponentToPrint;