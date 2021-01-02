import React from 'react';
import {  mount } from 'enzyme';
import PriorityRadios from '../components/PriorityRadios/PriorityRadios';

const initialProps = {
  priority: 2,
  change: jest.fn()
}

describe('<TaskCount /> with demo props', () => {

  const container = mount(<PriorityRadios { ...initialProps } />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have 3 radio buttons', () => {
    expect(container.find('input[type="radio"]').length).toEqual(3);
  });

  it('should medium priority be checked', () => {
    expect(container.find('#priority_medium').props().checked).toEqual(true);
  });

  it('should trigger change function when priority is changed', () => {
    container.find('#priority_high').simulate('change', {});
    expect(initialProps.change).toHaveBeenCalledTimes(1);
  });
  
});