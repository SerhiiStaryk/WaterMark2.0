import classes from './InputNumber.module.css';

const InputNumber = ({ name, label, value, onChangeDraggableSize }) => {

  return (
    <div className={classes['form-group']}>
      <label htmlFor={name}>{label}</label>
      <input
        type='number'
        id={name}
        name={name}
        value={value}
        min={5}
        max={20}
        className={classes.input}
        onChange={(e) => onChangeDraggableSize(e.target.value, name)}
      />
    </div>
  );
}

export default InputNumber;