import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './store/app-context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

reportWebVitals();
