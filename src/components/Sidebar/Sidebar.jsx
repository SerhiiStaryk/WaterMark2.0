import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

import Toggle from './Toggle/Toggle';
import InputFile from './InputFile/InputFile';
import InputNumber from './InputNumber/InputNumber';
import SelectContainer from './SelectContainer/SelectContainer';

const Sidebar = ({
  pageOptions,
  templeteOptions,
  draggableSize,
  showDraggable,
  selectedPage,
  selectedTemplete,
  selectedFileName,
  onChangePage,
  onChangeTemplete,
  onShowDraggable,
  onChangeBackground,
  onChangeDraggableSize,

}) => {
  return (
    <Menu>
      <InputFile
        selectedFileName={selectedFileName}
        onChangeBackground={onChangeBackground}
      />

      <SelectContainer
        options={pageOptions}
        onChange={onChangePage}
        selectedOption={selectedPage}
      />

      <SelectContainer
        options={templeteOptions}
        onChange={onChangeTemplete}
        selectedOption={selectedTemplete}
      />

      <Toggle
        isOn={showDraggable}
        onColor="#0077ff"
        handleToggle={onShowDraggable}
      />

      <InputNumber
        name='width'
        type='number'
        label='With label card (cm)'
        isOn={showDraggable}
        value={draggableSize.width}
        onChangeDraggableSize={onChangeDraggableSize}
      />

      <InputNumber
        name='height'
        type='number'
        label='Height label card (cm)'
        isOn={showDraggable}
        value={draggableSize.height}
        onChangeDraggableSize={onChangeDraggableSize}
      />
    </Menu>
  );
};

export default Sidebar;


