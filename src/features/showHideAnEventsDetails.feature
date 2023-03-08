Feature: Show and hide event details

Scenario: Event details are hidden by default
Given an event is on the page'
When the user performs no actions
Then the details are hidden

Scenario: User can click a button to view event details
Given an event's details are hidden
When the user clicks the details button
Then the user should see the event details

Scenario: User can click a button to hide event details
Given an event's details are displayed
When the user clicks the details button
Then the event's details become hidden