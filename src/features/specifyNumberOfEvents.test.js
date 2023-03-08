import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('Ten events are shown by default', ({ given, when, then }) => {
      given('the user is viewing the app', () => {

      });

      when('the user has not selected a number of events', () => {
        AppWrapper = mount(<App />);
      });

      then('Ten events are shown on the page', () => {
        expect(AppWrapper.state('numberOfEvents')).toEqual(10);
      });
  });

  test('User can decide how many events to view', ({ given, when, then }) => {
    given('the user is viewing the app', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user changes the number of events in the input box', () => {
      AppWrapper.update();
      let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
      const eventObject = { target: { value: 1 } };
      NumberOfEventsWrapper.find('.num').simulate('change', eventObject);
    });

    then('the number they selected is how many events are shown on the page', () => {
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});