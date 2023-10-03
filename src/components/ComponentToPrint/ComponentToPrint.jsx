import React from 'react';

import Page from '../Page/Page';
import Draggable from '../UI/Draggable/Draggable';

import ReactHtmlParser from 'react-html-parser';
import { convertEditorStateToHtml } from '../../helpers/editor';

const ComponentToPrint = React.forwardRef((props, ref) => {
  const { pageSize, imageSourse, showDraggable, draggableSize } = props.printSettings;

  const htmlContent = convertEditorStateToHtml(props.content)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div ref={ref}>
        <Page state={pageSize} imageSourse={imageSourse}>
          <div style={{ position: 'relative', width: `${pageSize.width}cm`, height: `${pageSize.height}cm` }}>
            {
              showDraggable && <Draggable
                draggableSize={draggableSize}
                parentWidthInCm={pageSize.width}
                parentHeightInCm={pageSize.height}
              >
                {ReactHtmlParser(htmlContent)}
              </Draggable>
            }
          </div>
        </Page>
      </div>
    </div>
  );
});

export default ComponentToPrint;