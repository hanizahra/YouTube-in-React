import React from 'react';


const VideoDetail = () => {
	return (
		<div className='col-md-8 video-detail'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item'></iframe>
			</div>
			<div className='details'>
				<div>
					title
				</div>
				<div>
					description
				</div>
			</div>
		</div>
	)
}

export default VideoDetail;