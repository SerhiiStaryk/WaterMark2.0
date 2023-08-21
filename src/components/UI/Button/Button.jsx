import classes from './Button.module.css';

const Button = ({ children, onClick }) => (
  <button
    type='button'
    className={classes['button-round']}
    onClick={onClick}
  >
    {children}
  </button>
)


export default Button;
