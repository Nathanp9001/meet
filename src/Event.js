import React, { Component } from "react";

class Event extends Component {
  state = { collapsed: true };

  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return(
    <div className="event">
      <p className="summary">{ event.summary }</p>
      <p className="start">{ event.start.dateTime }</p>
      <p className="location">{ event.location }</p>

    <button className="details-button" onClick={this.toggleDetails}>
      {collapsed ? "show" : "hide"} details
    </button>

    {!collapsed && (
      <div className="details">
        <h3 className="about">About this event:</h3>
        <p className="description">{event.description}</p>
      </div>
    )}
    </div>
    );
  }
}
export default Event;