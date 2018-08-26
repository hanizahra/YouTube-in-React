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
  		videos: [],
  		selectedVideo: null
  	}
  	this.youTubeSearch();
  }

  youTubeSearch() {
  	axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=dogs`)
  		.then(response => {
  			console.log('this is the response ', response.data)
  			this.setState({
  				videos: response.data.items,
  				selectedVideo: response.data.items[0]
  			})
  			console.log('this is videos ', this.state.videos);
  			console.log('this is selectedVideo ', this.state.selectedVideo);
  		})
  		.catch(error => {
  			console.log('This is the error: ', error)
  		})
  }

  render() {

    return (
      <div>
        <InputSearch />
        <VideoDetail selectedVideo={this.state.selectedVideo}/>
        <VideoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
