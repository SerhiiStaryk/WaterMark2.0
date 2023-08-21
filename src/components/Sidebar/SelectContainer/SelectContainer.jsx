import classes from './SelectContainer.module.css';

import Select from 'react-select';

const SelectContainer = ({ options, selectedOption, onChange, defaultValue }) => (
  <div className={classes['form-group']}>
    <label>Select page format:</label>
    <Select
      options={options}
      className='select'
      onChange={onChange}
      value={selectedOption}
      defaultValue={defaultValue}
    />
  </div>
);


export default SelectContainer;