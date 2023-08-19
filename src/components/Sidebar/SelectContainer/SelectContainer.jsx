import Select from 'react-select';
import classes from './SelectContainer.module.css';

const SelectContainer = ({ options, selectedOption, onChange, defaultValue }) => {
  return (
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
}

export default SelectContainer;