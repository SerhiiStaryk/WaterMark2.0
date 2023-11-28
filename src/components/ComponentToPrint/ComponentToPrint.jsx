/* eslint-disable new-cap */
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Page from '../Page/Page';
import Draggable from '../UI/Draggable/Draggable';

import { convertEditorStateToHtml } from '../../helpers/editor';

import classes from './ComponentToPrint.module.css';

const ComponentToPrint = forwardRef((props, ref) => {
  const {
    pageSize,
    imageSourse,
    showDraggable,
    draggableSize,
  } = props.printSettings;

  const htmlContent = convertEditorStateToHtml(props.content);

  return (
    <div className={classes.componentToPrintWrapper}>
      <div ref={ref}>
        <Page
          state={pageSize}
          imageSourse={imageSourse}
          showWatermark={props.showWatermark}
          style={{ position: 'relative', width: `${pageSize.width}cm`, height: `${pageSize.height}cm` }}
        >
          {
            showDraggable && <Draggable
              draggableSize={draggableSize}
              parentWidthInCm={pageSize.width}
              parentHeightInCm={pageSize.height}
            >
              {ReactHtmlParser(htmlContent)}
            </Draggable>
          }
        </Page>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = 'ComponentToPrint';

export default ComponentToPrint;
