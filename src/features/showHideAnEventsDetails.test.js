import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('Event details are hidden by default', ({ given, when, then }) => {
    given('an event is on the page\'', () => {

    });

    when('the user performs no actions', () => {
      AppWrapper = mount(<App />);
    });

    then('the details are hidden', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event.show')).toHaveLength(0);
    });
});

test('User can click a button to view event details', ({ given, when, then }) => {
  given('an event\'s details are hidden', () => {
    AppWrapper = mount(<App />);
  });

  when('the user clicks the details button', () => {
    AppWrapper.update();
    AppWrapper.find('.event .button-details').at(0).simulate('click');
  });

  then('the user should see the event details', () => {
    expect(AppWrapper.find('.Event.show')).toHaveLength(1);
  });
});

test('User can click a button to hide event details', ({ given, when, then }) => {
  given('an event\'s details are displayed', () => {

  });

  when('the user clicks the details button', () => {

  });

  then('the event\'s details become hidden', () => {

  });
});
});