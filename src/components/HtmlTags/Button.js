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
      className={
        `${classes.Button} ${buttonClass ? classes[buttonClass] : ''} ${isSmall? classes.Small : ''}`
      }
      type={type? type : "button"}
      onClick={onClick ? onClick : null}
      value={isNaN(value) ? '' : value}
    >
      { buttonLabel }
    </button>
  );
};

export default Button;