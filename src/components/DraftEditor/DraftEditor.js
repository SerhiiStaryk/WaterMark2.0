import "./DraftEditor.css";

import React, { useEffect, useRef } from "react";
import { Editor } from "draft-js";
import Toolbar from "./Toolbar/Toolbar";

const DraftEditor = ({ editorState, setEditorState }) => {

  const editor = useRef(null);

  useEffect(() => {
    focusEditor();
  }, []);

  const focusEditor = () => {
    editor.current.focus();
  };

  return (
    <div className="editor-wrapper" onClick={focusEditor} >
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <div className="editor-container">
        <Editor
          ref={editor}
          placeholder="Write Here"
          editorState={editorState}
          onChange={(editorState) => {
            setEditorState(editorState);
          }}
        />
      </div>
    </div >
  );
};

export default DraftEditor;
