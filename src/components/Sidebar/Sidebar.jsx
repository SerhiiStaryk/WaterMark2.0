import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';

import { PAGE_OPTIONS } from '../../constants/page';
import { AppContext } from '../../store/app-context';
import { TEMPLATE_OPTIONS } from '../../constants/editor';

import Toggle from './Toggle/Toggle';
import InputFile from './InputFile/InputFile';
import InputNumber from './InputNumber/InputNumber';
import SelectContainer from './SelectContainer/SelectContainer';

import './Sidebar.css';

const Sidebar = ({
  pageOptions,
  onChangePage,
  onChangeTemplate,
}) => {
  const {
    pageSize,
    draggableSize,
    showWatermark,
    showDraggable,
    selectedTemplate,
    changePage,
    changeTemplate,
    setShowWatermark,
    setShowDraggable,
  } = useContext(AppContext);

  return (
    <Menu className='sidebar'>
      <InputFile />
      <SelectContainer
        onChange={changePage}
        label='Формат аркуша:'
        options={PAGE_OPTIONS}
        selectedOption={pageSize}
      />

      <Toggle
        id='draggable-togle'
        isOn={showDraggable}
        labelOn='Показати картку'
        labelOff='Приховати картку'
        onChange={setShowDraggable}
      />

      {
        showDraggable &&
        <>
          <SelectContainer
            label='Шаблон картки:'
            onChange={changeTemplate}
            options={TEMPLATE_OPTIONS}
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
        isOn={showWatermark}
        id='water-wark-toggle'
        onChange={setShowWatermark}
        labelOn='Показати водяний знак'
        labelOff='Приховати водяний знак'
      />

      <p className='sidebar-version-app'>Версія 2.4.2.</p>
    </Menu>
  );
};

export default Sidebar;


