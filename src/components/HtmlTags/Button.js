import React from 'react';
import classes from './Button.module.css';

const Button = ({
  type,
  buttonLabel,
  onClick,
  value,
  isSmall
}) => {

  return (
    <button 
      className={isSmall? `${classes.Button} ${classes.Small}`: classes.Button}
      type={type}
      onClick={onClick}
      value={value}
    >
      { buttonLabel }
    </button>
  );
};

export default Button;