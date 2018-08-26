import React from 'react';

const VideoListItem = (props) => {

	const thumbnail = props.video.snippet.thumbnails.default.url;
	const title = props.video.snippet.title;

	return (
		<li onClick={() => {props.clicked(props.video)}} className='list-group-item'>
			<div className='media-left'>
				<img src={thumbnail}/>
			</div>
			<div className='title-heading'>
				<div className='heading-title'>
					{title}
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;