import './Sidebar.css';
import { useState } from 'react';
import Toggle from './Toggle/Toggle';
import InputFile from './InputFile/InputFile';
import { slide as Menu } from 'react-burger-menu';
import InputNumber from './InputNumber/InputNumber';
import SelectContainer from './SelectContainer/SelectContainer';

const Sidebar = ({
  options,
  defaultValue,
  draggableSize,
  showDraggable,
  selectedOption,
  selectedFileName,

  onChange,
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
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        selectedOption={selectedOption}
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
        value={draggableSize.width}
        onChangeDraggableSize={onChangeDraggableSize}
      />

      <InputNumber
        name='height'
        type='number'
        label='Height label card (cm)'
        value={draggableSize.height}
        onChangeDraggableSize={onChangeDraggableSize}
      />
    </Menu>
  );
};

export default Sidebar;


