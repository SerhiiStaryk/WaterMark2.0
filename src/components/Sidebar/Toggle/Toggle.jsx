import './Toggle.css'

const Toggle = ({ isOn, handleToggle, onColor }) => {
  return (
    <div className='form-group'>
      <label>Show Information card</label>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
}

export default Toggle;