import React from 'react';

const RadioButton = ({
  radioName,
  radioId,
  value,
  isChecked,
  onChange,
  radioLabel
}) => {

  return (
    <label>
      <input 
        type="radio" 
        name={radioName}
        id={radioId}
        value={value}
        checked={isChecked}
        onChange={onChange} /> {radioLabel}
    </label>
  );
};

export default RadioButton;