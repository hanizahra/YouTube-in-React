import React from 'react';

const VideoListItem = (props) => {

	const thumbnail = props.video.snippet.thumbnails.default.url;
	const title = props.video.snippet.title;

	return (
		<li onClick={() => {props.clicked(props.video)}} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={thumbnail} alt={'thumbnail'}/>
				</div>
				<div className='media-body'>
					<div className='media-heading'>
						{title}
					</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;