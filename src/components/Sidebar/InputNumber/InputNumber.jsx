/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { AppContext } from '../../../store/app-context';
import classes from './InputNumber.module.css';

const InputNumber = ({ name, label, value = '' }) => {
  const { changeDraggableSize } = useContext(AppContext);

  return (
    <div className={classes['form-group']}>
      <label htmlFor={name}>{label}</label>
      <input
        type='string'
        id={name}
        name={name}
        value={value}
        className={classes.input}
        onChange={e => changeDraggableSize(e.target.value, name)}
      />
    </div>
  );
};


export default InputNumber;
