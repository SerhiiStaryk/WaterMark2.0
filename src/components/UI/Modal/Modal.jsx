import classes from './Modal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHideModule}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          {props.title}
        </header>
        <main className={classes.content}>
          {props.children}
        </main>
        <footer className={classes}>
          <Button onClick={props.onHideModule}>Cancel</Button>
        </footer>
      </Card>
    </div>
  );
}

export default Modal;