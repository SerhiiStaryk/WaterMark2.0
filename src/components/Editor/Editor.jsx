import { createReactEditorJS } from 'react-editor-js'

const Editor = () => {
  const ReactEditorJS = createReactEditorJS();

  return (
    <ReactEditorJS
      defaultValue={{
        blocks: [
          {
            id: "1",
            type: "paragraph",
            data: {
              text: "Копія з фрагмента ..."
            }
          },
          {
            id: "2",
            type: "paragraph",
            data: {
              text: "за адресою: ..."
            }
          },
          {
            id: "2",
            type: "paragraph",
            data: {
              text: "<b>для інформації</b>"
            }
          },
          {
            id: "3",
            type: "paragraph",
            data: {
              text: "Головний спеціаліст відділу інженерних споруд, транспорту та геослужби"
            }
          },
        ]
        }}
    />
  );
}

export default Editor;