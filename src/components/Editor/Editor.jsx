import { createReactEditorJS } from 'react-editor-js'

const Editor = ({ value }) => {
  const ReactEditorJS = createReactEditorJS();

  return (
    <ReactEditorJS
      data={value}
    />
  );
}

export default Editor;