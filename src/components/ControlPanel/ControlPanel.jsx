import classes from './ControlPanel.module.css';

import Pdf from "react-to-pdf";
import ReactToPrint from 'react-to-print';
import { BiPrinter, BiRotateLeft, BiSolidFilePdf, BiPencil } from "react-icons/bi";

import Button from '../UI/Button/Button';

const ControlPanel = ({ onPrint, onResetApp, componentRef, options, onEdit }) => {
  const renderButtonPrint = (onPrint) => (
    <Button title='Друк сторінки' onClick={onPrint}>
      <BiPrinter className={classes.btn} />
    </Button>
  )

  const renderButtonSaveToPdf = (onClick) => (
    <Button title='Зберегти у PDF' onClick={onClick}>
      <BiSolidFilePdf className={classes.btn} />
    </Button>
  )

  return (
    <div className={classes['control-panel']}>
      <Button title='Оновити' onClick={onResetApp}>
        <BiRotateLeft className={classes.btn} />
      </Button>

      <Button title='Змінити картку' onClick={onEdit}>
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