import React, { useEffect, useRef } from 'react';
import { Editor } from 'draft-js';

import { useContext } from 'react';

import Toolbar from './Toolbar/Toolbar';

import { AppContext } from '../../store/app-context';

import './DraftEditor.css';

const DraftEditor = () => {
  const editor = useRef(null);

  const { content, setContentHtml } = useContext(AppContext);

  console.log('content :>> ', content);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    editor.current.focus();
  };

  return (
    <div className="editor-wrapper" onClick={focusEditor} >
      <Toolbar />
      <div className="editor-container">
        <Editor
          ref={editor}
          editorState={content}
          placeholder="Write Here"
          onChange={setContentHtml}
        />
      </div>
    </div >
  );
};

export default DraftEditor;
