import './Toggle.css'

const Toggle = (props) => {
  const {
    id,
    isOn,
    labelOn,
    labelOff,
    onChange,
  } = props;

  let label = labelOff;

  if (!isOn) label = labelOn;

  return (
    <div className='form-group'>
      <label>{label}:</label>
      <input
        id={id}
        checked={isOn}
        type="checkbox"
        onChange={onChange}
        className="react-switch-checkbox"
      />
      <label
        htmlFor={id}
        style={{ background: isOn && '#48abe0' }}
        className="react-switch-label"
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
}

export default Toggle;