import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {


  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />)
  });

  test('<Event /> is rendered', () => {
    expect(EventWrapper).toBeDefined();
  });

  test('<Event /> summary is rendered correctly', () => {
    const summary = EventWrapper.find('h3.summary')
    const summaryString = event.summary;
    expect(summary).toBeDefined();
    expect(summary.text()).toBe(summaryString);
  });
  
});