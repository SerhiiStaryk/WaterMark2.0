import './Sidebar.css';
import Input from './Input/Input';
import Toggle from './Toggle/Toggle';
import InputFile from './InputFile/InputFile';
import { slide as Menu } from 'react-burger-menu';
import SelectContainer from './SelectContainer/SelectContainer';
import { useState } from 'react';

const Sidebar = ({ options, selectedOption, onChange, defaultValue }) => {
  const [value, setValue] = useState(true);
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <InputFile />

      <SelectContainer
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        selectedOption={selectedOption}
      />

      <Toggle
        isOn={value}
        onColor="#0077ff"
        handleToggle={() => setValue(!value)}
      />

      <Input
        label='With label card (cm)'
        type='number'
      />

      <Input
        label='Height label card (cm)'
        type='number'
      />
    </Menu>
  );
};

export default Sidebar;


