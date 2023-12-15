/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { AppContext } from '../../store/app-context';
import { PAGE_OPTIONS } from '../../constants/page';

import Toggle from './Toggle/Toggle';
import InputFile from './InputFile/InputFile';
import InputNumber from './InputNumber/InputNumber';
import SelectContainer from './SelectContainer/SelectContainer';

import './Sidebar.css';

const Sidebar = ({
  pageOptions,
  templateOptions,
  selectedTemplate,
  selectedFileName,
  onChangePage,
  onChangeTemplate,
}) => {
  const {
    pageSize,
    draggableSize,
    showWatermark,
    showDraggable,
    setShowWatermark,
    setShowDraggable,
  } = useContext(AppContext);

  return (
    <Menu className='sidebar'>
      <InputFile />
      <SelectContainer
        label='Формат аркуша:'
        options={PAGE_OPTIONS}
        onChange={onChangePage}
        selectedOption={pageSize}
      />

      <Toggle
        id='draggable-togle'
        isOn={showDraggable}
        onChange={setShowDraggable}
        labelOn='Показати картку'
        labelOff='Приховати картку'
      />

      {
        showDraggable &&
        <>
          <SelectContainer
            label='Шаблон картки:'
            options={templateOptions}
            onChange={onChangeTemplate}
            selectedOption={selectedTemplate}
          />

          <InputNumber
            name='width'
            type='number'
            label='Ширина картки (см)'
            value={draggableSize.width}
          />

          <InputNumber
            name='height'
            type='number'
            label='Висота картки (см)'
            value={draggableSize.height}
          />
        </>
      }

      <Toggle
        id='water-wark-toggle'
        isOn={showWatermark}
        onChange={setShowWatermark}
        labelOn='Показати водяний знак'
        labelOff='Приховати водяний знак'
      />

      <p className='sidebar-version-app'>Версія 2.4.2.</p>
    </Menu>
  );
};

export default Sidebar;


