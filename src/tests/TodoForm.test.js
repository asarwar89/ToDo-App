import React from 'react';
import {  mount, shallow } from 'enzyme';

import TodoForm from '../components/TodoForm/TodoForm';
import classes from '../components/TodoForm/TodoForm.module.css';
import Button from '../components/HtmlTags/Button';
import PriorityRadios from '../components/PriorityRadios/PriorityRadios';
import { INIT_FORM_DATA } from '../components/TodoMain/TodoMain';

const initialProps = {
  onSubmit: jest.fn(), 
  toDoItem: INIT_FORM_DATA, 
  error: '',
  handleToDoChange: jest.fn(), 
  handleEditCancel: jest.fn()
}

describe('<TodoForm /> with demo props', () => {

  const container = shallow(<TodoForm { ...initialProps } />);
  const mountedContainer = mount(<TodoForm { ...initialProps } />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a form', () => {
    expect(container.find('form').length).toEqual(1);
  });
  
  it('should have a input text field', () => {
    expect(container.find('input[type="text"]').length).toEqual(1);
  });

  it('should have proper props for input text field', () => {
    expect(container.find('input[type="text"]').props()).toEqual({
      className: classes.TextInput,
      onChange: expect.any(Function),
      placeholder: 'Please enter your to-do item',
      type: 'text',
      value: ''
    });
  });

  it('should have 1 Add Button', () => {
    expect(container.find(Button).length).toEqual(1);
  });

  it('should have proper props for submit button', () => {
    expect(mountedContainer.find('button[type="submit"]').props()).toEqual({
      children: "Add",
      className: "Button  ",
      onClick: null,
      type: "submit",
      value: "",
    });
  });

  it('should have PriorityRadios', () => {
    expect(container.find(PriorityRadios).length).toEqual(1);
  });

  it('should have 3 radio buttons', () => {
    expect(mountedContainer.find('input[type="radio"]').length).toEqual(3);
  });

  it('should have proper props for High priority radio', () => {
    expect(mountedContainer.find('#priority_high').props()).toEqual({
      type: "radio", 
      name: "priority",
      id: "priority_high",
      value: "1",
      checked: false,
      onChange: expect.any(Function)
    });
  });

  it('should have proper props for Medium priority radio', () => {
    expect(mountedContainer.find('#priority_medium').props()).toEqual({
      type: "radio", 
      name: "priority",
      id: "priority_medium",
      value: "2",
      checked: false,
      onChange: expect.any(Function)
    });
  });

  it('should have proper props for Low priority radio', () => {
    expect(mountedContainer.find('#priority_low').props()).toEqual({
      type: "radio", 
      name: "priority",
      id: "priority_low",
      value: "3",
      checked: true,
      onChange: expect.any(Function)
    });
  });

  it('triggers handleToDoChange function when input is changed', () => {
    container.find('input[type="text"]').simulate('change', {
      target: {
        value: 'Some todo',
      },
    });
    expect(initialProps.handleToDoChange).toHaveBeenCalledTimes(1);
  });

  it('triggers onSubmit function when form is submitted', () => {
    container.find('form').simulate('submit', {
    });
    expect(initialProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});

const initialPropsWithValueForEdit = {
  ...initialProps,
  toDoItem: {
    toDo: 'Test case for Edit',
    priority: 2,
    completed: false,
    editIndex: 1
  }
}

describe('<TodoForm /> with toDo values in props', () => {

  const containerWithEdit = shallow(<TodoForm { ...initialPropsWithValueForEdit } />);
  const mountedcontainerWithEdit = mount(<TodoForm { ...initialPropsWithValueForEdit } />);

  it('should match the snapshot', () => {
    expect(containerWithEdit.html()).toMatchSnapshot();
  });

  it('should have 2 Buttons Edit and Add', () => {
    expect(containerWithEdit.find(Button).length).toEqual(2);
  });

  it('should have proper props for edit button', () => {
    expect(mountedcontainerWithEdit.find('button').at(1).props()).toEqual({
      children: "Cancel",
      className: "Button  ",
      onClick: expect.any(Function),
      type: "button",
      value: "",
    });
  });

  it('should have save as text for submit button', () => {
    expect(mountedcontainerWithEdit.find('button[type="submit"]').text()).toEqual('Save');
  });

  it('triggers handleEditCancel function when Cancel button clicked', () => {
    mountedcontainerWithEdit.find('button').at(1).simulate('click', {
    });
    expect(initialProps.handleEditCancel).toHaveBeenCalledTimes(1);
  });

});