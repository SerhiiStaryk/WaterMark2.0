import {
  EditorState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import { stateToHTML } from 'draft-js-export-html';

export const createEditorState = (blocks) => EditorState.createWithContent(
  convertFromRaw({
    blocks,
    entityMap: {},
  })
);

export const getCurrentContentState = (editorState) => editorState.getCurrentContent();

export const convertToHTML = (content) => stateToHTML(content);

export const convertEditorStateToHtml = (editorState) => {
  const content = getCurrentContentState(editorState)

  return convertToHTML(content);
}

export const convertToEditorRaw = (state) => convertToRaw(state)
