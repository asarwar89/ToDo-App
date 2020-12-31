import React, { useState } from 'react';
import { DemoData } from './DemoData';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import TaskCount from './TaskCount';
import classes from './TodoMain.module.css';

const INIT_FORM_DATA = {
  toDo: '',
  priority: 3,
  completed: false,
  editIndex: null
}

const TodoMain = () => {

  const [toDoList, setToDoList] = useState([ ...DemoData ]);
  const [toDoItem, setToDo] = useState({ ...INIT_FORM_DATA });
  const [error, setError] = useState('');

  const handleEdit = (event) => {
    let editIndex = event.target.value;
    toDoList[editIndex].editIndex = Number(editIndex);
    setToDo({...toDoList[editIndex]});
  }

  const handleDelete = (event) => {
    toDoList.splice(event.target.value, 1);
    setToDoList([...toDoList]);
    setToDo({
      ...INIT_FORM_DATA
    });
  }

  const handleCompleteCheckbox = (event) => {
    let completedIndex = event.target.value;
    toDoList[completedIndex].completed = !toDoList[completedIndex].completed;
    setToDoList([...toDoList]);
  }

  const sortToDoList = () => {
    return toDoList.sort((a, b) => (
      a.completed - b.completed || a.priority - b.priority || a.toDo.localeCompare(b.toDo)
    ));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (toDoItem.toDo.length === 0) {
      setError('To-do input is empty');
      return;
    }

    if (toDoItem.editIndex === null) {
      setToDoList([
        ...toDoList,
        toDoItem
      ]);
    } else {
      toDoList[toDoItem.editIndex] = {...toDoItem};
      setToDoList([
        ...toDoList
      ]);
    }

    setToDo({
      ...INIT_FORM_DATA
    });
  }

  const handleToDoChange = (event) => {
    let currentTodo = toDoItem;

    if (event.target.type === 'radio') {
      currentTodo.priority = Number(event.target.value);
    } else {
      currentTodo.toDo = event.target.value;

      if (event.target.value.length > 0 && error.length > 0) {
        setError('');
      }
    }

    setToDo({...currentTodo});
  }

  const handleEditCancel = () => {
    setToDo({ ...INIT_FORM_DATA });
  }
  
  const getCompletedTasks = () => {
    return toDoList.filter((item) => item.completed).length;
  }

  return (
    <div className={classes.TodoBody}>

      <TodoForm
        onSubmit={onSubmit}
        toDoItem={toDoItem}
        error={error}
        handleToDoChange={handleToDoChange}
        handleEditCancel={handleEditCancel}
      />

      <div className={classes.TasksView}>
        <TaskCount 
          total={toDoList.length}
          completed={getCompletedTasks()}
        />
      
        { sortToDoList()
          .map((item, index) => (
            <TodoListItem
              key={index} 
              item={item}
              index={index}
              handleCompleteCheckbox={handleCompleteCheckbox}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
        ))}
      </div>

    </div>
  )
};

export default TodoMain;