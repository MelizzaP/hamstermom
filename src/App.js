import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
      </div>
    );
  }
}

export default App;
