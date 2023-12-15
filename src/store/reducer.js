import * as A from './actions';

const appReducer = (state, action) => {
  if (action.type === A.setShowWatermark) {
    return {
      ...state,
      showWatermark: !state.showWatermark,
    };
  }

  return state;
};

export default appReducer;
