import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render correct number of events', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });
});