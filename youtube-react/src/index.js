import dotenv from 'dotenv';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InputSearch from './components/input_search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
dotenv.config()
const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  	this.youTubeSearch();
  }

  youTubeSearch() {
  	axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDhW0fadhsCTrSc1jaHKa0tJ6J6paXyvDs&q=dogs')
  		.then(response => {
  			console.log('this is the response ', response.data)
  		})
  }

  render() {

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
