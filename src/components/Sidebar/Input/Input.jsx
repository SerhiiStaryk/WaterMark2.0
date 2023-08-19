import classes from './Input.module.css';

const Input = ({label, type}) => {
  return (
    <div className={classes['form-group']}>
      <label>{label}</label>
      <input type={type} className={classes.input} />
    </div>
  );
}

export default Input;