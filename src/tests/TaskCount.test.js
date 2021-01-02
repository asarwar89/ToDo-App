import React from 'react';
import {  shallow } from 'enzyme';
import TaskCount from '../components/TaskCount/TaskCount';

const initialProps = {
  total: 4,
  completed: 1
}

describe('<TaskCount /> with demo props', () => {

  const container = shallow(<TaskCount { ...initialProps } />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a p with total tasks 4', () => {
    expect(container.find('p').at(0).text()).toEqual('Total: 4');
  });

  it('should have a p with completed tasks 1', () => {
    expect(container.find('p').at(1).text()).toEqual('Completed: 1');
  });
  
});