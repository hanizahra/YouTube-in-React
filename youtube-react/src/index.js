import dotenv from 'dotenv';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InputSearch from './components/input_search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
dotenv.config()
console.log('env: ', +process.env)

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		apikey: process.env.REACT_APP_API_KEY
  	}
  }

  render() {
  	console.log('this is api key ', this.state.apikey)
    return (
      <div>
        <InputSearch />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
