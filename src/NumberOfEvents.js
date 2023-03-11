import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    num: 30,
    errorText: '',
    events: []
  };

  changeNum = (value) => {
    this.setState({ num: value });
    this.props.updateNumberOfEvents(value);
    if (value < 1 || value > 60) {
      this.setState({ errorText: 'Please select a value between 1 and 60' });
    } else {
      this.setState({ errorText: '' });
    }
  };

  componentDidMount () {
    this.setState({ num: this.props.num || 30 });
  };

  render () {
    const { num } = this.state;

    return (
      <div>
        <label>
          Number of events
          <input
            className='num'
            type='number'
            value={num}
            onChange={(event) => {
              this.changeNum(event.target.value);
            }}
          />
        </label>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;