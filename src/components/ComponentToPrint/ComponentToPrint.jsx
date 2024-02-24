/* eslint-disable new-cap */
import React, { forwardRef, useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Page from '../Page/Page';
import Draggable from '../UI/Draggable/Draggable';

import { AppContext } from '../../store/app-context';
import { convertEditorStateToHtml } from '../../helpers/editor';

import classes from './ComponentToPrint.module.css';

const ComponentToPrint = forwardRef((props, ref) => {
  const { content, pageSize, showDraggable } = useContext(AppContext);

  const htmlContent = convertEditorStateToHtml(content);

  const { width, height } = pageSize.value;

  return (
    <div className={classes.componentToPrintWrapper}>
      <div ref={ref}>
        <Page style={{ position: 'relative', width: `${width}cm`, height: `${height}cm` }}>
          {showDraggable && (
            <Draggable
              parentWidthInCm={width}
              parentHeightInCm={height}
            >
              {ReactHtmlParser(htmlContent)}
            </Draggable>
          )}
        </Page>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = 'ComponentToPrint';

export default ComponentToPrint;
