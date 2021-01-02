import React from 'react';
import {  mount, shallow } from 'enzyme';
import TodoListItem from '../components/TodoListItem/TodoListItem';
import { DemoData } from '../components/DemoData';
import classes from '../components/TodoListItem.module.css';

const initialProps = {
  item: DemoData[0],
  index: 0,
  handleCompleteCheckbox: jest.fn(),
  handleEdit: jest.fn(),
  handleRemove: jest.fn()
}

describe('<TodoListItem /> with demo props', () => {

  const container = shallow(<TodoListItem {...initialProps} />);
  const mountedContainer = mount(<TodoListItem {...initialProps} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a checkbox', () => {
    expect(container.find('input[type="checkbox"]').length).toEqual(1);
  });

  it('should have a Priority Span', () => {
    expect(container.find('span.' + classes.Priority).length).toEqual(1);
  });

  it('should have a Copy Span', () => {
    expect(container.find('span.' + classes.Copy).length).toEqual(1);
  });

  it('should have 2 buttons', () => {
    expect(mountedContainer.find('button[type="button"]').length).toEqual(2);
  });

  it('task should be Cooking', () => {
    expect(container.find('span.' + classes.Copy).text()).toEqual('Cooking');
  });

  it('should have High priority', () => {
    expect(container.find('span.' + classes.Priority).text()).toEqual('Medium');
  });

  it('checkbox checked should be true', () => {
    expect(container.find('input[type="checkbox"]').props().checked).toEqual(true);
  });

  it('checkbox change should triggers handleCompleteCheckbox function', () => {
    mountedContainer.find('input[type="checkbox"]').simulate('change', {});
    expect(initialProps.handleCompleteCheckbox).toHaveBeenCalledTimes(1);
  });

  it('triggers handleEdit function when Edit button clicked', () => {
    mountedContainer.find('button').at(0).simulate('click', {
    });
    expect(initialProps.handleEdit).toHaveBeenCalledTimes(1);
  });

  it('triggers handleRemove function when Remove button clicked', () => {
    mountedContainer.find('button').at(1).simulate('click', {
    });
    expect(initialProps.handleRemove).toHaveBeenCalledTimes(1);
  });

});