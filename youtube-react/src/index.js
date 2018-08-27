import dotenv from 'dotenv';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InputSearch from './components/input_search';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import _ from 'lodash';
dotenv.config()
const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		videos: [],
  		selectedVideo: null,
  		searchTerm: 'cute puppies'
  	}
  	this.youTubeSearch();
  }

  youTubeSearch(term) {
  	this.setState({
  		searchTerm: term
  	})
  	axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${this.state.searchTerm}`)
  		.then(response => {
  			this.setState({
  				videos: response.data.items,
  				selectedVideo: response.data.items[0]
  			})
  		})
  		.catch(error => {
  		})
  }

  clickedVid = (video) => {
  	this.setState({
  		selectedVideo: video
  	})
  }

  render() {

  	const throttledSearch = _.debounce((term) => {this.youTubeSearch(term)}, 100)

    return (
      <div>
        <InputSearch searched={throttledSearch} />
        <VideoDetail selectedVideo={this.state.selectedVideo}/>
        <VideoList clicked={this.clickedVid}  videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


