import React from 'react';
import classes from './Button.module.css';

const Button = ({
  buttonClass,
  type,
  buttonLabel,
  onClick,
  value,
  isSmall
}) => {

  return (
    <button 
      className={`${classes.Button} ${classes[buttonClass]} ${isSmall? classes.Small : ''}`}
      type={type}
      onClick={onClick}
      value={value}
    >
      { buttonLabel }
    </button>
  );
};

export default Button;