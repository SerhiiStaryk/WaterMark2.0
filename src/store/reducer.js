import { PAGE_OPTIONS } from '../constants/page';
import * as A from './actions';

export const initialState = {
  imageSourse: '',
  showWatermark: true,
  showDraggable: true,
  selectedFileName: '',
  pageSize: PAGE_OPTIONS[3],
  draggableSize: { width: 8, height: 4 },
};

const appReducer = (state, action) => {
  if (action.type === A.setShowWatermark) {
    return {
      ...state,
      showWatermark: !state.showWatermark,
    };
  }

  if (action.type === A.setImage) {
    const file = action.payload.target.files[0];

    return {
      ...state,
      selectedFileName: file.name,
      imageSourse: URL.createObjectURL(file),
    };
  }

  if (action.type === A.setShowDraggable) {
    return {
      ...state,
      showDraggable: !state.showDraggable,
    };
  }

  if (action.type === A.changeDraggableSize) {
    const { name, value } = action.payload;

    return {
      ...state,
      draggableSize: {
        ...state.draggableSize,
        [name]: +value,
      },
    };
  }

  if (action.type === A.resetApp) {
    return initialState;
  }

  return state;
};

export default appReducer;
