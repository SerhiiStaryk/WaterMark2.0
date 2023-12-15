/* eslint-disable new-cap */
import React, { forwardRef, useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Page from '../Page/Page';
import Draggable from '../UI/Draggable/Draggable';

import { convertEditorStateToHtml } from '../../helpers/editor';
import { AppContext } from '../../store/app-context';

import classes from './ComponentToPrint.module.css';

const ComponentToPrint = forwardRef((props, ref) => {
  const {
    pageSize,
    draggableSize,
  } = props.printSettings;

  const { showDraggable } = useContext(AppContext);

  const htmlContent = convertEditorStateToHtml(props.content);

  return (
    <div className={classes.componentToPrintWrapper}>
      <div ref={ref}>
        <Page
          state={pageSize}
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
