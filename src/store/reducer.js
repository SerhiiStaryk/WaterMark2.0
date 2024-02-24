import { PAGE_OPTIONS } from '../constants/page';
import { createEditorState } from '../helpers/editor';
import { TEMPLATE_OPTIONS } from '../constants/editor';

import * as A from './actions';

export const initialState = {
  imageSourse: null,
  showWatermark: true,
  showDraggable: true,
  selectedFileName: null,
  pageSize: PAGE_OPTIONS[3],
  selectedTemplate: TEMPLATE_OPTIONS[0],
  draggableSize: { width: 8, height: 4 },
  content: createEditorState(TEMPLATE_OPTIONS[0].value),
  // TODO change format value
  optionForPdf: {
    unit: 'cm',
    format: [21, 29.7],
    orientation: 'landscape'
  }
};

const appReducer = (state, action) => {
  if (action.type === A.setShowWatermark) {
    return {
      ...state,
      showWatermark: !state.showWatermark
    };
  }

  if (action.type === A.setImage) {
    const file = action.payload.target.files[0];

    return {
      ...state,
      selectedFileName: file.name,
      imageSourse: URL.createObjectURL(file)
    };
  }

  if (action.type === A.setShowDraggable) {
    return {
      ...state,
      showDraggable: !state.showDraggable
    };
  }

  if (action.type === A.changeDraggableSize) {
    const { name, value } = action.payload;

    return {
      ...state,
      draggableSize: {
        ...state.draggableSize,
        [name]: +value
      }
    };
  }

  if (action.type === A.resetApp) {
    return initialState;
  }

  if (action.type === A.changePage) {
    const { label, value } = action.payload;

    const newOptionForPdf = {
      orientation: label.includes('landscape') ? 'landscape' : 'portrait',
      unit: 'cm',
      format: [value.height, value.width]
    };


    return {
      ...state,
      pageSize: action.payload,
      optionForPdf: newOptionForPdf
    };
  }

  if (action.type === A.changeTemplate) {
    const newContent = createEditorState(action.payload.value);

    return {
      ...state,
      content: newContent,
      selectedTemplate: action.payload
    };
  }

  if (action.type === A.setContentHtml) {
    return {
      ...state,
      content: action.payload
    };
  }

  return state;
};

export default appReducer;
