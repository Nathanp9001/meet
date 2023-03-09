Feature: Specify number of events displayed

Scenario: Thirty events are shown by default
Given the user is viewing the app
When the user has not selected a number of events
Then Thirty events are shown on the page

Scenario: User can decide how many events to view
Given the user is viewing the app
When the user changes the number of events in the input box
Then the number they selected is how many events are shown on the page