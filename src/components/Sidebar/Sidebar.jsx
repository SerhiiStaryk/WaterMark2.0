import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

import Toggle from './Toggle/Toggle';
import InputFile from './InputFile/InputFile';
import InputNumber from './InputNumber/InputNumber';
import SelectContainer from './SelectContainer/SelectContainer';

const Sidebar = ({
  pageOptions,
  selectedPage,
  draggableSize,
  showDraggable,
  showWatermark,
  templateOptions,
  selectedTemplate,
  selectedFileName,
  onChangePage,
  onShowDraggable,
  onShowWaterMark,
  onChangeTemplate,
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
        label='Формат аркуша:'
        options={pageOptions}
        onChange={onChangePage}
        selectedOption={selectedPage}
      />

      <Toggle
        id='draggable-togle'
        isOn={showDraggable}
        onChange={onShowDraggable}
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
            onChangeDraggableSize={onChangeDraggableSize}
          />

          <InputNumber
            name='height'
            type='number'
            label='Висота картки (см)'
            value={draggableSize.height}
            onChangeDraggableSize={onChangeDraggableSize}
          />
        </>
      }

      <Toggle
        id='water-wark-toggle'
        isOn={showWatermark}
        onChange={onShowWaterMark}
        labelOn='Показати водяний знак'
        labelOff='Приховати водяний знак'
      />
    </Menu>
  );
};

export default Sidebar;


