import React, { Component } from 'react';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
  state ={
    events: [],
    locations: [],
    showWelcomeScreen: undefined,
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
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then(events => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    const offlineMessage = navigator.online
    ?""
    : "Meet is offline and will update next time you connect";

    return (
      <div className="App">
        <div className="alert-offline">
          <OfflineAlert message={offlineMessage} />
        </div>
        <div className="citySearch">
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        </div>
        <div className="numberOfEvents">
          <NumberOfEvents
            num={this.state.numberOfEvents}
            updateNumberOfEvents={(num) => this.updateNumberOfEvents(num)} 
          />
        </div>
        <div className="eventList">
          <EventList events={this.state.events} />
        </div>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
