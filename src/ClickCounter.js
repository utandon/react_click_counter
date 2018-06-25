import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      counter: 0,
    }
  }
  handleClick(counter) {
    this.setState({
      counter: this.state.counter+1
    });
  }
  reset() {
    this.setState({
      counter: 0,
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to Click Counter Website</h2>
        <div className="counter">{this.state.counter}</div>
        <button className="counter-button" onClick={() => this.handleClick(this.state.counter)}>Click Me!</button>
        <button className="reset-button" onClick={() => this.reset()}>Reset Me!</button>
      </div>
    );
  }
}

export default ClickCounter;
