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
    const summary = EventWrapper.find('p.summary')
    const summaryString = event.summary;
    expect(summary).toBeDefined();
    expect(summary.text()).toBe(summaryString);
  });

  test('<Event /> start time is rendered correctly', () => {
    const eventStart = EventWrapper.find('p.start')
    const dateString = event.start.dateTime;
    expect(eventStart).toBeDefined();
    expect(eventStart.text()).toBe(dateString);
  });

  test('<Event /> location is rendered correctly', () => {
    const eventLocation = EventWrapper.find('p.location')
    const locationString = event.location;
    expect(eventLocation).toBeDefined();
    expect(eventLocation.text()).toBe(locationString);
  });
  
});