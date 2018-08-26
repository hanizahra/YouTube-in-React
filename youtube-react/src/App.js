import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSearch from './components/input_search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputSearch />
      </div>
    );
  }
}

export default App;
