import React, { useReducer } from 'react';
import { createContext } from 'react';

import * as A from './actions';
import appReducer, { initialState } from './reducer';

export const AppContext = createContext({
  pageSize: null,
  imageSourse: null,
  showWatermark: null,
  showDraggable: null,
  selectedFileName: null,
  draggableSize: {},
  setImage: () => { },
  resetApp: () => { },
  setShowWatermark: () => { },
  setShowDraggable: () => { },
  changeDraggableSize: () => { },
});

const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, initialState);

  const handleSetShowWatermark = () => {
    appDispatch({
      type: A.setShowWatermark,
    });
  };

  const handlesetShowDraggable = () => {
    appDispatch({
      type: A.setShowDraggable,
    });
  };

  const handleSetImage = event => {
    appDispatch({
      type: A.setImage,
      payload: event,
    });
  };

  const handleChangeDraggableSize = (value, name) => {
    appDispatch({
      payload: { name, value },
      type: A.changeDraggableSize,
    });
  };

  const handleResetApp = () => {
    appDispatch({
      type: A.resetApp,
    });
  };

  const ctxValue = {
    imageSourse: appState.imageSourse,
    showWatermark: appState.showWatermark,
    showDraggable: appState.showDraggable,
    draggableSize: appState.draggableSize,
    selectedFileName: appState.selectedFileName,
    setImage: handleSetImage,
    resetApp: handleResetApp,
    setShowWatermark: handleSetShowWatermark,
    setShowDraggable: handlesetShowDraggable,
    changeDraggableSize: handleChangeDraggableSize,
  };

  return (
    <AppContext.Provider value={ctxValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
