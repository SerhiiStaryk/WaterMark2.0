import React, { useReducer, createContext } from 'react';

import * as A from './actions';
import appReducer, { initialState } from './reducer';

export const AppContext = createContext({
  content: {},
  pageSize: null,
  optionForPdf: {},
  imageSourse: null,
  showWatermark: null,
  showDraggable: null,
  selectedTemplate: {},
  selectedFileName: null,
  draggableSize: {},
  setImage: () => { },
  resetApp: () => { },
  changePage: () => { },
  changeTemplate: () => { },
  setContentHtml: () => { },
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

  const handleChangePage = pageSize => {
    appDispatch({
      payload: pageSize,
      type: A.changePage,
    });
  };

  const handleChangeTemplate = templete => {
    appDispatch({
      payload: templete,
      type: A.changeTemplate,
    });
  };

  const handleSetContentHtml = content => {
    appDispatch({
      payload: content,
      type: A.setContentHtml,
    });
  };

  const handleResetApp = () => {
    appDispatch({
      type: A.resetApp,
    });
  };

  const ctxValue = {
    content: appState.content,
    pageSize: appState.pageSize,
    imageSourse: appState.imageSourse,
    optionForPdf: appState.optionForPdf,
    showWatermark: appState.showWatermark,
    showDraggable: appState.showDraggable,
    draggableSize: appState.draggableSize,
    selectedTemplate: appState.selectedTemplate,
    selectedFileName: appState.selectedFileName,
    setImage: handleSetImage,
    resetApp: handleResetApp,
    changePage: handleChangePage,
    changeTemplate: handleChangeTemplate,
    setContentHtml: handleSetContentHtml,
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
