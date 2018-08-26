import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InputSearch from './components/input_search';
import VideoDetail from './components/video_detail';


class App extends Component {
  render() {
    return (
      <div>
        <InputSearch />
        <VideoDetail />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
