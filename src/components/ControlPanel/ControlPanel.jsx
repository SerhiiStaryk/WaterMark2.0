import classes from './ControlPanel.module.css';

import ReactToPrint from 'react-to-print';
import { BiPrinter, BiRotateLeft } from "react-icons/bi";

import Button from '../UI/Button/Button';

const ControlPanel = ({ onPrint, onResetApp, componentRef }) => {
  const renderButtonPrint = (onPrint) => (
    <Button onClick={onPrint}>
      <BiPrinter className={classes.btn} />
    </Button>
  )

  return (
    <div className={classes['control-panel']}>
      <Button onClick={onResetApp}>
        <BiRotateLeft className={classes.btn} />
      </Button>

      <ReactToPrint
        trigger={() => renderButtonPrint(onPrint)}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default ControlPanel;