import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoList = props.videos.map((video) => {
		return (
			<VideoListItem 
				key={video.etag}
				video={video}
				clicked={props.clicked}
			/>
		)
	})

	return (
		<div className='col-md-4 list-group'>
			{videoList}
		</div>
	)
}

export default VideoList;