import classes from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button
    type='button'
    className={classes['button-round']}
    {...props}
  >
    {children}
  </button>
)


export default Button;
