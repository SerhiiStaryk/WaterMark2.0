import classes from './InputNumber.module.css';

const InputNumber = ({ isOn, name, label, value, onChangeDraggableSize }) => (
  <div className={classes['form-group']}>
    <label htmlFor={name}>{label}</label>
    <input
      type='string'
      id={name}
      name={name}
      value={value || ''}
      className={classes.input}
      onChange={(e) => onChangeDraggableSize(e.target.value, name)}
      disabled={!isOn}
    />
  </div>
);


export default InputNumber;