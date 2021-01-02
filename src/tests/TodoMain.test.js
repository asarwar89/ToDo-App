import React from 'react';
import {  mount, shallow } from 'enzyme';
import TodoMain from '../components/TodoMain/TodoMain';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoListItem from '../components/TodoListItem/TodoListItem';
import TaskCount from '../components/TaskCount/TaskCount';

import classes from '../components/TodoListItem.module.css';

describe('<TodoMain /> with demo props', () => {

  const container = shallow(<TodoMain/>);
  const mountedContainer = mount(<TodoMain/>);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a <TodoForm />', () => {
    expect(container.find(TodoForm).length).toEqual(1);
  });
  
  it('should have <TaskCount />', () => {
    expect(container.find(TaskCount).length).toEqual(1);
  });

  it('should have 4 <TodoListItem />', () => {
    expect(container.find(TodoListItem).length).toEqual(4);
  });

  it('should update the task input with new value', () => {
    mountedContainer.find('input[type="text"]').simulate('change', {
      target: {
        value: 'New Task Test',
      },
    });
    expect(mountedContainer.find('input[type="text"]').prop('value')).toEqual(
      'New Task Test',
    );
  });

  it('Should add one more task with form submit', () => {
    mountedContainer.find('form').simulate('submit', {});
    expect(mountedContainer.find(TodoListItem).length).toEqual(5);
  });

  it('Remove button works as expected', () => {
    mountedContainer.find('button[type="button"]').at(1).simulate('click', {});
    expect(mountedContainer.find(TodoListItem).length).toEqual(4);
  });

  it('Edit button works as expected', () => {
    mountedContainer.find('button[type="button"]').at(0).simulate('click', {});

    mountedContainer.find('input[type="text"]').simulate('change', {
      target: {
        value: 'Task item edited',
      },
    });
    mountedContainer.find('#priority_high').simulate('change', {});
    mountedContainer.find('form').simulate('submit', {});

    expect(mountedContainer.find('.' + classes.Priority).at(0).text()).toEqual('High');
    expect(mountedContainer.find('.' + classes.Copy).at(0).text()).toEqual('Task item edited');
  });

  it('Edit then cancel button works as expected', () => {
    mountedContainer.find('button[type="button"]').at(0).simulate('click', {});
    expect(mountedContainer.find('input[type="text"]').props().value).toEqual('Task item edited');
    
    mountedContainer.find('button[type="button"]').at(0).simulate('click', {});
    expect(mountedContainer.find('input[type="text"]').props().value).toEqual('');
  });

  it('empty new task submit process error properly', () => {
    mountedContainer.find('button[type="submit"]').simulate('submit', {});
    
    expect(mountedContainer.find('p').at(0).text()).toEqual('To-do input is empty');
  });

});