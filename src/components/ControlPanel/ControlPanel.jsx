import classes from './ControlPanel.module.css';

import Pdf from "react-to-pdf";
import ReactToPrint from 'react-to-print';
import { BiPrinter, BiRotateLeft, BiSolidFilePdf, BiPencil } from "react-icons/bi";

import Button from '../UI/Button/Button';

const ControlPanel = ({ onPrint, onResetApp, componentRef, options, onEdit }) => {
  const renderButtonPrint = (onPrint) => (
    <Button onClick={onPrint}>
      <BiPrinter className={classes.btn} />
    </Button>
  )

  const renderButtonSaveToPdf = (onClick) => (
    <Button onClick={onClick}>
      <BiSolidFilePdf className={classes.btn} />
    </Button>
  )

  return (
    <div className={classes['control-panel']}>
      <Button onClick={onResetApp}>
        <BiRotateLeft className={classes.btn} />
      </Button>

      <Button onClick={onEdit}>
        <BiPencil className={classes.btn} />
      </Button>

      <Pdf targetRef={componentRef} filename="water-mark-copy.pdf" options={options}>
        {({ toPdf }) => renderButtonSaveToPdf(toPdf)}
      </Pdf>

      <ReactToPrint
        trigger={() => renderButtonPrint(onPrint)}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default ControlPanel;