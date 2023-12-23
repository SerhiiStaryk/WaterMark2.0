/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Pdf from 'react-to-pdf';
import ReactToPrint from 'react-to-print';
import { BiPrinter, BiRotateLeft, BiSolidFilePdf, BiPencil } from 'react-icons/bi';

import { AppContext } from '../../store/app-context';
import Button from '../UI/Button/Button';

import classes from './ControlPanel.module.css';

const ControlPanel = ({ targetRef, onEdit }) => {
  const { resetApp, optionForPdf } = useContext(AppContext);

  console.log('!componentRef', targetRef);
  console.log('!optionForPdf', optionForPdf);


  const renderButtonPrint = () => (
    <Button title='Друк сторінки' onClick={() => window.print()}>
      <BiPrinter className={classes.btn} />
    </Button>
  );

  const renderButtonSaveToPdf = toPdf => (
    <Button title='Зберегти у PDF' onClick={toPdf}>
      <BiSolidFilePdf className={classes.btn} />
    </Button>
  );


  return (
    <div className={classes['control-panel']}>
      <Button title='Оновити' onClick={resetApp}>
        <BiRotateLeft className={classes.btn} />
      </Button>

      <Button title='Змінити картку' onClick={onEdit}>
        <BiPencil className={classes.btn} />
      </Button>

      <Pdf targetRef={targetRef} filename="water-mark-copy.pdf" options={optionForPdf}>
        {({ toPdf }) => renderButtonSaveToPdf(toPdf)}
      </Pdf>

      <ReactToPrint
        trigger={() => renderButtonPrint()}
        content={() => targetRef.current}
      />
    </div>
  );
};

export default ControlPanel;
