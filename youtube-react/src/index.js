import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import InputSearch from './components/input_search';
import registerServiceWorker from './registerServiceWorker';


class App extends Component {
  render() {
    return (
      <div>
        <InputSearch />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
