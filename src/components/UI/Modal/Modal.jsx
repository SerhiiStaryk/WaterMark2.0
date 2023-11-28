/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => (
  <div className={classes.backdrop} onClick={onClose} />
);

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>
      {children}
    </div>
  </div>
);

const portalElement = document.getElementById('overlay');

const Modal = ({ onClose, children }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>, portalElement,
    )}
  </>
);

export default Modal;
