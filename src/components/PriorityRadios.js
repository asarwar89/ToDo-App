import React from 'react';

import RadioButton from './HtmlTags/RadioButton';
import classes from './PriorityRadios.module.css';

const PriorityRadios = (props) => {
  return (
    <div className={classes.Priorities}>
      Priority:
      <RadioButton
        radioName="priority"
        radioId="priority_high" 
        value="1"
        isChecked={props.priority === 1}
        onChange={props.change}
        radioLabel="High"
      />

      <RadioButton
        radioName="priority"
        radioId="priority_medium" 
        value="2"
        isChecked={props.priority === 2}
        onChange={props.change}
        radioLabel="Medium"
      />

      <RadioButton
        radioName="priority"
        radioId="priority_low" 
        value="3"
        isChecked={props.priority === 3}
        onChange={props.change}
        radioLabel="Low"
      />
    </div>
  );
};

export default PriorityRadios;