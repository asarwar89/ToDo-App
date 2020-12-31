import React from 'react';
import classes from './TaskCount.module.css';

const TaskCount = ({
  total,
  completed
}) => {

  return (
    <div className={classes.TaskCounts}>
      <p className={classes.TaskCount}>Total: {total}</p>
      <p className={classes.TaskCount}>Completed: {completed}</p>
    </div>
  );
};

export default TaskCount;