import React, { Component } from 'react';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { Row, Col } from "react-bootstrap";


class App extends Component {
  state ={
    events: [],
    locations: [],
    selectedLocation: 'all',
    numberOfEvents: 30
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        selectedLocation: location
      });
    });
  };

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number,
    });
    this.updateEvents(this.state.selectedLocation, number);
  }

    async componentDidMount() {
    this.mounted = true;
    getEvents().then(events => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <div className="citySearch">
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        </div>
        <div className="numberOfEvents">
          <NumberOfEvents
            num={this.state.numberOfEvents}
            updateNumberOfEvents={(num) => this.updateNumberOfEvents(num)} 
          />
        </div>
        <Row>
          <Col md={4} className="eventList">
            <EventList events={this.state.events} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
