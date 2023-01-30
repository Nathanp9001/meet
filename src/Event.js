import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;

    return(
    <div className="event">
      <h3 className="summary">{ event.summary }</h3>
    </div>
    );
  }
}
export default Event;