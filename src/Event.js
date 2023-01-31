import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;

    return(
    <div className="event">
      <p className="summary">{ event.summary }</p>
      <p className="start">{ event.start.dateTime }</p>
      <p className="location">{ event.location }</p>
    </div>
    );
  }
}
export default Event;