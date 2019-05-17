import React from 'react';

class Counter extends React.Component {


  render(){
    console.log(this);
    console.log(this.incrementCounter);
    return(
      <div>
        { this.props.count }
        <br />
        <button type="button" onClick={this.props.incrementCounter}>Click me</button>
      </div>
    );
  }
  
}

export default Counter;