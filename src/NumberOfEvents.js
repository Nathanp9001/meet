import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = { num: 10 };

  changeNum = (value) => {
    this.setState({ num: value });
    this.props.updateNumberOfEvents(value);
    if (value < 1 || value > 20) {
      this.setState({ errorText: 'Please select a value between 1 and 20' });
    } else this.setState({ errorText: '' });
  };

  componentDidMount () {
    this.setState({ num: this.props.num || 10 });
  };

  render () {
    const { num } = this.state;

    return (
      <div>
        <label>
          Number of events
          <input
            classNamej='num'
            type='number'
            value={num}
            onChange={(event) => {
              this.changeNum(event.target.value);
            }}
          />
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;