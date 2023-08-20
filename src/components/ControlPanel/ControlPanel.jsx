import classes from './ControlPanel.module.css';
import Button from '../UI/Button/Button';
import { BiPrinter, BiRotateLeft } from "react-icons/bi";
import ReactToPrint from 'react-to-print';

const ControlPanel = ({ onPrint, componentRef }) => {
  return (
    <div className={classes['control-panel']}>
      <Button>
        <BiRotateLeft style={{ width: '25px', height: '25px', color: '#fff' }} />
      </Button>

      <ReactToPrint
        trigger={() => (
          <Button onClick={onPrint}>
            <BiPrinter style={{ width: '25px', height: '25px', color: '#fff' }} />
          </Button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default ControlPanel;