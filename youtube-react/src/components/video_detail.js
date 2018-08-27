import React from 'react';


const VideoDetail = (props) => {

	const video = props.selectedVideo;

	if(!props.selectedVideo) {
		return <div>Loading...</div>
	}

	const url = `https://www.youtube.com/embed/${video.id.videoId}`;
	const title = video.snippet.title;
	const description = video.snippet.description;

	return (
		<div className='video-detail col-md-6'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>
					{title}
				</div>
				<div>
					{description}
				</div>
			</div>
		</div>
	)
}

export default VideoDetail;