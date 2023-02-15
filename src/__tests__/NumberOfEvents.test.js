import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} />);
  });

  test('render correct number of events', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });

  test('default number of events value is 10', () => {
    expect(NumberOfEventsWrapper.find('input.num').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('num')).toBe(10);
  });

  test('user can change value for number of events', () => {
    expect(numberOfEventsWrapper.state('num')).toBe(10);

    NumberOfEventsWrapper.find('input.num').simulate('change', {
      target: { value: 20 }
    });
    expect(NumberOfEventsWrapper.state('num')).toBe(20);
  });

  test('runder number of events equal to the value the user has chosen', () => {
    const NumberOfEventsWrapperWithProp = shallow(
      <NumberOfEvents num={8} updateNumberOfEvents={() => { }} />
    );

    expect(NumberOfEventsWrapperWithProps.state('num')).toBe(8);
  });
})