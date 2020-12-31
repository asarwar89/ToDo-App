import React from 'react';
import Button from './HtmlTags/Button';
import classes from './TodoListItem.module.css';

const PRIORITY_LIST = {
  1: 'High',
  2: 'Medium',
  3: 'Low'
}

const TodoListItem = ({
  item,
  index,
  handleCompleteCheckbox,
  handleEdit,
  handleDelete
}) => {

  return (
    <div className={classes.TodoListItem}>

      <p 
        className={classes.TodoTaskCopy}
      >
        <label className="LabelContainer">
          <input 
            type="checkbox" 
            name="complete_checkbox" 
            value={index}
            checked={item.completed}
            onChange={handleCompleteCheckbox}/>
          <span className="checkmark"></span>
        </label>

        <span className={`${classes.Priority} ${classes[PRIORITY_LIST[item.priority]]}`}>{PRIORITY_LIST[item.priority]}</span>
        
        <span className={`${classes.Copy} ${item.completed ? classes.CompletedTask : ''}`}>{item.toDo}</span>
      </p>

      <div className={classes.ItemButtons}>
        <Button
          value={index}
          buttonLabel="Edit"
          onClick={handleEdit}
          isSmall={true}
        />

        <Button
          buttonClass="Delete"
          value={index}
          buttonLabel="Delete"
          onClick={handleDelete}
          isSmall={true}
        />
      </div>
    </div>
  );
};

export default TodoListItem;