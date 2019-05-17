import React, { Component } from 'react';
import Counter from './Counter';


class OldApp extends Component {

  constructor() {
    super();

    this.state = {
      first_name: 'Ramveer',
      count: 0,
      fruits: ["Apple", "Banana", "Mango", "Orange", "Cheery"]

    }

    this.incrementCounter = this.incrementCounter.bind(this);
  };

  incrementCounter() {
    let count = this.state.count;

    this.setState({
      count: ++count,
    });
  }

  render() {

    return(
      <div>
        { this.state.first_name }
        <br />
        { this.state.count }
        <br />
        <button type="button" onClick={this.incrementCounter}>Click me</button>
        <br />
        <br />

        { this.state.fruits.map( (fruit, index) => {
          return(
            <li key={index}>{ fruit }</li>
          );
        })}
        <br />
        <br />

        <Counter
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        />

      </div>
    );
  }

}

export default OldApp;