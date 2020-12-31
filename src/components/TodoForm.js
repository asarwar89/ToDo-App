import React from 'react';

import PriorityRadios from './PriorityRadios';
import Button from './HtmlTags/Button';
import classes from './TodoForm.module.css';

const TodoForm = ({
  onSubmit, 
  toDoItem, 
  error,
  handleToDoChange, 
  handleEditCancel
}) => {
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Please enter your to-do item" 
          value={toDoItem.toDo}
          onChange={handleToDoChange}
          className={classes.TextInput}
        />

        {error? <p className={classes.Error}>{error}</p>:null}

        <PriorityRadios 
          priority={toDoItem.priority}
          change={handleToDoChange}
        />
      </div>
      <div>
        <Button
          type="submit"
          buttonLabel={ toDoItem.editIndex === null? "Add" : "Save" }
        />

        { toDoItem.editIndex !== null ?
          <Button
            buttonLabel="Cancel"
            onClick={handleEditCancel}
          /> : null
        }
      </div>
    </form>
  );
};

export default TodoForm;