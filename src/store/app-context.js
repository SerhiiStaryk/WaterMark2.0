import React, { useReducer } from 'react';
import { createContext } from 'react';

import * as A from './actions';
import appReducer from './reducer';

export const AppContext = createContext({
  showWatermark: null,
  setShowWatermark: () => { },
});

const AppContextProvider = ({ children }) => {
  const initialState = {
    showWatermark: true,
  };

  const [appState, appDispatch] = useReducer(appReducer, initialState);

  const handleSetShowWatermark = () => {
    appDispatch({
      type: A.setShowWatermark,
    });
  };

  const ctxValue = {
    showWatermark: appState.showWatermark,
    setShowWatermark: handleSetShowWatermark,
  };

  return (
    <AppContext.Provider value={ctxValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
