import React, { Component } from "react";
import ReactDOM from "react-dom";
// import OldApp from "./OldApp";
import App from "./App";


class Hello extends Component {

  render() {
    return (
      <span style={{color: 'gold', fontSize: '32px'}}>
        Hello&nbsp;
      </span>
    );
  }
}

class World extends Component {

  render() {
    return (
      <span style={{color: 'aqua', fontSize: '32px'}}>
        World!
      </span>
    );
  }
}

class HelloWorld extends Component {
  getName() {
    return ("Skant");
  }

  render() {
    return (
      <div>
        <Hello/>
        <World/>
        { this.getName() }
        <App/>
      </div>
    );
  }
}




ReactDOM.render( <HelloWorld/>, document.getElementById('root') );