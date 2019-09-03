import React from 'react';

const UPDATE_FREQUENCY = 1 * 1000;

class Clock extends React.Component {
  timer
  state = { time: new Date() }

  componentDidMount() {
    this.timer = setInterval(this._update, UPDATE_FREQUENCY);
    this.setState({ time: new Date() });
    this._update();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _update = () => {
    this.setState({ time: new Date() });
  };

  render() {
    var hr = this.state.time.getHours();
    var min = this.state.time.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var s = this.state.time.getSeconds();
    if (s < 10) {
      s = "0" + s;
  }
    var ampm = "am";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "pm";
    }
    let timeStr = `${hr}:${min}:${s} ${ampm}`
 
    return (
      <div aria-live="polite">
        {timeStr}
      </div>
    );
  }
}

export default Clock;
