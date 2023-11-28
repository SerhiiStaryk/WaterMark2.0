/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';

import classes from './SelectContainer.module.css';

const SelectContainer = props => {
  const {
    label,
    options,
    onChange,
    defaultValue,
    selectedOption,
  } = props;

  return (
    <div className={classes['form-group']}>
      <label>{label}</label>
      <Select
        options={options}
        className='select'
        onChange={onChange}
        value={selectedOption}
        defaultValue={defaultValue}
      />
    </div>
  );
};


export default SelectContainer;
