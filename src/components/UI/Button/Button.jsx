import React from 'react';

import classes from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button
    {...props}
    type='button'
    className={classes['button-round']}
  >
    {children}
  </button>
);

export default Button;
